import{test} from "@playwright/test"
import Product from "../POM/Product.page"
import Login from "../POM/Login.page"
test("add product to cart",async({page})=>{
    let login = new Login(page)
    let product = new Product(page)

    await login.loginToSauceDemo()
    await product.clickOnaddToCartButton()
    await product.openCart()



})