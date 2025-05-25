# python_reference_document


## Dev
 [FastAPI](https://fastapi.tiangolo.com/ko/)
  - RestfulAPI framework
  - OpenAPI Document 제공(http://127.0.0.1:8000/docs)

 [OpenAPI(aka swagger)](https://github.com/OAI/OpenAPI-Specification)
  - API Document

  [Pydantic](https://docs.pydantic.dev/latest/) 

  [SQLModel](https://sqlmodel.tiangolo.com/)
   - SQLAlchemy, Pydantic 을 내부적으로 사용


## Redis(Remote Dictionary Server)
 - Memory Key, Value DB
 - Op : SET, GET, DEL, EXISTS, MGET, EXPIRE, LPUSH, LPOP
 
 - Pub/Sub System
   ->  메시지 브로커, 실시간 소통(예:실시간 채팅, 방송 시작 알림)
 - 세션 관리
 - 캐싱 시스템
 - 실시간 분석
 - 메시지 큐

String: 일반적인 Key-Value 캐싱 (e.g. 토큰 저장)
List: FIFO(Queue) 또는 LIFO(Stack) 구조 활용 (e.g. 메시지 큐)
Set: 중복 없는 데이터 저장 (e.g. 실시간 접속 유저 목록)
Sorted Set: 순위 기반 데이터 저장 (e.g. 랭킹보드)
HyperLogLog: 대량의 고유 값 개수 추정 (e.g. DAU 계산)
Bitmaps: 특정 값의 On/Off 저장 (e.g. 유저 출석체크)
Geo: 위치 기반 데이터 처리 (e.g. 반경 내 맛집 검색)


## TDD
 [FastAPI: An Example of Test Driven Development](https://medium.com/@kasperjuunge/fastapi-an-example-of-test-driven-development-%EF%B8%8F-21109ea901ae)



## Tips
 [6 Python f-strings tips and tricks](https://www.30secondsofcode.org/python/s/6-f-strings-tips/)


## VSCode Debugging
 [VSCode Python Debugging](https://code.visualstudio.com/docs/python/debugging)
 [Debug Python within a container](https://code.visualstudio.com/docs/containers/debug-python)

 -외부모듈 debugging 시 launch.json 설정의 "justMyCode" 값을 false 로 설정

 [Remote Interactive Debugging of Python Applications Running in Kubernetes](https://martinheinz.dev/blog/99)
 [Remote Debugging Flask/Python Applications in OpenShift/Kubernetes and VS Code](https://medium.com/@moyo.oyegunle/remote-debugging-flask-python-applications-in-openshift-kubernetes-and-vscode-a933490ea84c)
 [fastapi-docker-debug](https://github.com/Kludex/fastapi-docker-debug)

 [FastAPI Study Diary (2) — How to Attach VSCode Debugger to Running FastAPI Code on Docker Container](https://medium.com/@mizutori/fastapi-study-diary-2-how-to-attach-vscode-debugger-to-running-fastapi-code-on-docker-container-cc3c91fd9246)


## Docker
 [Play with Docker Classroom](https://training.play-with-docker.com/) 
 
## etc

 [FastApi Code snippet](https://github.com/kevinliao852/fastapi-snippet)


## B/E Directory Structure 

Root

├── .env                <== 공통 설정

└── scripts             <== B/E, F/E 의 script 를 실행시키는 scripts(예: Root 의 build.sh 에서는 B/E의 build.sh 실행, F/E의 build.sh 실행)

    ├── build-push.sh

    ├── build.sh

    ├── deploy.sh

    ├── generate-client.sh

    ├── test-local.sh

    └── test.sh 

├── backend

├── frontend
