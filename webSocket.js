async function webSocketStart() {

    const socket = new WebSocket("wss://localhost:8080");

    socket.onopen = function (e) {
        console.log("WebSocket start!");
    };

    socket.onmessage = function (event) {
        let answer = event.data;

        let answerElem = document.createElement("li");
        answerElem.textContent = answer;
        document.getElementById("categories").prepend(answerElem);
    }
}