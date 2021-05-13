const json = {
    token: ''
}
let connection = new Connection('test')
const urlAuth = connection.getAuthServiceConnection()
const urlCore = connection.getStorageServiceConnection()


/**
 * Factory for api
 * @param url
 * @param method (GET or POST)
 * @param endpoint
 * @param message (message for errors)
 * @param headers
 */
//super class, on the basis of which the same
//objects with different values are created
function makeRequest(url, method, endpoint, message, headers) {
    return async function (data = null) {
        try {
            console.log(JSON.stringify(data))
            //add headers
            const header = headers !== undefined ? headers : {};
            //add header with token
            header['Authorization'] = getCookie('token');
            //assign method, data to the request
            const response = await fetch(url + endpoint, {
                method: method,
                body: data === null ? undefined : data,
                headers: header
            });
            //get response from the server
            return await response.json()
        } catch (e) {
            console.error(e.message)
            document.getElementById("status").innerText = "Error in " + message
        }
    }
}

//factory class for requests
const API = {
    //a request is created depending on the method, endpoint, headers
    sendData: makeRequest(urlCore, 'POST', "/data/", "sending data"),
    getData: makeRequest(urlCore, 'GET', "/category/", "getting categories"),
    auth: makeRequest(urlAuth, 'POST', "/sign_in/", "authorization", {'Content-Type': 'application/json'}),
    register: makeRequest(urlAuth,'POST', "/sign_up/", "registration", {'Content-Type': 'application/json'})
}

/**
 * method for downloading files
 * @param url (endpoint with category id)
 */
async function downloadCategory(url) {
    //add headers with token
    const options = {
        headers: {
            Authorization: getCookie('token')
        }
    };
    try {
        //get a response from the server
        let response = await fetch(url, options);
        //get filename from header 'content-disposition'
        let filename = response.headers.get('content-disposition').split('filename=')[1].split(';')[0];
        //get file from response and download it
        let blob = await response.blob()
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename
        link.click();
        link.remove();
    } catch (e) {
        console.error(e.message)
    }
}

/**
 * Method for set cookie
 * @param json (json with token)
 */
function setCookie(json) {
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = `token=${json.token}; expires=` + date;
}

/**
 * Method for getting cookie
 * @param name (the parameter we want to get from the cookie)
 * @returns {string} (the parameter we want to get from the cookie)
 */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    } else {
        return 'undefined';
    }
}

/**
 * Method to check token in cookie
 * and if there is no token, then the user is redirected to the
 * authorization page
 */
function checkCookie() {
    if (getCookie('token') === 'undefined') {
        window.location.href = "auth.html"
    }
}