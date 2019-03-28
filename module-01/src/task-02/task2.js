'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const promptLabel = `Укажите количество дроидов, которое Вы хотите приобрести`;

let userChoise = prompt(promptLabel);
let totalPrice = pricePerDroid * userChoise;
if (totalPrice > credits) {
  alert((message = 'Недостаточно средств на счету!'));
} else {
  alert(
    (message = `Вы купили ${userChoise} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`),
  );
}

console.log(message);

//ЗАДАЧА 2

// На счету пользователя есть 23580 кредитов, значение хранится в
// переменной credits (создай и присвой). Пользователь решает купить
// ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного
// дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество
// дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата Cancel, выводит в консоль сообщение '
// Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в
// переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на
// счету и вывести сообщение 'Вы купили [число] дроидов,
// на счету осталось [число] кредитов.'.
