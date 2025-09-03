const product = [
    { price: 450, discount: 20 },
    { price: 250, discount: 20 },
    { price: 309, discount: 19 },
    { price: 50, discount: 0 },
    { price: 400, discount: 15 },
];

function calculateTotal() {
    let total = 0;

    product.forEach(product => {
        const discountedPrice = product.price - (product.price * (product.discount / 100));
        total += discountedPrice;
    });
    console.log(`Total price after discount: $${total.toFixed(2)}`);
}
calculateTotal();