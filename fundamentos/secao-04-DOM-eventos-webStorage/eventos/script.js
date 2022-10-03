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
    else if (days == 25) {
      dayListLi.className = 'day holiday friday'
    }
    else {
      dayListLi.className = 'day';
    };
  };
}
createDaysOfTheMonth();

// ! PARTE 2
function createBtnHoliday(botao, feriado) {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const button = document.createElement(botao);
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
  button.innerHTML = feriado;
}
createBtnHoliday('button', 'feriado');
createBtnHoliday('button', 'sexta-feira');

// ! PARTE 3
function displayHolidays(color) {
  let getHolidayButton = document.getElementById('btn-holiday');
  let getHolidays = document.getElementsByClassName('holiday')
  let backgroundColor = 'rgb(238,238,238)';

  getHolidayButton.addEventListener('click', function () {
    for (let i in getHolidays) {
      if (getHolidays[i].style.backgroundColor === color) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[i].style.backgroundColor = color;
      }
    }
  });
}
displayHolidays('green')

// ! PARTE 5
function chamarSexta(array) {
  let botãoSexta = document.getElementById('btn-holiday').nextElementSibling;
  let listSextas = document.getElementsByClassName('friday');

  botãoSexta.addEventListener('click', function () {
    for (let i = 0; i < listSextas.length; i += 1) {
      if (listSextas[i].innerHTML === 'SEXTOU!') {
        listSextas[i].innerHTML = array[i];
      } else {
        listSextas[i].innerHTML = 'SEXTOU!'
      }
    }
  });
};
chamarSexta([4, 11, 18, 25]);

// ! PARTE 6

var days = document.getElementsByClassName('day');
for (i = 0; i < days.length; i += 1) {
  var lala = days[i]
  lala.addEventListener('mouseover', function (e) {
    e.target.style.fontSize = '30px';
  });
  lala.addEventListener('mouseout', function (e) {
    e.target.style.fontSize = '20px';
  });
};

// ! PARTE 7 E 8
function minhasTarefas(string, color) {
  let myTasks = document.getElementsByClassName('my-tasks')[0];

  let span = document.createElement('span');
  myTasks.appendChild(span);
  span.innerHTML = string;

  let botaoDiv = document.createElement('div');
  myTasks.appendChild(botaoDiv);
  botaoDiv.className = 'task';
  botaoDiv.style.backgroundColor = color;
};
minhasTarefas('dar carinho na Pedrita', 'blue');
// minhasTarefas('estudar', 'red'); para colocar mais uma tarefa preciso colocar isso aqui dentro de um IF/ELSE

// ! PARTE 9
function selecionarTarefas() {
  let selecionaBotao = document.getElementsByClassName('task');
  for (i = 0; i < selecionaBotao.length; i += 1) {
    x = selecionaBotao[i];
    x.addEventListener('click', function () {
      if (x.className == 'task') {
        x.className = 'task selected';
      }
      else {
        x.className = 'task';
      }
    });
  }
}
selecionarTarefas();

// ! PARTE 10
function corTarefa() {
  let tarefaSelecionada = document.getElementsByClassName('selected');
  let taskDiv = document.getElementsByClassName('task')[0];
  let corTask = taskDiv.style.backgroundColor;

  for (i = 0; i < days.length; i += 1) {
    let y = days[i]
    y.addEventListener('click', function (e) {
      let targetColor = e.target.style.color;
      if (tarefaSelecionada.length > 0 && targetColor !== corTask) {
        let color = tarefaSelecionada[0].style.backgroundColor;
        e.target.style.color = color;
      }
      else if (targetColor === corTask) {
        e.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
}
corTarefa();







