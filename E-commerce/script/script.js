window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


import {latestCollectionItems} from '../Js-files/latest-collections-items.js';
import {cart, addToCart} from '../Js-files/cart.js';
import { menuIcon } from './login-page.js';
import { bestSellers } from '../Js-files/best-sellers.js';
// import { moveToDisplayProduct } from './product-details.js';
menuIcon();
createHtml(latestCollectionItems, "latest-collections");
createHtml(bestSellers, "best-sellers");
export function createHtml(collectionItems, name){
    let generatedHtml = '';


    collectionItems.forEach((value) =>{
        generatedHtml += `
            <div class="item" data-js-item="${value.name}">
                <div class="latest-image img">
                    <img src="${value.img}">
                </div>
                <div class="name">
                    ${value.name}
                </div>
                <div class="price">
                    &#8377;${value.price}
                </div>

                <div class="add-to-cart-button-container">
                    <button class="add-to-cart-button" data-product-name="${value.name}">Add to Cart</button>
                    <div class= "added">
                    <p class="added-text"> ✅ Added !! </p>
                    </div>
                </div>
                
            </div>`;
    });

    let gridHtml = document.querySelector(`.${name}-grid-container`);
    gridHtml.innerHTML = generatedHtml;
}

// function displayCartSection(productName){ // remove
//     update();
//     let matchingitem;
//     let generatedHtml = ``;
//     latestCollectionItems.forEach((value) =>{
//         if (value.name == productName) matchingitem = value;
//     }) // remove

//     generatedHtml += `
//         <div class="cart-item">
//             <div class="cart-item-img">
//                 <img src="${matchingitem.img}">
//             </div>
//             <div class="cart-item-details">
//                 <div class="cart-item-name">
//                     ${matchingitem.name}
//                 </div>
//                 <div class="cart-item-price">
//                     &#8377;${matchingitem.price}
//                 </div>
//             </div>
//             <button class="remove-from-cart-button">
//                 Remove
//             </button> 
//         </div>`
    
//     document.querySelector('.cart-content') // remove
//         .innerHTML = generatedHtml; // remove
// }

document.querySelectorAll('.add-to-cart-button')
    .forEach((button) => {
        button.addEventListener('click',() =>{
            event.stopPropagation();
            const productName = button.dataset.productName;
            addToCart(productName);

            // let txt = document.querySelector('.added-text');
            let txt = button.closest('.add-to-cart-button-container').querySelector('.added-text');
            txt.style.opacity = "1";

            setTimeout(() => {
                txt.style.opacity = "0";
            }, 1000);
        })
    });



    
    document.querySelectorAll(`.item`)
    .forEach((div) => {
        div.addEventListener('click', () => {
            let divData = div.dataset.jsItem;

            let parentContainer = div.closest('.latest-collections-grid-container, .best-sellers-grid-container');
            
            if (parentContainer.classList.contains('latest-collections-grid-container')) {
                localStorage.setItem('arrayName', JSON.stringify(latestCollectionItems));
            } else if (parentContainer.classList.contains('best-sellers-grid-container')) {
                localStorage.setItem('arrayName', JSON.stringify(bestSellers));
            }

            localStorage.setItem('selectedProduct', divData);
            window.location.href = 'product-details.html';
        });
    });




