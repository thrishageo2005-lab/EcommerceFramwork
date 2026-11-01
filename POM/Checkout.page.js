class Checkout{
    constructor(page){
        this.page = page;
        this.first_Name = page.getByPlaceholder("First Name");
        this.last_Name = page.getByPlaceholder("Last Name");
        this.zipcode = page.getByPlaceholder("Zip/Postal Code");
        this.cancel = page.getByRole('button',{name:"Cancel"});
        this.continue = page.getByRole('button',{name:"Continue"});
        this.errorMessage =page.locator(".error-message-container error");

    }

    async fillYourInfo(){
        await this.first_Name.fill("Thrisha")
        await this.last_Name.fill("Geo")
        await this.zipcode.fill(643219)
    }

    async clickOnCancelButton(){
        await this.cancel.click()

    }

    async clickOnContinueButton(){
        await this.continue.click()
    }

    async fillAndContinue(){
        await this.fillYourInfo()
        await this.clickOnContinueButton()
    }

    async errorMessageOnCheckout(){
        return await this.errorMessage.textContext();

    }
}

export default Checkout;