import unittest
from fib import fib


class FirstTests(unittest.TestCase):
    def test_first_test(self):
        n = 4
        result = fib(n)
        self.assertEqual(result, 3)


if __name__ == '__main__':
    unittest.main()
