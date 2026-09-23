const products = [
{
name: "Wireless Headphones",
price: 1999,
quantity: 1
},
{
name: "Wireless Mouse",
price: 799,
quantity: 1
}
];

function updateCart() {


let subtotal = 0;

products.forEach((product, index) => {

    if (product.quantity <= 0) {
        return;
    }

    const quantityElement =
        document.getElementById(`quantity-${index}`);

    const totalElement =
        document.getElementById(`total-${index}`);

    if (quantityElement) {
        quantityElement.textContent =
            product.quantity;
    }

    if (totalElement) {
        totalElement.textContent =
            product.price * product.quantity;
    }

    subtotal +=
        product.price * product.quantity;
});


const shipping = subtotal > 0 ? 50 : 0;

const grandTotal =
    subtotal + shipping;


document.getElementById("subtotal")
    .textContent = subtotal;

document.getElementById("shipping")
    .textContent = shipping;

document.getElementById("grand-total")
    .textContent = grandTotal;


}

function increaseQuantity(index) {


products[index].quantity++;

updateCart();


}

function decreaseQuantity(index) {


if (products[index].quantity > 1) {

    products[index].quantity--;

    updateCart();
}


}

function removeItem(index) {


const item =
    document.querySelectorAll(".cart-item")[index];

if (item) {
    item.remove();
}

products[index].quantity = 0;

updateCart();


}

function checkout() {


window.location.href = "./order.html";


}

updateCart();

