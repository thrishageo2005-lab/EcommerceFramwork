import { test } from "@playwright/test";
import ProductsPage from "../POM/ProductsPage";
import LoginPage from "../POM/LoginPage";
import fs from "fs";

let userdata = JSON.parse(
    fs.readFileSync("Test_Data/Login.json", "utf-8")
);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("add product to cart", async ({ page }) => {

    let login = new LoginPage(page);
    let product = new ProductsPage(page);

    await login.Logintosaucedemo(url, username, password);

    await product.clickonaddtocart();
    await product.Opencart();

});