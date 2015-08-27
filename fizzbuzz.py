#!/usr/bin/python

for i in range(1,101):
        stdout = ''
        fizz = False
        buzz = False
        if i%3 == 0:
                stdout += 'Fizz'
                fizz = True

        if i%5 == 0:
                stdout += 'Buzz'
                buzz = True

        if fizz is False and buzz is False:
                stdout += str(i)

        print stdout
