var modal = document.getElementById("myModal");
var btn = document.getElementById("cta_button");
var span = document.getElementsByClassName("close")[0];
btn.addEventListener('click', function() {
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
  modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function getNumberOfDays() {
  let date = '2013-07-19T00:00:00.000Z';
  let currentDate = new Date();
  return days = (currentDate - Date.parse(date)) / 86400000;
}
document.getElementById('info').innerHTML = 'Горшок не пьет уже ' + Math.round(getNumberOfDays()) + ' дней';

