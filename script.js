let cart = [];
cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
    let existingProduct = cart.find(product => product.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
    cart.push({ name: productName, price: Number(productPrice),
        quantity: 1
     });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    localStorage.setItem("cart",JSON.stringify(cart));
    
    let count=document.getElementById('cart-count');
    let items=document.getElementById('cart-items');
    let total=document.getElementById('cart-total');

    count.textContent = cart.reduce((sum, product) => sum + product.quantity, 0);

    items.innerHTML = '';

    let sum = 0;

    cart.forEach(function(product, index) {
        let li=document.createElement('li');

        li.textContent = product.name + '- \u20A6' + product.price.toLocaleString() + " x " + product.quantity + " ";

        let minus = document.createElement("button");
        minus.textContent = "-";

        minus.onclick = function() {product.quantity--;

            if (product.quantity === 0) {

                cart.splice(index, 1);

            }

            updateCartDisplay();
        };

        let plus = document.createElement("button");
        plus.textContent = "+";

        plus.onclick = function() {
            product.quantity++;
            updateCartDisplay();
        };
        
        let remove = document.createElement("button");
        remove.textContent = "Remove";

        remove.onclick = function() 
        {        
              cart.splice(index, 1);
              updateCartDisplay();
        };
        li.appendChild(minus);
        li.appendChild(plus);
        li.appendChild(remove);
        
        items.appendChild(li);

        sum += product.price * product.quantity;});

        total.textContent = sum.toLocaleString();

    removeButton.onclick = function() {
            cart.splice(index, 1);
            updateCartDisplay();
        };

        li.appendChild(removeButton);

        items.appendChild(li);

        sum += product.price;
                 
total.textContent = sum.toLocaleString();
    }

function checkout() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }

            alert("Proceeding to checkout!");

            window.location.href = "checkout.html";
        }
        
        updateCartDisplay();