'use strict';

const userCountryChoise = prompt(`Выберите страну доставки!`);

if (userCountryChoise === null || userCountryChoise === '') {
  console.log('Страна доставки не выбрана!');
} else {
const country = userCountryChoise.toLowerCase();

switch (country) {
  case 'китай':
    const chinaShipping = 100;
    console.log(`Доставка в ${country} будет стоить ${chinaShipping} кредитов`);
    break;

  case 'южная америка':
    const southAmericaShipping = 250;
    console.log(
      `Доставка в ${country} будет стоить ${southAmericaShipping} кредитов`,
    );
    break;

  case 'австралия':
    const australiaShipping = 170;
    console.log(
      `Доставка в ${country} будет стоить ${australiaShipping} кредитов`,
    );
    break;

  case 'индия':
    const indiaShipping = 80;
    console.log(`Доставка в ${country} будет стоить ${indiaShipping} кредитов`);
    break;

  case 'ямайка':
    const jamaicaShipping = 120;
    console.log(
      `Доставка в ${country} будет стоить ${jamaicaShipping} кредитов`,
    );
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
}

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
