$(document).ready(function(){

  $('.removeUser').on('click', deleteUser);

});


function deleteUser() {
  var confirmation = confirm("Are you sure ?");

  if (confirmation) {
      $.ajax({
        type: 'DELETE',
        url: '/users/delete/' + $(this).data('id')
      }).done(function (response) {
        window.location.replace('/');
      });

      /*
        The page was not being refreshed after a user was deleted
        so I added antother redirect out of the if statement
      */
      window.location.replace('/');
    } else {
      return false;
    }
}//deleteUser
