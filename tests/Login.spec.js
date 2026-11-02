import { test } from "@playwright/test";
import LoginPage from "../POM/LoginPage";
import login from '../Test_Data/Login.json'
import fs from "fs";

let userdata = fs.readFileSync("Test_Data/Login.json", "utf-8");

userdata = JSON.parse(userdata);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("login to sauce demo", async ({ page }) => {
    let login = new LoginPage(page);
    await login.Logintosaucedemo(url, username, password);
    await login.Logintosaucedemo(url, username, password);
});