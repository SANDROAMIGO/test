
let name = "Даниил";

const birth = 2002;


function sayHello() {
    alert('Здарова, ' + name + '!');
}


function range(start, end) {
    let result = [];
    let k = 0;
    for (let i = start; i <= end; i++, k++)
        result[k] = i;
    return result;
}


function rangeOdd(start, end) {
    let result = range(start, end);
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0)
        {
            result.splice(i, 1);
            i--;
        }
    }
    return result;
}


function average(a, b) {
    return (a + b) / 2;
}


function square(x) {
    return x * x;
}


function cube(x) {
    return x * x * x;
}


function calculate(numbers = 9) {
    let result = [];
    for (let i = 0; i < numbers; i++)
        result[i] = average(square(i), cube(i));
    return result;
}




function main() {
    document.writeln('<p>' + 'Ваше имя: ' + name);
    document.writeln('<p>' + 'Ваш год рождения: ' + birth + '</p>');

    let arr = range(15, 30);
    document.writeln('<p>' + 'Массив от 15 до 30: ' + arr);

    arr = rangeOdd(15, 30)
    document.writeln('<p>' + 'Массив от 15 до 30 но нечетные: ' + arr + '</p>');

    document.writeln('<p>' + 'average (numbers 2, 3): ' + average(2, 3));
    document.writeln('<p>' + 'square (number 5): ' + square(5));
    document.writeln('<p>' + 'cube (number 4): ' + cube(4));
    document.writeln('<p>' + 'calculate: ' + calculate() + '</p>');
}


main()