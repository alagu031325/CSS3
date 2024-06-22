// selecting the time element from the html document in which ever we load this js
const year = document.getElementById("year");

const thisYear = new Date().getFullYear();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
