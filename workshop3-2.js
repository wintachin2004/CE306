let productPrice = 600;
let discountPercentage = 15;
let shippingFree = 50;
let specialdiscountPercentage = 10;

let priceAfterDiscount = productPrice - (productPrice * (discountPercentage / 100));
if (priceAfterDiscount <=0){
    console.log("ราคาที่ต้องจ่าย 0 บาท")
}
if (priceAfterDiscount > 0 && priceAfterDiscount <= 500){
    let finalPrice = priceAfterDiscount + shippingFree;
    console.log("ราคาหลังหักส่วนลด:" + priceAfterDiscount.toFixed(2) +"บาท");
    console.log("ค่าจัดส่ง:" + shippingFree + "บาท");
    console.log("ราคาที่ต้องจ่าย:" + finalPrice.toFixed(2) + "บาท");
}
if (priceAfterDiscount > 500) {
    let specialAmount = priceAfterDiscount * (specialdiscountPercentage / 100);
    let finalPrice = priceAfterDiscount - specialAmount;
    console.log("ราคาหลังหักส่วนลด:" + priceAfterDiscount.toFixed(2)+ "บาท");
    console.log("ได้ส่วนลดพิเศษ: " + specialAmount.toFixed(2) + " บาท");
    console.log("ราคาที่ต้องจ่าย: " + finalPrice.toFixed(2) + " บาท");
}