let modal = document.getElementById('myForm');

modal.addEventListener('submit', function(e){
  modal.modal('show');
  e.preventDefault();
});