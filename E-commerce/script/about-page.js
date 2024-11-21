window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});

import { menuIcon } from "./login-page.js";
import {updateCartCount} from '../Js-files/cart.js';

menuIcon();
updateCartCount();