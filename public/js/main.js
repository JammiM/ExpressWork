$(document).ready(function(){

  $('.removeUser').on('click', deleteUser);

});


function deleteUser() {
  var confirm = confirm("Are you sure ?");
  if (confirm) {
        alert(1);
  }

}
