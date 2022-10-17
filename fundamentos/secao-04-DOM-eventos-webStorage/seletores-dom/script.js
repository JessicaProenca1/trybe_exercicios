const header = document.getElementById("header-container");
header.style.color = '#fff';
header.style.backgroundColor = '#16D652';

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = '#B566D4';

const div = document.querySelectorAll("section.emergency-tasks h3");
for (let i = 0; i < div.length; i += 1){
  div[i].style.backgroundColor = '#B400FC';
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = '#D9DC54';

const div2 = document.querySelectorAll("section.no-emergency-tasks h3");
for (let i = 0; i < div2.length; i += 1){
  div2[i].style.backgroundColor = '#292905';
}

const footer = document.getElementById("footer-container");
footer.style.color = '#fff';
footer.style.backgroundColor = '#10623D';