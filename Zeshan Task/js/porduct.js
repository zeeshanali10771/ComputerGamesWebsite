// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Add event listener for the checkout button
    document.getElementById("checkout").addEventListener("click", function() {
  
      // Get the modal element
      var modal = document.getElementById("checkout-modal");
  
      // Show the modal
      modal.style.display = "block";
  
      // Add event listener for the close button
      modal.querySelector(".close").addEventListener("click", function() {
        // Hide the modal
        modal.style.display = "none";
      });
  
      // Get all the product elements
      var products = document.querySelectorAll(".product");
  
      // Create an array to hold the cart items
      var cart = [];
  
      // Loop through the product elements
      for (var i = 0; i < products.length; i++) {
  
        // Get the quantity input element
        var quantityInput = products[i].querySelector("input[type='number']");
  
        // Get the quantity value
        var quantity = parseInt(quantityInput.value);
  
        // If the quantity is greater than 0, add the item to the cart
        if (quantity > 0) {
  
          // Get the product name
          var name = products[i].querySelector("h2").innerHTML;
  
          // Get the product price
          var price = parseFloat(products[i].querySelector("p:last-of-type").innerHTML.replace("$", ""));
  
          // Calculate the total price
          var total = price * quantity;
  
          // Add the item to the cart
          cart.push({
            name: name,
            quantity: quantity,
            price: price,
            total: total
          });
        }
      }
  
      // Get the cart element
      var cartElement = document.getElementById("cart");
  
      // Clear the cart element
      cartElement.innerHTML = "";
  
      // Loop through the cart items
      for (var i = 0; i < cart.length; i++) {
  
        // Create a new row element
        var row = document.createElement("tr");
  
        // Create a new cell element for the product name
        var nameCell = document.createElement("td");
        nameCell.innerHTML = cart[i].name;
        row.appendChild(nameCell);
  
        // Create a new cell element for the quantity
        var quantityCell = document.createElement("td");
        quantityCell.innerHTML = cart[i].quantity;
        row.appendChild(quantityCell);
  
        // Create a new cell element for the price
        var priceCell = document.createElement("td");
        priceCell.innerHTML = "$" + cart[i].price.toFixed(2);
        row.appendChild(priceCell);
  
        // Create a new cell element for the total
        var totalCell = document.createElement("td");
        totalCell.innerHTML = "$" + cart[i].total.toFixed(2);
        row.appendChild(totalCell);
  
        // Add the row to the cart element
        cartElement.appendChild(row);
      }
  
      // Calculate the total price
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].total;
      }
  
      // Update the total price element
      document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
  
      // Add event listener for the confirm order button
      document.getElementById("confirm-order").addEventListener("click", function() {
        // TODO: Implement order confirmation logic
        alert("Order confirmed!");
      });
  
    });
  

    document.getElementById("confirm-order").addEventListener("click", function() {
        // Hide the confirm order button
        this.style.display = "none";
        
        // Show the shipping details form
        document.getElementById("shipping-details").style.display = "block";
      });
      
      // Initialize the jQuery validation plugin
      $("#shipping-form").validate();
      
      document.getElementById("shipping-form").addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        
        // Check if the form is valid
        if ($("#shipping-form").valid()) {
          // Hide the shipping details form
          document.getElementById("shipping-details").style.display = "none";
          
          // Show the order confirmation message
          document.getElementById("order-confirmation").style.display = "block";
        }
      });
  });
  