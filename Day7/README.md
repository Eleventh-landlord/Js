## 🎯 Practice Exercise 1  

**Task:** Create a `Book` Class  

**Requirements:**  
1. Define a `Book` class with properties: `title`, `author`, and `year`  
2. Add a method `getSummary()` that returns a string like:  
   `"Book: [title] by [author] ([year])"`  
3. Create at least 2 `Book` objects and call `getSummary()` for each  

**Challenge:**  
Add a property `isBorrowed` (default `false`) and a method `borrowBook()` that sets it to `true`.  


## 🎯 Practice Exercise 2  

**Task:** Student Report Card  

**Requirements:**  
1. Create a `Student` class with: `name`, `age`, and `grades` (array of numbers)  
2. Add a method `calculateAverage()` that returns the average grade  
3. Add a method `getDetails()` that shows the student’s name, age, and average  

**Challenge:**  
If the average is below 50, make `getDetails()` also show `"❌ Failed"`, otherwise `"✅ Passed"`.  


## 🎯 Practice Exercise 3  

**Task:** Vehicle Inheritance  

**Requirements:**  
1. Create a `Vehicle` base class with properties: `brand`, `model`, `year`  
2. Add a method `getInfo()` that prints the details  
3. Create a `Car` class that extends `Vehicle` and adds `fuelType`  
4. Override `getInfo()` in `Car` to also include the `fuelType`  

**Challenge:**  
Add a method `isOld()` in `Vehicle` that returns `true` if the vehicle’s year is more than 10 years old.  


## 🎯 Practice Exercise 4  

**Task:** Shopping Cart with Classes  

**Requirements:**  
1. Create a `Product` class with `name`, `price`  
2. Create a `Cart` class with an array `items`  
3. Add methods in `Cart`:  
   - `addProduct(product, quantity)`  
   - `removeProduct(productName)`  
   - `getTotal()` → sum of all prices × quantity  

**Challenge:**  
Make `getTotal()` return `"Free Shipping"` if the total is above N100.  