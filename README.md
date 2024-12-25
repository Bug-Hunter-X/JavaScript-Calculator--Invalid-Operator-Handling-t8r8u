# JavaScript Calculator: Invalid Operator Handling

This repository demonstrates a common error in JavaScript related to error handling, specifically in a simple calculator function.

## Bug Description
The `calculate` function handles invalid operators by returning the string "Invalid operator."  This is inconsistent with the error handling for division by zero, which throws an exception. This inconsistency makes debugging and error handling more difficult.

## Solution
The solution provided improves the `calculate` function to throw an error when an invalid operator is used, maintaining consistency and providing better error reporting.