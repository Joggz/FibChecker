# Fibonaccichecker

- **Fibonacci**  is a mathematics sequences where the next number in the sequence is the result of the first two
```
  0, 1, 1, 2, 3, 5, 8
```


# Project requiremnt and How to Test
<!-- > My tiptop Nuxt.js project -->

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# Requirements And Condition
- Conditions: 
  - The max Number should end the sequence, but due to the nature of Fibonacci, where the precedding two value give the result for the next number, this condition cant be satisified for all number
  - if the next number is greater than the sum of the preceding two number, then its not added to the sequence so as to satisfy the criteria of the max number been the last item in the sequence
  if max number is equal 7  it returns 
  ``` fn (7)  ==> 0, 1, 1, 2, 3, 5 ```
 because the next fibonacci number is 8 which is greater than the max number
  - The add button validates if the user inputted random number is the next fibonacci number,
    if found truthy it adds the number to the sequence else we have an output that says its not the next number in the sequence.

- Requirements 
  - User Input a max number in the first input field
  - A random number in the second input field
  - use on the Add button to generate the total of the fibonacci sequence
  - use submit button to generate a list of the fibonacci sequence
  - use search button to check if your inputed random number is valid in the list fibonacci sequence



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
