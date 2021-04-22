async function webSocketStart() {

    //Opening a WebSocket connection
    const socket = new WebSocket("wss://localhost:8080");

    //Getting a message-display data in li#categories
    socket.onmessage = function (event) {
        let answer = event.data;

        let answerElem = document.createElement("li");
        answerElem.textContent = answer;
        document.getElementById("categories").prepend(answerElem);
    }
}