function getGrade() {
  let score = Number(prompt("Enter score:"));

  if (score === 100) {
    console.log(`Score: ${score} -> Grade: A+`);
  } else if (score >= 90) {
    console.log(`Score: ${score} -> Grade: A`);
  } else if (score >= 80) {
    console.log(`Score: ${score} -> Grade: B`);
  } else if (score >= 70) {
    console.log(`Score: ${score} -> Grade: C`);
  } else if (score >= 60) {
    console.log(`Score: ${score} -> Grade: D`);
  } else {
    console.log(`Score: ${score} -> Grade: F`);
  }
}

//  Task 2: Calculate Price
function calculatePrice() {
  let price = Number(prompt("Enter price:"));
  let customerType = prompt("Enter customer type (student, senior, employee):");
  let isFirstPurchase = confirm("Is this your first purchase?");

  let discount = 0;

  if (customerType === "student") discount = 0.1;
  else if (customerType === "senior") discount = 0.15;
  else if (customerType === "employee") discount = 0.2;

  if (isFirstPurchase) discount += 0.05;

  let finalPrice = price * (1 - discount);

  console.log("--- RECEIPT ---");
  console.log(`Original Price: $${price}`);
  console.log(`Discount Percentage: ${discount * 100}%`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

// Task 3: Weather Advice
function weatherAdvice() {
  let temperature = Number(prompt("Enter temperature:"));
  let isRaining = confirm("Is it raining?");

  if (temperature < 32 && isRaining) {
    console.log(`Temperature is ${temperature} → Freezing rain! Stay inside!`);
  } else if (temperature < 32) {
    console.log(`Temperature is ${temperature} → Very cold, wear a heavy coat.`);
  } else if (temperature >= 32 && temperature < 60) {
    console.log(`Temperature is ${temperature} → It's chilly, bring a jacket.`);
  } else if (temperature >= 60 && temperature < 80) {
    console.log(`Temperature is ${temperature} → Nice weather.`);
  } else {
    console.log(`Temperature is ${temperature} → It's hot, stay hydrated!`);
  }
}

//  Task 4: ATM Simulation
function atm() {
  let balance = 1000;
  let action = prompt("Enter action (withdraw/deposit):").toLowerCase();
  let amount = Number(prompt("Enter amount:"));

  if (action === "withdraw") {
    if (amount > 500) {
      console.log(" Withdrawal limit exceeded (max 500).");
      return;
    }
    if (amount > balance) {
      console.log(` Insufficient funds. Balance: $${balance}`);
      return;
    }
    balance -= amount;
    console.log(` Withdrawn: $${amount}. New Balance: $${balance}`);
  } else if (action === "deposit") {
    balance += amount;
    console.log(` Deposited: $${amount}. New Balance: $${balance}`);
  } else {
    console.log(" Invalid action.");
  }
}

//  Task 5: Personal Assistant
function personalAssistant() {
  let time = Number(prompt("Enter time (0-23):"));
  let weather = prompt("Enter weather (sunny, rainy, cloudy):").toLowerCase();
  let dayType = prompt("Enter day type (workday, weekend, holiday):").toLowerCase();

  if (typeof time !== "number" || time < 0 || time > 23) {
    console.log(" Invalid time. Use 0-23.");
    return;
  }
  if (!["sunny", "rainy", "cloudy"].includes(weather)) {
    console.log(" Invalid weather.");
    return;
  }
  if (!["workday", "weekend", "holiday"].includes(dayType)) {
    console.log(" Invalid day type.");
    return;
  }

  if (time < 6) console.log(" It's very early, rest up!");
  else if (time < 12) console.log(" Good morning! Be productive.");
  else if (time < 18) console.log(" Good afternoon! Keep going strong.");
  else console.log(" Good evening! Relax and recharge.");

  if (weather === "rainy") console.log(" Don't forget your umbrella!");
  else if (weather === "sunny" && time >= 12 && time < 16) console.log(" It's sunny midday — wear sunscreen!");
  else if (weather === "cloudy") console.log(" Cloudy skies, might feel dull.");

  if (dayType === "workday" && time >= 9 && time <= 17) console.log(" Stay focused, it's work hours!");
  else if (dayType === "weekend" || dayType === "holiday") console.log(" Enjoy your free time!");

  console.log(time < 12 ? " Have some coffee." : " Maybe grab a nice meal.");
}

//Task 6
function commonFunction (){

function isStrongPassword(password) {
  const hasLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasLength && hasNumber && hasSpecial;
}

// 2. Formatter Function
function formatPercentage(value) {
  return value.toFixed(1) + "%";
}

// 3. Calculator Function (Compound Interest)
function calculateCompoundInterest(principal, rate, years) {
  // rate given as decimal (e.g., 0.05 for 5%)
  return principal * Math.pow(1 + rate, years);
}

// 4. Decision Maker Function
function canGraduate(credits, gpa) {
  return credits >= 120 && gpa >= 2.0;
}

// 5. Utility Function: Reverse Words
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// 5️ Challenge: Reverse & Capitalize
function reverseWordsCapitalized(sentence) {
  return sentence
    .split(" ")
    .reverse()
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}



console.log("Strong password? ", isStrongPassword("Passw0rd!")); // true
console.log("Strong password? ", isStrongPassword("weak123"));  // false

console.log("Percentage: ", formatPercentage(0.456)); // "0.5%"

console.log("Compound Interest: ", calculateCompoundInterest(1000, 0.05, 10).toFixed(2)); 


console.log("Can graduate? ", canGraduate(130, 2.5)); // true
console.log("Can graduate? ", canGraduate(110, 3.0)); // false

console.log("Reversed: ", reverseWords("hello world swag out")); 


console.log("Reversed + Capitalized: ", reverseWordsCapitalized("hello world swag out"));
}

//Task 7
function smartShopping () {
//  Product Calculator - item total with optional discount
function calculateItemTotal(price, quantity, discount = 0) {
  if (price <= 0 || quantity <= 0) return " Invalid price or quantity";
  if (discount < 0 || discount > 100) return "Invalid discount";

  let subtotal = price * quantity;
  let discountedTotal = subtotal * (1 - discount / 100);
  return discountedTotal;
}

//  Tax Calculator - tax by location
function calculateTax(amount, location) {
  if (amount <= 0) return " Invalid amount";

  let taxRate;
  if (location === "US") taxRate = 0.07;
  else if (location === "EU") taxRate = 0.20;
  else if (location === "NG") taxRate = 0.075;
  else taxRate = 0.10; // default

  return amount * taxRate;
}

//  Shipping Calculator - based on weight & distance
function calculateShipping(weight, distance) {
  if (weight <= 0 || distance <= 0) return " Invalid shipping values";

  let base = 5;
  let cost = base + weight * 0.5 + distance * 0.1;
  return cost;
}

//  Membership Discounts
function applyMembershipDiscount(amount, level) {
  if (amount <= 0) return " Invalid amount";

  let discountRate = 0;
  if (level === "gold") discountRate = 0.15;
  else if (level === "silver") discountRate = 0.1;
  else if (level === "bronze") discountRate = 0.05;

  return amount * (1 - discountRate);
}

// Final Receipt Generator
function generateReceipt(itemPrice, quantity, discount, location, weight, distance, membership) {
  console.log("----  SWAG OUT SHOP RECEIPT ----");

  // Step 1: Calculate product total
  let itemTotal = calculateItemTotal(itemPrice, quantity, discount);
  if (typeof itemTotal === "string") return itemTotal;

  // Step 2: Apply membership discount
  let afterMembership = applyMembershipDiscount(itemTotal, membership);
  if (typeof afterMembership === "string") return afterMembership;

  // Step 3: Add tax
  let tax = calculateTax(afterMembership, location);
  if (typeof tax === "string") return tax;

  // Step 4: Add shipping
  let shipping = calculateShipping(weight, distance);
  if (typeof shipping === "string") return shipping;

  // Step 5: Final total
  let finalTotal = afterMembership + tax + shipping;

  return `
  ----  SWAG OUT SHOP RECEIPT ----
  Item Price: ₦${itemPrice.toFixed(2)}
  Quantity: ${quantity}
  Discount: ${discount}%
  Membership: ${membership || "none"}
  ------------------------------
  Subtotal after discounts: ₦${afterMembership.toFixed(2)}
  Tax (${location}): ₦${tax.toFixed(2)}
  Shipping: ₦${shipping.toFixed(2)}
  ------------------------------
   Final Total: ₦${finalTotal.toFixed(2)}
  `;
}

--
console.log(
  generateReceipt(
    50,     
    2,      
    10,    
    "NG",  
    5,  
    50,    
    "gold"  
  )
);

}