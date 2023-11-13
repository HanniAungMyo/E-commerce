import { categoryRender } from "./app/category";
import { productListHandler, productRender } from "./app/product";
import { cartBtnHandler } from "./core/Handler";
import { categories, products } from "./core/data";
import { cartBtn, cartCloseBtn, productList } from "./core/selector";

class Shop {
    initialRender(){
       categoryRender(categories) 
       productRender(products) 
    }
    listener(){
        cartBtn.addEventListener("click",cartBtnHandler)
        cartCloseBtn.addEventListener("click",cartBtnHandler)
        productList.addEventListener("click",productListHandler)
    }
    init(){
        console.log("Shop App Start")
        this.initialRender()
        this.listener()
    }
}

export default Shop;