// Для валидации данных использовался паттерн Фабрика
// В зависимости от типов валидации функция имеет 2 случая: проверять 2, либо 3 поля
// На вход функция принимает ValidType и возвращает булевую переменную, которая означает верны данные или нет
function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateForm(validateType){
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    switch(validateType) {
        case "reg" :
            let email=document.getElementById("email").value;
            return validateField(password) && validateField(name) && validateEmail(email);
            break;
        case "auth" :
            return validateField(password) && validateField(name);
            break;

    }
}

function validateField(field){
    return field.length >= 4;
}

