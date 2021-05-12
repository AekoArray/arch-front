//import requirement packages
import { ClientFunction } from 'testcafe';
import { Role } from 'testcafe';
import { Selector } from 'testcafe';

// const setCookie = ClientFunction(() => {
//     let date = new Date(Date.now() + 86400e3);
//     date = date.toUTCString();
//     document.cookie = `token=fdsfsdfds; expires=` + date;
// });

//get current url
const getURL = ClientFunction(() => window.location.href);

fixture `TestCafe test for auth`
    .page `http://localhost:63342/arch-front/auth.html`;

// test checking the auth page register button
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`register from auth`, async t => {
        await t
            .click("#registerButton")
            // checking that after clicking we are on the registration page
            .expect(getURL()).eql('http://localhost:63342/arch-front/registration.html');
    });

//test for checking incorrect authorization
// when the user enters a username and password that does not exist
// in the database, he is thrown out on the authorization page again
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`wrong-auth`, async t => {
        await t
            //enters username
            .typeText("#username", "qweegrggrew")
            //enters password
            .typeText("#password", "qwegrewreg")
            //clicks on the authorize button
            .click("input:nth-child(3)")
            //if the data is entered incorrectly, the user should be on the authorization page
            //check which page the user is on and compare with the required
            .expect(getURL()).eql('http://localhost:63342/arch-front/auth.html');
    });

fixture `TestCafe test for register`
    .page `http://localhost:63342/arch-front/registration.html`;

//Testing registration
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`register`, async t => {
        await t
            //enters username
            .typeText("#username", "tttt")
            //enters email
            .typeText("#email", "tttt@mail.ru")
            //enters password
            .typeText("#password", "tttt")
            //clicks on the registration button
            .click("input:nth-child(4)")
            //Checking the redirect of the registration page upon successful registration
            .expect(getURL()).eql('http://localhost:63342/arch-front/auth.html');
    });

fixture `TestCafe test for auth after register`
    .page `http://localhost:63342/arch-front/auth.html`;

// correct auth test
// testing existing user with correct password
// we expect that when user is authorized a page with files is opened
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
const user = Role (`http://localhost:63342/arch-front/auth.html`, async t => {
        await t
            //enters username of an existing user
            .typeText("#username", "tttt")
            //enters password of an existing user
            .typeText("#password", "tttt")
            //clicks on the authorize button
            .click("input:nth-child(3)")
            .wait(3000)
            // check that we were redirected to the correct page
            .expect(getURL()).eql('http://localhost:63342/arch-front/index.html');
    });
// fixture `TestCafe test for main page`
//     .page `http://localhost:63342/arch-front/index.html`;

/**
 * Test to check addition text input in index.html
 * Test goes to index.html and input "string" as input value
 * then checks if its appear in page as a download option
 */
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`add string`, async t => {
        // await setCookie();
        await t
            .navigateTo(`http://localhost:63342/arch-front/index.html`)
            .useRole(user)
            //enters string
            .typeText("#input", "string")
            //clicks on the submit button
            .click("input:nth-child(3)")
            .wait(5000)
            .expect(Selector("#categories").innerText).eql('plain/text');
    });

/**
 * Test to check delete category on download
 * Click ot href with text 'plain/text'
 * check if category don't contains 'plain/text' after click
 */
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`delete string`, async t => {
        // await setCookie();
        await t
            .useRole(user)
            .wait(5000)
            .click(Selector('a').withText('plain/text'))
            .expect(Selector("#categories").innerText).notEql('plain/text');
    });

/*
* Test to check that file uploaded
* Go to the page
* Upload a file
* Press the button
* Get categories
* Check that category added and image was uploaded
*/
test
    .timeouts({
        pageLoadTimeout:    2000,
        pageRequestTimeout: 3000
    })
    (`add file`, async t => {
        // await setCookie();
        await t
            .useRole(user)
            //enters string
            .setFilesToUpload(Selector("input[type=file]"), "C:\\Users\\Гульназ\\Pictures\\Screenshots\\8.1.png")
            .click(Selector("input[type=file]"))
            .click("input:nth-child(3)")
            .wait(10000)
            .expect(Selector("#categories").innerText).eql('image/png');
    });