$(document).ready(function(){

  $('.removeUser').on('click', deleteUser);

});


function deleteUser() {
  var confirmation = confirm("Are you sure ?");

  if (confirmation) {
    $.ajax({
      type: 'DELETE',
      url: '/users/delete/' + $('.removeUser').data('id')
    }).done(function (response) {
      window.location.replace('/');
    });
  } else {
    return false;
  }
}//deleteUser
