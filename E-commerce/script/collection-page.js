window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


import { mens, mensTop, mensBottom } from "../Js-files/men.js";
import { womens, womensTop, womensBottom } from "../Js-files/women.js";
import { all, allTop, allBottom } from "../Js-files/all.js";
import { children, childrenTop, childrenBottom } from "../Js-files/children.js";
import { addToCart } from "../Js-files/cart.js";
import {menuIcon as navBarMenu} from "../script/login-page.js";

navBarMenu();
// import { displayCart } from "./cart-page.js";

// updateCode();
// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Initial load of items
    generateHtmlForCollectionPage(all);
    let category = localStorage.getItem('category');
    let type = localStorage.getItem('type');
    if (category === 'women');
    if (category) document.querySelector(`input[name="cate"][value="${category}"]`).checked = true;
    if (type) document.querySelector(`input[name="typ"][value="${type}"]`).checked = true;
    updateCode();

    // Event listeners for radio buttons
    let radios = document.querySelectorAll('input[name="cate"]');
    radios.forEach((radio) => {
        radio.addEventListener('change', () => {
            updateCode();
        });
    });

    let typeRadios = document.querySelectorAll('input[name="typ"]');
    typeRadios.forEach((typeRadio) =>{
        typeRadio.addEventListener('change', () =>{
            updateCode();
        })
    })

    // Event listener for clear selection button
    document.querySelector('.clear-selection-one').addEventListener('click', () => {
        clearSelection('cate');
        updateCode();
        // generateHtmlForCollectionPage(all); // Refresh items to show all
    });
    document.querySelector('.clear-selection-two').addEventListener('click', () => {
        clearSelection('typ');
        updateCode();
        // generateHtmlForCollectionPage(all); // Refresh items to show all
    });
});

function updateCode(){
    let category = document.querySelector('input[name="cate"]:checked');
    let type = document.querySelector('input[name="typ"]:checked');
    // console.log(category.value);
    // console.log(type);

    if (category) localStorage.setItem('category', category.value);
    if (type) localStorage.setItem('type', type.value);

    if (category){
        if (type){
            callGenerateHtmlForBoth(category, type);
        }
        else{
            callGenerateHtmlForOne(category);
        }
    }
    else if (type){
        callGenerateHtmlForBoth(all, type);
    }
    else generateHtmlForCollectionPage(all);
}

// Function to generate HTML for the collection page
function generateHtmlForCollectionPage(arrName) {
    let generatedHtml = '';

    arrName.forEach((value) => {
        generatedHtml += `
            <div class="item" data-js-item="${value.name}">
                <div class="latest-image img" style="padding: 0; overflow: hidden; border-radius: 8px;">
                    <img src="${value.img}" alt="${value.name}">
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
            </div>
        `;
    });

    let gridHtml = document.querySelector('.items-grid-container');
    gridHtml.innerHTML = generatedHtml; // Update the inner HTML of the grid

    document.querySelectorAll(`.item`)
    .forEach((div) =>{
        div.addEventListener('click', () =>{
            let divData = div.dataset.jsItem;
            // console.log(divData);
            localStorage.setItem('selectedProduct', divData);
            localStorage.setItem('arrayName', JSON.stringify(all));
            // displayProduct(divData);
            window.location.href = 'product-details.html';
            // divData here is name of product in cart
        })
    })

    document.querySelectorAll('.add-to-cart-button')
    .forEach((button) => {
        button.addEventListener('click',() =>{
            event.stopPropagation();
            const productName = button.dataset.productName;
            addToCart(productName);

            // let txt = document.querySelector('.added-text');
            let txt = button.closest('.add-to-cart-button-container').querySelector('.added');
            txt.style.display = "flex";

             setTimeout(() => {
                txt.style.display = "none";
            }, 1000);
        })
        
    });
}

// Function to clear selected radio buttons
function clearSelection(name) {
    let radio = document.querySelectorAll(`input[name="${name}"]`);
    radio.forEach((value) => {
        value.checked = false; // Uncheck all radio buttons
    });
    localStorage.removeItem('category');
    localStorage.removeItem('type');
}

function callGenerateHtmlForOne(radio){ 
    if (radio.value === 'mens') {
        generateHtmlForCollectionPage(mens);
    }
    else if (radio.value === 'womens') {
        generateHtmlForCollectionPage(womens);
    }
    else if (radio.value === 'children') {
        generateHtmlForCollectionPage(children);
    }
    // else if (radio.value === 'top'){
    //     generateHtmlForCollectionPage(top);
    // }
    // else if (radio.value === 'bottom'){
    //     generateHtmlForCollectionPage(bottom);
    // }
    else { // this might have to be removed
        generateHtmlForCollectionPage(all);
    }
}
function callGenerateHtmlForBoth(radio, typeRadio){
    if (radio.value === 'mens'){
        if (typeRadio.value === 'top'){
            generateHtmlForCollectionPage(mensTop);
        }
        if (typeRadio.value === 'bottom'){
            generateHtmlForCollectionPage(mensBottom);
        }    
    }
    else if (radio.value === 'womens'){
        if (typeRadio.value === 'top'){
            generateHtmlForCollectionPage(womensTop);
        }
        else if (typeRadio.value === 'bottom'){
            generateHtmlForCollectionPage(womensBottom);
        }
    }
    else if (radio.value === 'children'){
        if (typeRadio.value === 'top'){
            generateHtmlForCollectionPage(childrenTop);
        }
        else if (typeRadio.value === 'bottom'){
            generateHtmlForCollectionPage(childrenBottom);
        }
        else{
            generateHtmlForCollectionPage(children);
        }
    }
    else{
        if (typeRadio.value === 'top'){
            generateHtmlForCollectionPage(allTop);
        }
        else if (typeRadio.value === 'bottom'){
            generateHtmlForCollectionPage(allBottom);
        }
        else generateHtmlForCollectionPage(all);
    }
}
let filter = document.querySelector('.filters');
let menuIcon = document.querySelector('.sidebar-menu');

menuIcon.addEventListener(('click'), () =>{
    if (filter.style.left === '0px'){
        filter.style.left = '-281px';
        menuIcon.style.left = '15px';
        menuIcon.innerHTML = `<i class="fa fa-bars sidebar-menu-icon" aria-hidden="true"></i>`;
        
    }
    else{
        filter.style.left = '0px';
        menuIcon.style.left = '231px';
        menuIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
    }
})


window.addEventListener('resize', () =>{
    if (window.innerWidth > 992){
        filter.style.left = '0px';
    }
    else{
        filter.style.left = '-281px';
        menuIcon.innerHTML = `<i class="fa fa-bars sidebar-menu-icon" aria-hidden="true"></i>`;
        menuIcon.style.left = '15px';
    }
})
    

