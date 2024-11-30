# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

I decided not to use recursion in this code, which also helps in determining the time complexity. Since this is relatively simple code in terms of looping, the worst case runtime would be $$0(n^2)$$.

https://www.hackerrank.com/challenges/quicksort3/problem 
https://www.geeksforgeeks.org/quick-sort-algorithm/
I did take a look at the 2 sources above in order to remind myself about how the pivoting works.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
