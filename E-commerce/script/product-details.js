window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


import { addToCart } from "../Js-files/cart.js";
import { latestCollectionItems } from "../Js-files/latest-collections-items.js";
import { menuIcon } from './login-page.js';
import { bestSellers } from "../Js-files/best-sellers.js";

menuIcon();

export function displayProduct(selectedProduct, arrName){
    
    let matchingitem; // this is the item in cart
    arrName.forEach((value) =>{
        if (value.name === selectedProduct) matchingitem = value;
    })
    // if (!matchingitem) return;

    let generatedHtml = '';

    generatedHtml += `
        <div class="img">
            <img src="${matchingitem.img}">
        </div>
        <div class="product-details">
            <div class="product-name">
                ${matchingitem.name}
            </div>
            <div class="rating">
                <div>${matchingitem.rating.star}</div>
                <div>(${matchingitem.rating.ratingNumber})</div>
            </div>
            <div class="price">
                &#8377;${matchingitem.price}
            </div>
            <div class="product-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deserunt numquam voluptas dolor consequuntur, sunt voluptatibus! Facilis earum aspernatur quasi quis ut doloribus animi minus unde sed voluptatum! Iste, error!
            </div>
            <div class="size">
                Select Size
            </div>
            <div class="select-size">
                <button class="btn" data-size="s">S</button>
                <button class="btn" data-size="m">M</button>
                <button class="btn" data-size="l">L</button>
                <button class="btn" data-size="xl">XL</button>
                <button class="btn" data-size="xxl">XXL</button>
            </div>
            <button class="add-to-cart-button">
                ADD TO CART
            </button>
            <div class="seperation"></div>
            <div class="additional-description">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
    `;

    document.title = matchingitem.name;

    // generatedHtml += `
    //     <img src="${matchingitem.img}">
    //     <div>${matchingitem.name}</div>
    //     <div>${matchingitem.price}</div>
    // `;
    document.querySelector('.container')
        .innerHTML = generatedHtml;

    document.querySelector('.add-to-cart-button')
        .addEventListener('click', () =>{
            addToCart(selectedProduct);
        })

    selectSize();

    
}

window.onload = () =>{
    let selectedProduct = localStorage.getItem('selectedProduct');
    let selectedArray = JSON.parse(localStorage.getItem('arrayName'));

    console.log(selectedProduct);

    displayProduct(selectedProduct, selectedArray);
}

// selectSize();
function selectSize(){
    let buttons = document.querySelectorAll('.btn');

    let savedSize = localStorage.getItem('selectedSize');

    buttons.forEach((value) =>{
        if (value.dataset.size === savedSize){
            value.classList.add('clicked-button');
        }
    })

    buttons.forEach((btn) =>{
        btn.addEventListener('click', () =>{
            buttons.forEach((button) =>{
                button.classList.remove('clicked-button');
            })
            btn.classList.add('clicked-button');

            let selectedSize = btn.dataset.size;
            localStorage.setItem('selectedSize', selectedSize);
        })
    })
}
