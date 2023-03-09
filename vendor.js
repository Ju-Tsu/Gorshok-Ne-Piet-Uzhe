var btn = document.querySelector('.cta_button');
function getNumberOfDays() {
  let date = '2013-07-19T00:00:00.000Z';
  let currentDate = Date.parse(new Date());
  let days = (currentDate - Date.parse(date)) / 86400000;
  console.log(Math.round(days));
  alert("Горшок не пьет уже " + Math.round(days) + " дней");
}
