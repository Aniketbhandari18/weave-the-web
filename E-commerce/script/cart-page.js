window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


import {cart, removeFromCart, saveCartInLocalStorage} from '../Js-files/cart.js';
import { latestCollectionItems } from '../Js-files/latest-collections-items.js';
import { bestSellers } from '../Js-files/best-sellers.js';
import { all } from '../Js-files/all.js';
import { menuIcon } from './login-page.js';
import {updateCartCount} from '../Js-files/cart.js';

menuIcon();
let arrayName = latestCollectionItems.concat(all);
arrayName = arrayName.concat(bestSellers);
displayCart(arrayName);
export function displayCart(arrayName){
    update(arrayName);

    let generatedHtml = ``;

    cart.forEach((value) =>{
        let name = value.name;
        let matchingitem;

        arrayName.forEach((value) =>{
            if (value.name == name) matchingitem = value;
        })
        if (!matchingitem) return; // i have to modify this to display that cart is empty

        generatedHtml += `
            <div class="cart-item cart-item-${matchingitem.name}">
                <div class="cart-item-img">
                    <img class="item-img" data-item-img="${matchingitem.name}" src="${matchingitem.img}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">
                        ${matchingitem.name}
                    </div>
                    <div class="cart-item-price">
                        &#8377;${matchingitem.price}
                    </div>
                    <div class="cart-item-quantity">Quantity: <span>${value.quantity}</span></div>
                </div>
                <button class="remove-from-cart-button" data-remove-button="${matchingitem.name}">
                    REMOVE
                </button> 
            </div>
        `;
        
    })
    document.querySelector('.cart-content') // remove
        .innerHTML = generatedHtml;

        document.querySelectorAll('.remove-from-cart-button')
        .forEach((button) =>{
            button.addEventListener('click', () =>{
                let productToRemove = button.dataset.removeButton;
                removeFromCart(productToRemove);
                console.log(cart);
                displayCart(arrayName);
                update(arrayName);
            })
        })

    imgListener();

    if (cart.length === 0){

        let element = document.querySelector('.payment-left-side');

        let firstElement = document.querySelector('.payment-left-side img');

        let secElement = document.querySelector('.payment-left-side>:nth-child(2)');

        let thirdElement = document.querySelector('.payment-left-side>:nth-child(3)')

        // element.style.display = flex;
        element.style.opacity = 1;
        firstElement.style.opacity = 1;
        secElement.style.opacity = 1;
        thirdElement.style.opacity = 1;

        let paymentLeftSide = document.querySelector('.payment-left-side');
        let paymentDetails = document.querySelector('.cart-payment-container');

        paymentLeftSide.classList.add('payment-left-side-extended');
        paymentDetails.classList.add('cart-payment-container-extended');
        // if (window.innerWidth <= 1120){
        //     paymentLeftSide.classList.add('payment-left-side-extended');
        //     paymentDetails.classList.add('cart-payment-container-extended');
        // }
        
        window.addEventListener('resize', () =>{
            if (window.innerWidth <= 1120){
                paymentLeftSide.classList.add('payment-left-side-extended');
                paymentDetails.classList.add('cart-payment-container-extended');
            }
        })        
        return;
    }
}

function update(arrayName){
    let total = 0;
    cart.forEach((cartItem) =>{
        let name = cartItem.name;
        arrayName.forEach((value) =>{
            if (name === value.name){
                total += (cartItem.quantity * value.price);
            }
        })
    })

    document.querySelector('.total-price')
        .innerHTML = `&#8377;${total}`;
    if (total === 0){
        document.querySelector('.fees')
            .innerHTML = `&#8377;${0}`;
        document.querySelector('.price')
        .innerHTML = `&#8377;${0}`;
    }
    else{
        document.querySelector('.fees')
            .innerHTML = `&#8377;${50}`;
        document.querySelector('.price')
            .innerHTML = `&#8377;${total + 50}`;
    }
    
}

document.querySelector('.clear-button')
    .addEventListener('click', () =>{
        cart.length = 0;
        updateCartCount();
        saveCartInLocalStorage();
        displayCart();
    })

function imgListener(){
    document.querySelectorAll('.item-img')
    .forEach((value) =>{
        value.addEventListener('click', () =>{
            let imageData = value.dataset.itemImg;
            console.log(imageData);

            localStorage.setItem('selectedProduct', imageData);

            window.location.href = 'product-details.html';
        })
    })
}


    

