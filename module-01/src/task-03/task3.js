'use strict';

const userCountryChoise = prompt(`Выберите страну доставки!`);

const chinaShipping = 100;
const southAmericaShipping = 250;
const australiaShipping = 170;
const indiaShipping = 80;
const jamaicaShipping = 120;
let message;

switch (userCountryChoise.toLowerCase()) {
  case 'китай':
    message = `Доставка в ${userCountryChoise} будет стоить ${chinaShipping} кредитов`;
    break;

  case 'южная америка':
    message = `Доставка в ${userCountryChoise} будет стоить ${southAmericaShipping} кредитов`;
    break;

  case 'австралия':
    message = `Доставка в ${userCountryChoise} будет стоить ${australiaShipping} кредитов`;
    break;

  case 'индия':
    message = `Доставка в ${userCountryChoise} будет стоить ${indiaShipping} кредитов`;
    break;

  case 'ямайка':
    message = `Доставка в ${userCountryChoise} будет стоить ${jamaicaShipping} кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
}

console.log(message);

//ЗАДАЧА 3
// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt. Учти, что
// пользователь может ввести имя страны не только буквами
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости
// доставки в указанную страну. Формат сообщения:
// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в
// списке, то выводи в консоль сообщение 'В вашей стране
// доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch