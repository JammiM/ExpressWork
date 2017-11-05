$(document).ready(function(){

  $('.removeUser').on('click', deleteUser);

});


function deleteUser() {
  alert(1);
  var confirm = confirm("Are you sure ?");
  if (confirm) {
        alert(1);
  }

}
