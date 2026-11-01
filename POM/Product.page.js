class Product {

    constructor(page){
        this.page = page;
        this.menubar = page.locator("#react-burger-menu-btn")
        this.allItems = page.locator("#inventory_sidebar_link")
        this.dynamicCatalog = page.locator("#dynamic_catalog_sidebar_link")
        this.about = page.locator("#about_sidebar_link")
        this.logout = page.locator("#logout_sidebar_link")
        this.cartIcon = page.locator(".shopping_cart_link")
        this.cartBadge = page.locator(".shopping_cart_badge")
        this.sortDropdown = page.locator(".product_sort_container")
        this.title = page.locator(" .title")
        this.removeButton = page.getByRole('button',{name:"Remove"})
        this.addToCartButton = page. getByRole('button',{name:"Add to cart"})
        this.inventoryItemPrice= page.locator(".inventory_item_price")
        this.inventoryItem = page.locator(".inventory_item")
        this.inventoryItemName = page.locator(".inventory_item_name")
    
    }

    async clickOnaddToCartButton(){

        await this.addToCartButton.first().click()

        // const item = await this. inventoryItem.filter({hasname:"Sauce Lab Backpack"})
        // await item.locator("button:has-Text('Add to Cart')").click()

        // let productarr = await this.inventoryItemName.all()
        // for(product of productarr){
        //     let p = product.textContent()
        //     p.includes("Sauce Lab Bike Light")
        // }

    }

    async removeProduct(){

        const item = await this. inventoryItem.filter({hasname:"Sauce Lab Backpack"})
        await item.locator("button:has-Text('Remove')").click()

    }

    async sortItem(){
        await this.sortDropdown.selectOption("Name(z to A)")
    }

    async openCart(){

        await this.cartIcon.click()
    }

}

export default Product