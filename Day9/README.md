## 🎯 Practice Exercise 1
**Task:** Tell a delayed joke with Promises. 
 
- Write a function `tellJoke()` that returns a Promise.  
- After 3 seconds, resolve with `"😂 Here’s a funny joke!"`.  
- Test it using `.then()`.  

## 🎯 Practice Exercise 2
**Task:** Random delivery success or failure.  
- Write a function `deliverOrder(order)` that waits 2 seconds.  
- 50% of the time, resolve with `"✅ Delivered: <order>"`.  
- 50% of the time, reject with `"❌ Delivery failed: <order>"`.  
- Use `.then()` and `.catch()` to handle both cases.

## 🎯 Practice Exercise 3 
**Task:** Process an order queue.  
- Create an array of orders: `["Coffee", "Cake", "Juice"]`.  
- Write an `async` function that loops through the array.  
- Prepares each order with a 2-second delay.  
- Logs `"✅ <order> ready"` in sequence. 