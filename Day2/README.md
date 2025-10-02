## 🎯 Practice Exercise 1

**Task:** Simple Grading System  

**Requirements:**  
1. Create a function `getGrade(score)`  
2. Use if/else if statements to assign grades:  
   - 90+ → "A"  
   - 80–89 → "B"  
   - 70–79 → "C"  
   - 60–69 → "D"  
   - Below 60 → "F"  
3. Return a message like: `"Score: 85 → Grade: B"`  

**Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`.

## 🎯 Practice Exercise 2

**Task:** Discount Calculator  

**Requirements:**  
1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
2. Apply discounts:  
   - Student → 10%  
   - Senior → 15%  
   - Employee → 20%  
3. If `isFirstPurchase` is true, add an extra 5% discount  
4. Return the final price (rounded to 2 decimals)  

**Challenge:** Print a full receipt showing original price, discount percent, and final price.

## 🎯 Practice Exercise 3

**Task:** Weather Advisor  

**Requirements:**  
1. Write a function `weatherAdvice(temperature, isRaining)`  
2. Use if/else if to return advice:  
   - < 32 and raining → "Freezing rain! Stay inside!"  
   - < 32 → "Very cold, wear a heavy coat."  
   - 32–60 → "Chilly, bring a jacket."  
   - 60–80 → "Nice weather!"  
   - `>` 80 → "It's hot, stay hydrated!"  
3. Return the advice as a string  

**Challenge:** Add a ternary operator for quick advice like:  
   `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.

## 🎯 Practice Exercise 4

**Task:** ATM Simulation  

**Requirements:**  
1. Create a function `atm(balance, action, amount)`  
2. If action is `"withdraw"`, check if balance is enough:  
   - If yes, subtract amount and return new balance  
   - If no, return `"Insufficient funds"`  
3. If action is `"deposit"`, add amount to balance and return new balance  
4. Use clear messages in template literals  

**Challenge:** Add a condition that blocks withdrawals over 500 at once.

## 🎯 Practice Exercise 5
**Tast:** Personal Assistant Function

Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

**Your Mission:**
Create a function called `personalAssistant` that:
1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
2. Uses conditional logic to give appropriate advice
3. Returns different messages based on the conditions
4. Handles various scenarios intelligently

**Requirements:**
- Use if/else statements for complex logic
- Include at least one logical operator (&&, ||, !)
- Use a ternary operator for simple decisions
- Return helpful, personalized advice
- Handle edge cases (invalid inputs)

## 🎯 Practice Exercise 6

**Task:** Apply Common Function Patterns  

**Requirements:**  
1. Create a **validation function** `isStrongPassword(password)` that checks:  
   - At least 8 characters  
   - Contains a number  
   - Contains a special character  
2. Create a **formatter function** `formatPercentage(value)` that always shows one decimal place with `%`.  
3. Create a **calculator function** `calculateCompoundInterest(principal, rate, years)` using the formula:  
   \[
   A = P \times (1 + r)^t
   \]  
4. Create a **decision maker function** `canGraduate(credits, gpa)` that:  
   - Requires at least 120 credits  
   - Requires GPA ≥ 2.0  
5. Create a **utility function** `reverseWords(sentence)` that takes a string and returns the sentence with the words reversed.  

**Challenge:** Extend `reverseWords` to also capitalize the first letter of each word.  

## 🎯 Practice Exercise 7  

**Tast:** Smart Shopping Calculator

Time to combine everything you've learned! Create a comprehensive shopping calculator that uses functions, conditionals, and different scopes to solve real-world problems.

**Your Challenge:**  
Build a smart shopping system with multiple functions that work together:

1. **Product Calculator** - Calculate item totals with discounts  
2. **Tax Calculator** - Apply different tax rates based on location  
3. **Shipping Calculator** - Calculate shipping based on weight and distance  
4. **Membership Discounts** - Apply different member benefits  
5. **Final Receipt Generator** - Put it all together with formatting  

**Requirements:**  
- Use at least 5 functions  
- Include parameter validation in each function  
- Use if/else statements for different scenarios  
- Include at least one ternary operator  
- Use proper variable scope  
- Handle edge cases (invalid inputs)  
- Return well-formatted results  
