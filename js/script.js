/*
 Реализовать простую программу на Javascript, которая будет взаимодействовать с пользователем с помощью модальных окон браузера - alert, prompt, confirm.

 Технические требования:
 - Считать с помощью модельного окна браузера данные пользователя: имя и возраст.
 - Если возраст меньше 18 лет - показать на экране сообщение: You are not allowed to visit this website.
 - Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением:
 Are you sure you want to continue? и кнопками Ok, Cancel.
 Если пользователь нажал Ok, показать на экране сообщение: Welcome, + имя пользователя.
 Если пользователь нажал Cancel, показать на экране сообщение: You are not allowed to visit this website.
 - Если возраст больше 22 лет - показать на экране сообщение: Welcome, + имя пользователя.
 - Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.

 Необязательное задание продвинутой сложности:
 - После ввода данных добавить проверку их корректности. Если пользователь не ввел имя, либо при вводе возраста
 указал не число - спросить имя и возраст заново (при этом значением по умолчанию для каждой из переменных должна
 быть введенная ранее информация).
*/

let isInteger = (num) => {
    return (num ^ 0) === num;
};

let checkName = (name) => {
    while (name === null || typeof name === "undefined" || name.trim() === "") {
        name = prompt("Input your name: ");
    }
    return name;
};

let checkAge = (age) => {
    age = Number(age);
    while (isNaN(age) || !isInteger(age) || age === 0 || age === null) {
        age = prompt("Input correct age: ");
    }
    if (age < 18) {
        alert("You are not allowed to visit this website");
    } else if (age >= 18 && age <= 22) {
        let cont = confirm("Are you sure you want to continue?");
        if (cont) {
            alert("Welcome, " + name);
        } else {
            alert("You are not allowed to visit this website");
        }
    } else {
        alert("Welcome, " + name);
    }
    return age;
};

let name = checkName(prompt("Input your name: "));

let age = checkAge(prompt("Input your age: "));