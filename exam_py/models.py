from __future__ import annotations
from enum import Enum
from pydantic import BaseModel

UNKNOWN: str = "UNKNOWN"

class AccountType(str, Enum):
    """AccountType 정의"""
    USER = "USER"
    SUPERUSER = "SUPERUSER"
    UNKNOWN = "UNKNOWN"
    
class Account(BaseModel):
    accountType: AccountType
    accountId: str
    accountName: str
    accountDetail: dict[str, object]
    
    @classmethod
    def getAnonymous(cls) -> Account:
        """Anonymouse Account 반환"""
        anonymous = Account(
            accountType=AccountType.UNKNOWN, 
            accountId=UNKNOWN,
            accountName=UNKNOWN,
            accountDetail={}
            )
        return anonymous
    
    # helper method
    def __enter__(self):
        return self
    
    def __exit__(self, exception_type, exception_value, exception_traceback):
        pass