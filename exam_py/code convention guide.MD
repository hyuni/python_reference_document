
# 🐍 Python 코딩 컨벤션 가이드 (PEP 8)

## 📌 1. 이름 규칙 (Naming Conventions)

| 용도             | 규칙                         | 예시                        |
|------------------|------------------------------|-----------------------------|
| 변수, 함수        | `lower_case_with_underscores` | `user_name`, `get_user()`   |
| 클래스           | `CapWords` (PascalCase)      | `Account`, `UserProfile`    |
| 상수            | `ALL_CAPS_WITH_UNDERSCORES`  | `MAX_RETRIES`, `TIMEOUT`    |
| 내부용 속성      | `_single_leading_underscore` | `_internal_cache`           |
| 매직 메서드      | `__double_underscores__`     | `__init__`, `__str__`       |

## 📌 2. 들여쓰기 (Indentation)

- **스페이스 4칸** 사용 (Tab 금지)
- Tab 을 space 로 자동 변환 설정해서 사용

```python
def my_function():
    if True:
        print("Hello")
```

## 📌 3. 줄 길이 (Line Length)

- 한 줄에 최대 79자

- 긴 표현식은 괄호를 이용한 줄바꿈 권장

```python
# 권장
data = some_function(
    arg1, arg2, arg3, arg4
)

# 비권장
data = some_function(arg1, arg2, arg3, \\
                     arg4)
```


## 📌 4. 공백 사용 (Whitespace)

- 연산자 양쪽에 하나의 공백

- 괄호, 대괄호, 중괄호 내부에는 공백 없음

```python
# 권장
x = 1 + 2
print(x)

# 비권장
x=1+2
print( x )
```

## 📌 5. import 순서

- 표준 라이브러리

- 서드파티 패키지

- 로컬 모듈

```python
# → 각 그룹 사이에 한 줄 띄움
import os
import sys

import requests

from myapp.utils import parse_config

```

## 📌 6. 주석 (Comments)

- 블록 주석: 코드 위에 전체 설명
- 인라인 주석: 코드 끝에 # 사용

```python
# 사용자 목록을 순회합니다.
for user in users:
    process(user)  # 사용자 처리 함수
```

## 📌 7. 타입 힌트 (Type Hints)

- Python 3.5+ 이상에서 지원

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

## 📌 8. Docstring

- 삼중 따옴표 (""") 사용하여 함수, 클래스, 모듈 설명
- docstring.py 참고

```python
def add(a: int, b: int) -> int:
    """
    두 수를 더합니다.

    :param a: 첫 번째 정수
    :param b: 두 번째 정수
    :return: 합계
    """
    return a + b
```
