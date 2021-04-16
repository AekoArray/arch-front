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
    // тест, проверяющий кнопку регистрации страницы auth
    it('register from auth', async function() {
        await driver.get("http://localhost:63342/arch-front/auth.html%22")
        await sleep(1000)
        await driver.findElement(By.xpath("//*[text()[contains(.,'Registration')]]")).click();
        await sleep(3000)
        // assert на то, что после нажатия мы находимся на странице регистрации
        assert.strictEqual(await driver.getCurrentUrl(), 'http://localhost:63342/arch-front/registration.html%27');
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
    // correct auth test
    // testing existing user with correct password
    // we expect that when user is authorized a page with files is opened
    it('auth', async function() {
  	  // go to the authorization page
      await driver.get("http://localhost:63342/arch-front/auth.html")
      // click on the field with username
      await driver.findElement(By.id("username")).click()
      // set there the username of an existing user
      await driver.findElement(By.id("username")).sendKeys("ttt")
      // click on the field with password
      await driver.findElement(By.id("password")).click()
      // set there the correct password of user
      await driver.findElement(By.id("password")).sendKeys("ttt")
      // click on the authorization button
      await driver.findElement(By.css("input:nth-child(3)")).click()
      // wait 3 seconds for the changes to be loaded
      await sleep(3000)
      // check that we were redirected to the correct page
      assert.strictEqual(await driver.getCurrentUrl(), 'http://localhost:63342/arch-front/index.html');
   })
    /**
     * Test to check addition text input in index.html
     * Test goes to index.html and input "string" as input value
     * then checks if its appear in page as a download option
     */
    it('add string', async function() {
        await driver.get("http://localhost:63342/arch-front/index.html")
        await driver.findElement(By.id("input")).click()
        await driver.findElement(By.id("input")).sendKeys("string")
        await driver.findElement(By.css("input:nth-child(3)")).click()
        await sleep(3000)
        var categories = await driver.findElement(By.id("categories")).getText()
        assert.strictEqual(categories, 'plain/text');
    })
    /**
     * Test to check delete category on download
     * Click ot href with text 'plain/text'
     * check if category don't contains 'plain/text' after click
     */
    it('delete string', async function() {
        await driver.get("http://localhost:63342/arch-front/index.html")
        await driver.findElement(By.linkText("plain/text")).click()
        await sleep(3000)
        var categories = await driver.findElement(By.id("categories")).getText()
        assert.notStrictEqual(categories, 'plain/text');
    })
	
	/*
	* Test to check that file uploaded
	*/
	it('add file', async function() {
		await driver.get("http://localhost:63342/arch-front/index.html")
		var fileInput = By.css("input[type=file]");
		var filePath = "C:\\Users\\Гульназ\\Pictures\\Screenshots\\8.1.png";
		await driver.findElement(fileInput).sendKeys(filePath);
		await driver.findElement(By.css("input:nth-child(3)")).click()
		await sleep(6000)
		var categories = await driver.findElement(By.id("categories")).getText()
		assert.strictEqual(categories, 'image/png');
	})
})