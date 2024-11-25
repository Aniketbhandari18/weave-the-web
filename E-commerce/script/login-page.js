window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});



// import { menuIcon } from "./script.js";
import {updateCartCount} from '../Js-files/cart.js';
updateCartCount();

export function menuIcon() {
    let menu = document.querySelector('.menu-icon');
    let navBar = document.querySelector('.navebar');
    let centerSide = document.querySelector('.center-side');
    let rightSide = document.querySelector('.right-side');

    let isClicked = false;

    menu.addEventListener('click', () => {
        if (!isClicked) {
            centerSide.classList.add('center-side-expanded');
            navBar.classList.add('expand');
            rightSide.classList.add('right-side-extended');
            rightSide.style.display = 'flex';
        } else {
            centerSide.classList.remove('center-side-expanded');
            navBar.classList.remove('expand');
            rightSide.classList.remove('right-side-extended');
            if (window.innerWidth < 425){
                rightSide.style.display = 'none';
            }
        }
        isClicked = !isClicked;

    });

    window.addEventListener('resize', () =>{
        if (window.innerWidth > 804){
            centerSide.classList.remove('center-side-expanded');
            navBar.classList.remove('expand');
            rightSide.classList.remove('right-side-extended');
        }
        if (window.innerWidth < 425){
            if (!isClicked){
                rightSide.style.display = 'none';
            }
        }
        else rightSide.style.display = 'flex';
    })
}

menuIcon();

let loginStatus = true;
let login = document.querySelector('.login-container>:first-child');
let forgotPassword = document.querySelector('.forgot-pasword');
let createAccount = document.querySelector('.create-account');
let passwordInput = document.querySelector('.password-input-container input');
let confirmPassword = document.querySelector('.password-confirm-container');
let signInButton = document.querySelector('.sign-in-button');

if (login){
    createAccount.addEventListener('click', ()=>{
        if (loginStatus){
            login.innerHTML = 'Sign Up &mdash;&ndash;';
            forgotPassword.innerHTML = 'Already have an account?';
            passwordInput.placeholder = 'Create Password';
            confirmPassword.style.display = 'flex';
            createAccount.innerHTML = 'Login';
            signInButton.innerHTML = 'Sign Up';
            loginStatus = false;
        }
        else{
            login.innerHTML = 'Login &mdash;&ndash;';
            passwordInput.placeholder = 'Password';
            confirmPassword.style.display = 'none';
            forgotPassword.innerHTML = 'Forgot your password?';
            createAccount.innerHTML = 'Create Account';
            signInButton.innerHTML = 'Sign In';
            loginStatus = true;
        }
    })
    
}