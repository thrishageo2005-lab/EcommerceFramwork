import { test } from "@playwright/test";
import Login from "../POM/Login.page";
import fs from "fs";

let userdata = fs.readFileSync("C:/Users/thris/OneDrive/Desktop/saucedemo/EcommerceFramwork/Test_Data/Login.json"
);

userdata = JSON.parse(userdata);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("login to sauce demo", async ({ page }) => {

    let login = new Login(page);

    await login.loginToSauceDemo(url, username, password);
    await login.loginToSauceDemo(url, username, password);

});