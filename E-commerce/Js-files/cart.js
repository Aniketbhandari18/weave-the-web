window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) cart = [];

updateCartCount();

export function updateCartCount() {
    document.querySelector('.cart-items-count')
        .innerHTML = cart.length;
}

export function saveCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(name) {
    // Directly handle the case where cart is undefined or null
    if (!cart || !Array.isArray(cart)) {
        cart = [];
    }

    let element;

    // Check if there are elements in the cart before looping
    if (cart.length > 0) {
        cart.forEach((value) => {
            if (value && name === value.name) {
                element = value; // Check if value is not null
            }
        });
    }

    if (element) {
        element.quantity += 1;
    } else {
        cart.push({
            name: name,
            quantity: 1
        });
    }
    
    console.log(cart);
    updateCartCount();
    saveCartInLocalStorage();
}

export function removeFromCart(name) {
    // Directly handle the case where cart is undefined or null
    if (!cart || !Array.isArray(cart)) {
        cart = [];
    }

    let newCart = [];

    // Check if there are elements in the cart before looping
    if (cart.length > 0) {
        cart.forEach((value) => {
            if (value && value.name !== name) { // Check if value is not null
                newCart.push(value);
            }
        });
    }

    cart = newCart;

    updateCartCount();
    saveCartInLocalStorage();
}
