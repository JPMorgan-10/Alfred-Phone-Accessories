let cart =
JSON.parse(localStorage.getItem("cart"))  ||  [];

let checkoutItems = document.getElementById("checkout-items");
let checkoutTotal = document.getElementById("checkout-total");

let total = 0;

cart.forEach(function(product) {
    let li = document.createElement("li");

    li.textContent = product.name + "x" + product.quantity + "-\u20A6" +

    (product.price * product.quantity).toLocaleString ();

    checkoutItems.appendChild(li);

    total += product.price * product.quantity;
});

checkoutTotal.textContent = total.toLocaleString();