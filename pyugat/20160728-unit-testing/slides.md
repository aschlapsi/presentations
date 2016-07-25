# Unit Testing in Python with unittest

---

## What is Unit Testing?

Note: In computer programming, unit testing is a method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures are tested to determine if they are fit for use. [...] A unit could be an entire module, but it is more commonly an in- dividual function or procedure. –Wikipedia

---

## unittest library

- part of Python's standard library
- good starting point for unit testing in Python

----

## Structure of a Unit Test

1. Arrange
2. Act
3. Assert

----

<pre><code>
import unittest
from fib import fib


class FirstTests(unittest.TestCase):
    def test_first_test(self):
        n = 4
        result = fib(n)
        self.assertEqual(result, 3)

</code></pre>

----

## Running the tests

- within test module
- from command line

----

- **Failure**: failed test
- **Error**: something wrong with syntax,...

----

<pre><code>
import unittest
from fib import fib


class FirstTests(unittest.TestCase):
    def test_first_test(self):
        n = 4
        result = fib(n)
        self.assertEqual(result, 3)

    def test_second_test(self):
        self.assertEqual(fib(6), 8)

</code></pre>
