$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

$("#savebutton").on('click', deleteFunction)


function deleteFunction(){

 $.ajax("/contacts/:id/", {method: 'DELETE'})

} 

});
