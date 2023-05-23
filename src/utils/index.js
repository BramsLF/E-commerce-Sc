/**
 * this function calculates total price of any order
 * @param {Array} products cardProduct: Array of Object 
 * @returns {number} totalPrice
 */

const totalPrice= (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)

    return sum;
}

export default totalPrice;