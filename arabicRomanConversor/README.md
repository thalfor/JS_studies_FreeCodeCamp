# Arabic to Roman Conversor

This was a [FreeCodeCamp](https://www.freecodecamp.org/) JS Project [(link)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter) that was required to complete the course [Javascript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).

## Important note:

Roman Numerals will only be done to 3999 because after that we do not use anymore the MMM but the number with a dash on top of it, and this cannot be printed in the terminal.

## You'll notice that we have here 2 files.

The first one:

- the logic is done splitting the number into Unit, Tenth, Hundredtb and Thousand bases because then i'll have the position that i'll need to convert.
- the code i did to complete the course. It has switch cases for unit, tenth, hundredth and thousand that are the main parts of Roman numerals.
- also it has a function called in each step to join the roman numerals letters.
- at the end a simple join is used to make the Roman Numeral.
- this was the logic i did in the course.

The second one:

- with iteration this code is not only "cleaner" but it's also more optimal.
- a matrix with the fixed numerals is created.
- the code runs the matrix (top to bottom) and keeps joining the romam numerals as it finds the respective value in the matrix. Then the iteration happens as the function is called again stacking it.
- it's important to know that iteration is a powerful tool, however when it's range gets large enough (not only to 3999 as in this project) the stacking will possibly crash the code due to memory excess. So you'll have to be carefull on if it's worth it or not to use iteration.
