
# String Calculator

A simple yet powerful string calculator that performs basic arithmetic operations by parsing strings with numbers and delimiters.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/prabhattopi/string_calculator.git
```

### Navigate to the Project Directory

```bash
cd string-calculator
```

### Run the Application

To start the application in development mode:

```bash
npm run dev
```

## Running Tests

We’ve implemented comprehensive test cases to ensure the functionality of the string calculator.

### Run the Tests

```bash
npm test
```

### Test Cases

- **Returns 0 for an empty string**  
  Ensures that when an empty string is passed, the result is 0.

- **Returns the number itself if one number is provided**  
  Handles single-number input by returning the number as the result.

- **Returns the sum of two numbers**  
  Correctly calculates the sum of two comma-separated numbers.

- **Returns the sum of multiple numbers**  
  Supports summation of multiple numbers separated by commas.

- **Handles new lines between numbers**  
  Allows for new lines between numbers in addition to commas.

- **Supports different delimiters**  
  Custom delimiters can be defined in the format `//[delimiter]\n[numbers]`.

- **Throws an exception for negative numbers**  
  Ensures that negative numbers are not allowed and provides a meaningful error message.

- **Throws an error when a negative number is present with multiple commas**  
  Handles edge cases where there are multiple delimiters followed by a negative number.

- **Throws an error listing all negative numbers**  
  Provides a list of all negative numbers found in the input string in the error message.

- **Returns the number itself if one number is provided, even with a trailing comma**  
  Handles cases where a single number is followed by a comma.

- **Returns the sum if the number is provided with multiple commas**  
  Handles cases with multiple trailing commas and calculates the correct sum.

For more details, explore the [String Calculator GitHub Repository](https://github.com/prabhattopi/string_calculator).
