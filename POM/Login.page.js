class Login{

    constructor(page){

        this.page = page;
        this.usernameField = page.getByPlaceholder("Username");
        this.passwordField = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button',{name:"Login"});
        this.errorMessage = page.locator(".error-message-container error");


    }



    async loginToSauceDemo(url,username,password){
        await page.goto(url)
        await this.usernameField.fill(username)
        await this.passwordField.fil(password)
        await this.loginButton.click()
    }

    async loginButton() {
        await this.loginButton.click()
    }

        async errorMessageOnLogin(){
        return await this.errorMessage.textContext();

    }
}

export default Login;