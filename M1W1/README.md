
# W1D2 - The Dev Workflow

## Agenda

1. Introduction
2. Curriculum Overview
3. Approach to Lectures
4. Tools
5. Version Control
6. Incremental Development
7. Demo & Code


### Lecture Logistics

- Zoom link provided 15-20 minutes before the lecture.
- Lectures start at 10:00 am PST / 1:00 pm EST.
- 10-minute break around 11:00 am PST / 2:00 am EST.
- Lectures may extend beyond 2 hours.

### Key Points in Lectures

- Encouragement of camera use for engagement and relationship building.
- Overcoming shyness and anxiety in virtual settings.
- Importance of focus during lectures and active questioning.
- Avoid multitasking during lectures.

### Tools and Practices

- Emphasis on learning keyboard shortcuts and using helpful add-ons like Eslint and Prettier.
- Guidance against premature use of tools like GitHub CoPilot and ChatGPT for coding.

## Version Control with GIT

- Importance and use of GIT for version control in projects.
- Key GIT Commands and Workflow.
- Best Practices in GIT usage.

## Incremental Development

- Approach of breaking down large projects into smaller, manageable increments.
- Each iteration focuses on a set of features, leading to a working and deployable version.
- Analogy of building a house to explain incremental development in web projects.

### Coding Exercise

- Write a Node program to sum command line arguments. Skip non-whole numbers but support negative numbers. Handle errors for non-numeric inputs. Minimum of 2 arguments required.


# Start Basic

## Step 1: Initialize the Code

```javascript
/*
 I want to write a function that takes an unlimited number of command line arguments,
 goes through each one, and prints out the sum of them.
*/
const args = process.argv.slice(2); // Get command-line arguments
let sum = 0; // Initialize a variable to store the sum
```

## Step 2: Display Command-Line Arguments

```javascript
console.log(args); // Display the command-line arguments
```

## Building Blocks (Each Requirement)

### Requirement 1: If an argument is a whole number, add it to the sum

#### Step 3: Create a Function to Check Validity

```javascript
const isValid = function(number){
    if(isNaN(number)){
        console.log("Non-number found! " + args[i]);
        return false;
    }
    else if(number % 1 !== 0){
        console.log("Number is a decimal");
        return false;
    }
    return true;
}
```

#### Step 4: Loop Through Arguments and Add Valid Numbers

```javascript
for(i = 0; i < args.length; i++){
    let number = Number(args[i]); // Convert argument to a number
    if(isValid(number)){
        sum += number; // Add valid whole numbers to the sum
    }
}
```

### Requirement 2: If an argument is not a whole number, ignore it

This requirement is addressed within the isValid function by checking if the number is a decimal. Invalid arguments are ignored.

### Requirement 3: Do not support negative numbers

This requirement is addressed within the isValid function by checking if the number is negative. Negative numbers are not supported.

### Requirement 4: Do not support letters

This requirement is addressed within the isValid function by checking if the argument is NaN (not a number). Non-numeric arguments are not supported.

## Step 5: Display the Sum of Valid Whole Numbers

```javascript
console.log(sum); // Display the sum of valid whole numbers
```

This code breakdown provides step-by-step instructions for creating a JavaScript function that calculates the sum of valid whole numbers from command-line arguments, adhering to each requirement. You can follow these steps to build your script and run it in the terminal.
