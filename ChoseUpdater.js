//Wrapper class made to use particular child
class Updater {
    strategy

    constructor(strategy) {
        this.strategy = strategy
    }

    updater() {
        this.strategy.updateCategories()
    }
}

//Parent class with declared updateCategories method
class UpdateCategories {

    updateCategories() {
        throw new Error("Error!")
    }
}

//Child class with implementation using WebSocket
class UpdateWebSocket extends UpdateCategories {

    updateCategories() {
        //Getting a message-display data in li#categories
        socket.onmessage = function (event) {
            let answer = event.data;

            let answerElem = document.createElement("li");
            answerElem.textContent = answer;
            document.getElementById("categories").prepend(answerElem);
        }
    }
}

//Child class with implementation using Fetch with particular update time
class UpdateFetch extends UpdateCategories {

    updateCategories() {
        /**
         * Method for getting all categories
         */
        async function showCategories() {

            //sending a get request to the server
            const json = await API.getData()
            const catElement = document.getElementById("categories")
            catElement.innerHTML = ""//get categories and create a list of category
            for (let category of json) {
                const elem = document.createElement("li")
                const a = document.createElement("a")
                a.dataset.id = category.id
                a.innerText = category.title
                a.href = '#'
                //on click on category, the data is downloaded
                a.onclick = await function () {
                    downloadCategory(urlCore + '/category/' + category.id)
                };
                elem.appendChild(a)
                catElement.appendChild(elem)
            }
        }

        //call the methods showCategory every three seconds
        setInterval(showCategories, 3000)
    }
}