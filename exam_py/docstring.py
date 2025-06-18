# extension 설치 : autoDocstring
# autoDocstring 설정에서 Auto Docstring: Docstring Format 을 PEP 257 로 설정

# PEP 257 – Docstring Conventions


# One-line Docstrings
def kos_root():
    """Return the pathname of the KOS root directory."""
    pass

def function(a, b):
    """function(a, b) -> list"""


# Multiline Docstrings
def complex(real=0.0, imag=0.0):
    """Form a complex number.

    Keyword arguments:
    real -- the real part (default 0.0)
    imag -- the imaginary part (default 0.0)
    """
    pass