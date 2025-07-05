// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as fs from 'fs';
import * as path from 'path';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand("spring-boot-domain-generator.generateDomains", 
		async (uri: vscode.Uri) => {
			const DomainName = await vscode.window.showInputBox({
				prompt: '생성할 컴포넌트의 이름을 입력하세요 (예: Product)',
				placeHolder: "ex) Product",
				validateInput: (value: string) => {
					if (!value) {
						return "Domain name is required";
					}
					return undefined;
				},
			});

			if (DomainName) {
				const capitalizedDomainName = DomainName.charAt(0).toUpperCase() + DomainName.slice(1);
        		const lowerCaseDomainName = DomainName.charAt(0).toLowerCase() + DomainName.slice(1);

				// 2. basePackagePath 결정:
				//    - Explorer에서 호출된 경우: 선택된 폴더의 경로를 사용
				//    - 명령 팔레트에서 호출된 경우: 현재 활성 텍스트 에디터의 파일 경로 또는 작업 폴더의 기본 경로를 사용
				let selectedPath: string | undefined;

				if (uri && uri.scheme === 'file') {
					// Explorer에서 마우스 오른쪽 버튼으로 호출된 경우
					selectedPath = uri.fsPath;
				} else if (vscode.window.activeTextEditor) {
					// 활성 텍스트 에디터가 있는 경우
					selectedPath = path.dirname(vscode.window.activeTextEditor.document.uri.fsPath);
				} else {
					// 작업 폴더가 열려 있는 경우
					const workspaceFolders = vscode.workspace.workspaceFolders;
					if (workspaceFolders && workspaceFolders.length > 0) {
						selectedPath = workspaceFolders[0].uri.fsPath;
					}
				}

				if (!selectedPath) {
					vscode.window.showErrorMessage('컴포넌트를 생성할 경로를 찾을 수 없습니다. 작업 폴더를 열거나 폴더를 선택해주세요.');
					return;
				}

				// 선택된 경로에서 'src/main/java' 부분을 찾아 그 다음부터의 경로를 basePackage로 사용
				// 예: /path/to/myproject/src/main/java/com/example/demo -> com.example.demo
				let basePackagePath: string | undefined;
				const javaRootIndex = selectedPath.indexOf(path.join('src', 'main', 'java'));
				
				if (javaRootIndex !== -1) {
					const packageRelativePath = selectedPath.substring(javaRootIndex + path.join('src', 'main', 'java').length + 1);
					basePackagePath = packageRelativePath.replace(/[\\/]/g, '.'); // 슬래시를 점으로 변경
				} else {
					vscode.window.showWarningMessage("VSCode 의 Explorer 에서 java 하위의 폴더를 선택후 마우스 오른쪽을 큭릭해서 시도하세요.");
					return;
				}				

				const packageFolder = path.join(selectedPath, ...basePackagePath.split('.'));
				const rootJavaPath = path.join(selectedPath.substring(0, javaRootIndex + path.join('src', 'main', 'java').length));				

				// 3. 템플릿 파일 경로 설정 및 읽기
				const templateDir = path.join(context.extensionPath, 'templates'); // 확장의 'templates' 폴더 경로
				
				const fileTypes = ['DTO', 'Entity', 'Controller', 'Service', 'Repository'];
				const fileContents: { [key: string]: string } = {};

				for (const type of fileTypes) {
					const templateFilePath = path.join(templateDir, `${type}.java.hbs`);
					try {
						let content = fs.readFileSync(templateFilePath, 'utf8');
						// 템플릿 변수 치환
						content = content.replace(/{{basePackage}}/g, basePackagePath || '')
										.replace(/{{capitalizedDomainName}}/g, capitalizedDomainName)
										.replace(/{{lowerCaseDomainName}}/g, lowerCaseDomainName);
						fileContents[type] = content;
					} catch (error: any) {
						vscode.window.showErrorMessage(`템플릿 파일 읽기 실패 (${type}): ${error.message}`);
						return;
					}
				}
				
				const filePaths = {
					'DTO': path.join(rootJavaPath, ...basePackagePath.split('.'), DomainName, `${capitalizedDomainName}DTO.java`),
					'Entity': path.join(rootJavaPath, ...basePackagePath.split('.'), DomainName, `${capitalizedDomainName}.java`),
					'Controller': path.join(rootJavaPath, ...basePackagePath.split('.'), DomainName, `${capitalizedDomainName}Controller.java`),
					'Service': path.join(rootJavaPath, ...basePackagePath.split('.'), DomainName, `${capitalizedDomainName}Service.java`),
					'Repository': path.join(rootJavaPath, ...basePackagePath.split('.'), DomainName, `${capitalizedDomainName}Repository.java`)
				};

				// 4. 파일 생성
				let filesCreated = 0;
				for (const type of fileTypes) {
					const filePath = filePaths[type as keyof typeof filePaths];
					const content = fileContents[type];

					if (!content) {
						vscode.window.showWarningMessage(`템플릿 내용이 없습니다: ${type}`);
						continue;
					}

					const dir = path.dirname(filePath);
					if (!fs.existsSync(dir)) {
						fs.mkdirSync(dir, { recursive: true });
					}

					try {
						fs.writeFileSync(filePath, content);
						filesCreated++;
					} catch (error: any) {
						vscode.window.showErrorMessage(`파일 생성 실패 (${type}): ${error.message}`);
					}
				}

				if (filesCreated > 0) {
					vscode.window.showInformationMessage(`${filesCreated}개의 Spring Boot 컴포넌트가 성공적으로 생성되었습니다!`);
				} else {
					vscode.window.showWarningMessage('생성된 파일이 없습니다.');
				}			
			}
		}
	);


	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "spring-boot-snippets" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('spring-boot-snippets.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from spring boot snippets!');
	// });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
