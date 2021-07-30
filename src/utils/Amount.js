export const handleSumTotal = (cart) => {
    const reducer = (cont, currentValue) => {
        return cont + currentValue.price;
    }
    const sum = cart.reduce(reducer, 0);
    return sum;
}

export default handleSumTotal;