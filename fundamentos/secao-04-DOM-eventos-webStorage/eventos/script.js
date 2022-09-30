function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// ! PARTE 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysId = document.getElementById('days');
function createDaysOfTheMonth() {
   for (let i = 0; i < decemberDaysList.length; i += 1) {
    const days = decemberDaysList[i];
    const dayListLi = document.createElement('li');
    dayListLi.innerHTML = days;
    daysId.appendChild(dayListLi);

    if (days == 24 || days == 31) {
      dayListLi.className = 'day holiday';
    }
    else if (days == 4 || days == 11 || days == 18) {
      dayListLi.className = 'day friday';
    }
    else if (days == 25){
      dayListLi.className = 'day holiday friday'
    }
    else {
      dayListLi.className = 'day';
    };
  };
}
createDaysOfTheMonth();

// ! PARTE 2
function createBtnHoliday (botao, feriado) {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const button = document.createElement(botao);
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
  button.innerHTML = feriado;
}
createBtnHoliday('button', 'feriado');
createBtnHoliday('button', 'natal');

// ! PARTE 3
const a = document.querySelectorAll('#btn-holiday')
const mudaCor = document.addEventListener('click', mudaCorHoliday);
const classHoliday = document.querySelectorAll('.holiday');


function mudaCorHoliday (color){
  for (let i in classHoliday){
    if (classHoliday[i].style.backgroundColor = color){
    }
    else {
    }
  }
}
mudaCorHoliday('red');
