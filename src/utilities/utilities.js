const addToCard = id => {
    let shopingCart = getToStorage('shoping-card');
    const value = shopingCart[id];
    if (value) {
        const newValue = value + 1;
        shopingCart[id] = newValue;
    } else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-card', JSON.stringify(shopingCart));
}
const getToStorage = key => {
    let shopingCart = JSON.parse(localStorage.getItem(key));
    if (shopingCart === null) shopingCart = {};
    return shopingCart;
}
export { addToCard , getToStorage };

