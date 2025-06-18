

# project setting

환경변수 : JAVA_HOME, 


[Project JDKs](https://github.com/redhat-developer/vscode-java#project-jdks)
launch.json
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Current File",
            "request": "launch",
            "mainClass": "${file}"
        },
        {
            "type": "java",
            "name": "DemoApplication",
            "request": "launch",
            "mainClass": "com.example.demo.DemoApplication",
            "projectName": "demo",
            "args": "",
            "vmArgs": "-Dspring.profiles.active=local",
            "console": "internalConsole",
        }
    ]
}
```

setting.json
```json
{
    // ======================================================================
    // 1. Java 실행 환경(JDK) 설정 (가장 중요)
    // ======================================================================
    // 프로젝트를 컴파일하고 실행할 때 사용할 JDK를 지정합니다.
    // 여러 버전의 JDK를 등록하고 기본값을 설정할 수 있습니다.
    // VS Code의 Java 확장 프로그램이 이 설정을 참조합니다.
    "java.configuration.runtimes": [
        {
            "name": "JavaSE-17",
            "path": "/usr/local/opt/openjdk@17", // 💻 사용자의 JDK 17 설치 경로로 반드시 수정하세요.
            "default": true // 이 JDK를 프로젝트의 기본값으로 사용합니다.
        },
        // {
        //     "name": "JavaSE-21",
        //     "path": "/path/to/your/jdk-21" // 다른 버전의 JDK가 있다면 추가할 수 있습니다.
        // }
    ],
    // ======================================================================
    // 2. Java 언어 서버(Language Server) 실행용 JDK 설정
    // ======================================================================
    // VS Code의 Java 기능(자동 완성, 오류 검출 등)을 제공하는 언어 서버를
    // 실행하기 위한 JDK 경로입니다. 프로젝트 JDK와 달라도 되지만,
    // 보통 안정적인 최신 LTS 버전(17 이상)을 지정하는 것을 권장합니다.
    "java.jdt.ls.java.home": "/usr/local/opt/openjdk@17", // 💻 사용자의 JDK 17 설치 경로로 수정하세요.
    // ======================================================================
    // 3. 빌드 도구(Gradle) 연동 설정
    // ======================================================================
    // VS Code가 Gradle 프로젝트를 가져오거나 동기화할 때 사용할 JDK를 명시적으로 지정합니다.
    // build.gradle의 toolchain 설정을 VS Code가 자동으로 인식하는 경우가 많지만,
    // 이 설정을 통해 특정 JDK를 강제할 수 있습니다.
    "java.import.gradle.java.home": "/usr/local/opt/openjdk@17", // 💻 사용자의 JDK 17 설치 경로로 수정하세요.
    // ======================================================================
    // 4. 기타 유용한 설정
    // ======================================================================
    // 디버깅 세션을 시작할 때 적용할 기본 VM 인수를 설정합니다.
    "java.debug.settings.vmArgs": "-Xmx1G -Dfile.encoding=UTF-8",
    // 소스 파일을 저장할 때 자동으로 포맷팅을 실행합니다.
    "editor.formatOnSave": true,
    "java.compile.nullAnalysis.mode": "automatic",
    "spellright.notificationClass": "hint",
    "spellright.spellContext": "body comments",
    "java.trace.server": "verbose",
}
```


[Supported VS Code settings](https://github.com/redhat-developer/vscode-java?tab=readme-ov-file#supported-vs-code-settings)

[Supported VS Code settings - vscode](https://code.visualstudio.com/docs/languages/java#_supported-vs-code-settings)