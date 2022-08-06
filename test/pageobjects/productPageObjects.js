class ProductPage{

    get btn_cart(){
        return $('.shopping_cart_link')
    }
}

module.exports = new ProductPage();