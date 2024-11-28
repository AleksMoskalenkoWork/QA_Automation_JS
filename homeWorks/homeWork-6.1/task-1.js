// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration
function areaRectangleDeclaration(width, height) {
  return width * height;
}

console.log(areaRectangleDeclaration(10, 30));

// function expression
const areaRectangleExpression = function (width, height) {
  return width * height;
};

console.log(areaRectangleExpression(10, 40));

// arrow function
const areaRectangleArrow = (width, height) => width * height;

console.log(areaRectangleExpression(10, 50));
