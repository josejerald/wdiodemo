const loginPage = require('../pageobjects/loginPageObjects')
const productPage = require('../pageobjects/productPageObjects')
const creds =  require('../datafiles/creds.json')
const argHandler = require('../utils/argHandler')
const expectchai = require('chai').expect

describe('Login Tests', () => {

    it('Login with valid credentials - Smoke', async () => {
        await browser.url(creds["qa"]["url"])
        await expect(browser).toHaveTitleContaining("Swag Labs")

        await loginPage.login(creds["qa"]["user_std"],creds["qa"]["password"])
        await productPage.btn_cart.waitForExist()
        await expect(await productPage.btn_cart).toBeDisplayed()
    })

    it('Login with invalid credentials - Smoke', async () => {
        await browser.url(creds["qa"]["url"])
        await expect(browser).toHaveTitleContaining("Swag Labs")

        await loginPage.login(creds["qa"]["user_std"],"9878")
        await loginPage.txt_loginError.waitForExist()
        await expect(await loginPage.txt_loginError).toBeDisplayed()
    })

    it("Login with locked user - Smoke", async () =>{
        await browser.url(creds["qa"]["url"])
        await expect(browser).toHaveTitleContaining("Swag Labs")

        await loginPage.login(creds["qa"]["user_lck"],creds["qa"]["password"])
        await loginPage.txt_loginError.waitForExist()
        await expect(await loginPage.txt_loginError).toBeDisplayed()
        var errMsg = await loginPage.txt_loginError.getText()
        await (errMsg).to.equal(loginPage.lockUserMsg)
        
    })

 

})


