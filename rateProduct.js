//Create a function called ***rateProduct*** which rates the product
function rateProduct(product, rate) {
    return product.rate.push(rate);
};

function averageRating(product) {
    let rating = product.rate;
    let sum = 0;
    for (let i = 0; i < rating.length; i++) {
        sum += rating[i];
    }
    return sum / rating.length;
}