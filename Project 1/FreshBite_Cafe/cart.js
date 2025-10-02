document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const orderForm = document.getElementById("orderForm");
  const orderConfirmation = document.getElementById("orderConfirmation");
  const orderDetails = document.getElementById("orderDetails");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Render Cart
  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      let subtotal = item.price * item.quantity;
      total += subtotal;

      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" 
                 onchange="updateQuantity(${index}, this.value)">
        </td>
        <td>₦${item.price}</td>
        <td>₦${subtotal}</td>
        <td>
          <button onclick="deleteItem(${index})" class="delete-btn">🗑 Delete</button>
        </td>
      `;
      cartContainer.appendChild(row);
    });

    cartTotal.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Update Quantity
  window.updateQuantity = (index, newQty) => {
    cart[index].quantity = parseInt(newQty);
    renderCart();
  };

  // Delete Item
  window.deleteItem = (index) => {
    cart.splice(index, 1);
    renderCart();
  };

  // Place Order
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const tableNumber = document.getElementById("tableNumber").value;

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      customer: customerName,
      table: tableNumber,
      items: cart,
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
      time: new Date().toLocaleString()
    };

    // Save order
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Show confirmation
    orderForm.style.display = "none";
    orderConfirmation.style.display = "block";
    orderDetails.textContent =
      `Order for ${order.customer} (Table ${order.table}) placed successfully! Total: ₦${order.total}`;

    // Clear cart
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
  });

  renderCart();
});
