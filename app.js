// variables product-filters
const showAll = document.querySelector(".show-all");
const showHoodies = document.querySelector(".show-hoodies");
const showShirts = document.querySelector(".show-shirts");
const showSweatshirts = document.querySelector(".show-sweatshirts");
const hoodiesContent = document.querySelector(".article-hoodies");
const shirtsContent = document.querySelector(".article-shirts");
const sweatshirtsContent = document.querySelector(".article-sweatshirts");

// variables cart
const addHoodies = document.querySelector(".add-hoodies");
const addShirts = document.querySelector(".add-shirts");
const addSweatshirts = document.querySelector(".add-sweatshirts");
const cartContent = document.querySelector(".cart-content");
const cartContent1 = document.querySelector(".cart-content1");
const cartContent2 = document.querySelector(".cart-content2");
const cartContent3 = document.querySelector(".cart-content3");
const cartItems = document.querySelector(".cart-items");
const cartPrice = document.querySelector(".cart-price");

let cartHoodiesArray = JSON.parse(localStorage.getItem('hoodies')) || [{ cant: 0 }];
let cartShirtsArray = JSON.parse(localStorage.getItem('shirts')) || [{ cant: 0 }];
let cartSweatshirtsArray = JSON.parse(localStorage.getItem('sweatshirts')) || [{ cant: 0 }];

createHoodieItem()
createShirtItem()
createSweatshirtItem()
const cartTotal = 0;

// funciones product-filters
showAll.addEventListener("click", () => {
    hoodiesContent.classList.remove("hide");
    shirtsContent.classList.remove("hide");
    sweatshirtsContent.classList.remove("hide");
});

showHoodies.addEventListener("click", () => {
    sweatshirtsContent.classList.add("hide");
    shirtsContent.classList.add("hide");
    if (hoodiesContent.classList.contains("hide")) {
        hoodiesContent.classList.remove("hide");
    };
});

showShirts.addEventListener("click", () => {
    sweatshirtsContent.classList.add("hide");
    hoodiesContent.classList.add("hide");
    if (shirtsContent.classList.contains("hide")) {
        shirtsContent.classList.remove("hide");
    };
});

showSweatshirts.addEventListener("click", () => {
    hoodiesContent.classList.add("hide");
    shirtsContent.classList.add("hide");
    if (sweatshirtsContent.classList.contains("hide")) {
        sweatshirtsContent.classList.remove("hide");
    };
});

// funciones cart

function createHoodieItem() {
    const hoodies = cartHoodiesArray.map((article) => {
        return `
            <div class="cart-img">
                <img src=".${article.img}" alt="">
            </div>
            <div class="cart-info">
                <h3>${article.name}</h3>
                <div class="cart-stock-price">
                    <p class="cart-stock">stock: 15</p>
                    <div class="cart-separator"></div>
                    <p class="cart-price">$${article.price}.00</p>
                </div>
                <p class="cart-subtotal-hoodies">Subtotal $${article.price}</p>
                <p class="subtotal-items">${article.cant} Items</p>
            </div>`
    });
    cartContent1.innerHTML = hoodies.join("");
    cartContent1.classList.add('full')
}

function createShirtItem() {
    const shirt = cartShirtsArray.map((article) => {
        return `
            <div class="cart-img">
                <img src=".${article.img}" alt="">
            </div>
            <div class="cart-info">
                <h3>${article.name}</h3>
                <div class="cart-stock-price">
                    <p class="cart-stock">stock: 15</p>
                    <div class="cart-separator"></div>
                    <p class="cart-price">$${article.price}.00</p>
                </div>
                <p class="cart-subtotal-shirts">Subtotal $${article.price}</p>
                <p class="subtotal-items">${article.cant} Items</p>
            </div>`
    });
    cartContent2.innerHTML = shirt.join("");
    cartContent2.classList.add('full')
}

function createSweatshirtItem() {
    const sweatshirt = cartSweatshirtsArray.map((article) => {
        return `
            <div class="cart-img">
                <img src=".${article.img}" alt="">
            </div>
            <div class="cart-info">
                <h3>${article.name}</h3>
                <div class="cart-stock-price">
                    <p class="cart-stock">stock: 15</p>
                    <div class="cart-separator"></div>
                    <p class="cart-price">$${article.price}.00</p>
                </div>
                <p class="cart-subtotal-sweatshirts">Subtotal $${article.price}</p>
                <p class="subtotal-items">${article.cant} Items</p>
            </div>`
    });
    cartContent3.innerHTML = sweatshirt.join("");
    cartContent3.classList.add('full')
}

let hoodiesStock = 15;
let hoodiesCant = 0;
let hoodiesSubtotal = 0;
addHoodies.addEventListener("click", () => {
    if (cartHoodiesArray !== [{ cant: 0 }]) {
        for (let i = 0; i < cartHoodiesArray.length; i++) {
            hoodiesCant++
        };
    };
    if (cartHoodiesArray[0].cant >= hoodiesStock) {
        alert('stock unavailable');
    } else {
        cartHoodiesArray.push({ name: "Hoodies", img: "./assets/hoodie.png", price: 14.00, cant: hoodiesCant, stock: hoodiesStock });
        cartHoodiesArray.reverse().splice(1, cartHoodiesArray.length);
        localStorage.setItem("hoodies", JSON.stringify(cartHoodiesArray));
        createHoodieItem();
        cartTotalItems()
        cartItems.innerHTML = `${totalItems} items`;
        const cartSubtotalHoodies = document.querySelector(".cart-subtotal-hoodies");
        hoodiesSubtotal = cartHoodiesArray[0].price * cartHoodiesArray[0].cant
        cartSubtotalHoodies.innerHTML = `Subtotal: $${hoodiesSubtotal}.00`;
        cartPrice.innerHTML = `$${hoodiesSubtotal + shirtsSubtotal + sweatshirtsSubtotal}.00`;
    }

});


let shirtsStock = 15;
let shirtsCant = 0;
let shirtsSubtotal = 0;
addShirts.addEventListener("click", () => {
    if (cartShirtsArray !== [{ cant: 0 }]) {
        for (let i = 0; i < cartShirtsArray.length; i++) {
            shirtsCant++
        };
    };
    if (cartShirtsArray[0].cant >= shirtsStock) {
        alert('stock unavailable');
    } else {
        cartShirtsArray.push({ name: "Shirts", img: "./assets/shirt.png", price: 24.00, cant: shirtsCant, stock: shirtsStock });
        cartShirtsArray.reverse().splice(1, cartShirtsArray.length);
        localStorage.setItem("shirts", JSON.stringify(cartShirtsArray));
        createShirtItem();
        cartTotalItems()
        cartItems.innerHTML = `${totalItems} items`;
        const cartSubtotalShirts = document.querySelector(".cart-subtotal-shirts");
        shirtsSubtotal = cartShirtsArray[0].price * cartShirtsArray[0].cant
        cartSubtotalShirts.innerHTML = `Subtotal: $${shirtsSubtotal}.00`;
        cartPrice.innerHTML = `$${hoodiesSubtotal + shirtsSubtotal + sweatshirtsSubtotal}.00`;
    }
});

let sweatshirtsStock = 15;
let sweatshirtCant = 0;
let sweatshirtsSubtotal = 0;
addSweatshirts.addEventListener("click", () => {
    if (cartSweatshirtsArray !== [{ cant: 0 }]) {
        for (let i = 0; i < cartSweatshirtsArray.length; i++) {
            sweatshirtCant++
        };
    };
    if (cartSweatshirtsArray[0].cant >= sweatshirtsStock) {
        alert('stock unavailable');
    } else {
        cartSweatshirtsArray.push({ name: "Sweatshirt", img: "./assets/Sweatshirts.png", price: 24.00, cant: sweatshirtCant, stock: sweatshirtsStock });
        cartSweatshirtsArray.reverse().splice(1, cartSweatshirtsArray.length);
        localStorage.setItem("sweatshirts", JSON.stringify(cartSweatshirtsArray));
        createSweatshirtItem();
        cartTotalItems();
        cartItems.innerHTML = `${totalItems} items`;
        const cartSubtotalSweatshirts = document.querySelector(".cart-subtotal-sweatshirts");
        sweatshirtsSubtotal = cartSweatshirtsArray[0].price * cartSweatshirtsArray[0].cant;
        cartSubtotalSweatshirts.innerHTML = `Subtotal: $${sweatshirtsSubtotal}.00`;
        cartPrice.innerHTML = `$${hoodiesSubtotal + shirtsSubtotal + sweatshirtsSubtotal}.00`;
    }
});

let totalHoodies = 0;
let totalShirts = 0;
let totalSweatshirts = 0;
let totalItems = 0;

function cartTotalItems() {
    if (cartHoodiesArray !== [{ cant: 0 }]) {
        totalHoodies = cartHoodiesArray[0].cant;
    }
    if (cartShirtsArray !== [{ cant: 0 }]) {
        totalShirts = cartShirtsArray[0].cant;
    }
    if (cartSweatshirtsArray !== [{ cant: 0 }]) {
        totalSweatshirts = cartSweatshirtsArray[0].cant;
    }
    totalItems = totalHoodies + totalShirts + totalSweatshirts;
    return totalItems;
};