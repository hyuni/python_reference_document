import pytest

from models import UNKNOWN, Account, AccountType

def test_account_type_enum():
    assert AccountType.USER == "USER"
    assert AccountType.SUPERUSER == "SUPERUSER"
    assert AccountType.UNKNOWN == "UNKNOWN"

def test_account_creat():
    account = Account(
        accountType=AccountType.USER,
        accountId="user1234",
        accountName="user1234",
        accountDetail={
            "age": 20,
            "email": "user1234@email.com"
        }
    )
    
    with account as a:
        assert a.accountType == AccountType.USER
        assert a.accountId == "user1234"
        assert a.accountName == "user1234"
        assert a.accountDetail["age"] == 20
        assert a.accountDetail["email"] == "user1234@email.com"
        
def test_get_anonymous():
    anonymous = Account.getAnonymous()
    
    with anonymous as a:
        assert a.accountType == AccountType.UNKNOWN
        assert a.accountId == UNKNOWN
        assert a.accountName == UNKNOWN
        assert a.accountDetail == {}

