# Arabic to Roman Conversor

This was a [FreeCodeCamp](https://www.freecodecamp.org/) JS Project [(link)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator) that was required to complete the course [Javascript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).

## Format accepetd

they are:

- 555-555-5555
- (555)555-5555
- (555) 555-5555
- 555 555 5555
- 5555555555
- 1 555 555 5555
- 1(555)555-5555
- 1 (555) 555-5555
- 1 555-555-5555

## RegEx

in this code since we have to follow certain formats the best way to do it is using regex, and in this code we use two:

---

First: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

we have:

- (\d{3}): we need to have 3 numbers in a row
- [- ]?: we may or may not have the "-" or the " " in this position
- (\d{3}): we need to have 3 numbers in a row
- [- ]?: we may or may not have the "-" or the " " in this position
- (\d{4}): we need to have 4 numbers in a row

in this way we get the formats:

- 555-555-5555
- 555 555 5555
- 5555555555

---

Second: /^\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$/

we have:

- ((\d{3})\): we need to have 3 numbers in a row and a mandatory parentheses
- [- ]?: we may or may not have the "-" or the " " in this position
- (\d{3}): we need to have 3 numbers in a row
- [- ]?: we may or may not have the "-" or the " " in this position
- (\d{4}): we need to have 4 numbers in a row

in this way we get the formats:

- (555)555-5555
- (555) 555-5555

---

The other formats having the "1" in the beggining we do the same regex but with an if statment checking the number os characters, without the special ones, and checking if the first element is "1".
