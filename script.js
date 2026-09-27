let productName = "Smart Watch";
let basePrice = 1000;
let discountPercent = 10;
let taxRate = 18;
let stockStatus = "in_stock";

function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}

function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let tax = calculateTax(discountedPrice, taxRate);

    return discountedPrice + tax;
}

function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else {
        return "Out of Stock";
    }
}

let discountedPrice = calculateDiscountedPrice(
    basePrice,
    discountPercent
);

let tax = calculateTax(
    discountedPrice,
    taxRate
);

let finalPrice = calculateFinalPrice(
    basePrice,
    discountPercent,
    taxRate
);

let shipping = isFreeShipping(finalPrice);

let stockMessage = getStockMessage(stockStatus);

console.log("===== PRICE SUMMARY =====");
console.log("Product Name:", productName);
console.log("Base Price: Rs." + basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs." + discountedPrice);
console.log("Tax:", taxRate + "%");
console.log("Tax Amount: Rs." + tax);
console.log("Final Price: Rs." + finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);