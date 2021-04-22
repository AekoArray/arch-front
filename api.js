// const url = "http://localhost:8081"

const json = {
    token: ''
}

async function api(url, method, endpoint, message, data, headers) {
    try {
        const header = headers !== undefined ? headers : {};
        header['Authorization'] = getCookie('token');
        const response = await fetch(url+endpoint, {
            method: method,
            body: data === null? undefined : data,
            headers : header
        });
        return await response.json()
    } catch (e) {
        console.error(e.message)
        document.getElementById("status").innerText = "Error in "+ message
    }
}

async function downloadCategory(url) {
    const options = {
        headers: {
            Authorization: getCookie('token')
        }
    };
    try {
        let response = await fetch(url, options);
        let filename = response.headers.get('content-disposition').split('filename=')[1].split(';')[0];
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

function setCookie(json) {
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = `token=${json.token}; expires=` + date;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    } else {
        return 'undefined';
    }
}

function checkCookie() {
    if (getCookie('token') === 'undefined') {
        window.location.href = "auth.html"
    }
}