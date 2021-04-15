//import requirement packages
require('geckodriver')
const { Builder, By} = require('selenium-webdriver')
const assert = require('assert')

//a function to timeout for a few seconds (it is necessary for the pages to have time to load)
async function sleep(msec) { return new Promise(resolve => setTimeout(resolve, msec)); }

describe('test', function() {
    this.timeout(30000)
    let driver
    let vars
    //function to be called before tests
    before(async function() {
        //open a new window in the firefox browser
        driver = await new Builder().forBrowser('firefox').build()
        vars = {}
    })
    //a function that is called after the tests have passed
    after(async function() {
        //close the browser window
        await driver.quit();
    })
    //test for checking incorrect authorization
    // when the user enters a username and password that does not exist
    // in the database, he is thrown out on the authorization page again
    it('wrong-auth', async function() {
        //go to url
        await driver.get("http://localhost:63342/arch-front/auth.html")
        //waiting for the page to load
        await sleep(3000)
        //enters username
        await driver.findElement(By.id("username")).click()
        await driver.findElement(By.id("username")).sendKeys("qweegrggrew")
        //enters password
        await driver.findElement(By.id("password")).click()
        await driver.findElement(By.id("password")).sendKeys("qwegrewreg")
        //clicks on the authorize button
        await driver.findElement(By.css("input:nth-child(3)")).click()
        //waiting for the page to load
        await sleep(3000)
        //if the data is entered incorrectly, the user should be on the authorization page
        //check which page the user is on and compare with the required
        assert.strictEqual(await driver.getCurrentUrl(), 'http://localhost:63342/arch-front/auth.html');
    })
    //Тестирование регистрации
    it('register', async function() {
        //URL
        await driver.get("http://localhost:63342/arch-front/registration.html")
        //Ввод имени пользователя
        await driver.findElement(By.id("username")).click()
        await driver.findElement(By.id("username")).sendKeys("ttt")
        //Ввод email адреса
        await driver.findElement(By.id("email")).click()
        await driver.findElement(By.id("email")).sendKeys("ttt@mail.ru")
        //Ввод пароля
        await driver.findElement(By.id("password")).click()
        await driver.findElement(By.id("password")).sendKeys("ttt")
        await driver.findElement(By.css("input:nth-child(4)")).click()
        await sleep(3000)
        //Проверка редиректа страницы регистрации при успешной регистрации
        assert.strictEqual(await driver.getCurrentUrl(), 'http://localhost:63342/arch-front/auth.html');
    })
})