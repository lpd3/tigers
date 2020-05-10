# !/usr/bin/env python
from random import randint

seed = 1526
print('Content-Type: text/plain')
print()
# Smallest 5-digit multiple of 1526 is 1526*7
# Largest 8-digit multiple of 1526 is 1526*65530
print('Random value is {}'.format(seed*randint(7, 65530)))
