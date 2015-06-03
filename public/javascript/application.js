/* jshint jquery:true, devel:true, quotmark:false */
$(function()
{
  "use strict";

 function showAllContacts(){

   $.getJSON("/contacts/", function( data )
   {

    var items = data.map(function(val)
    {
      return "<li id='contact_" + val.id + "'>" + val.firstname + "; " + val.lastname + " ;" + val.email+ "</li>";
    });



    $( "<ul/>",
    {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



 }

 
 $("#show_all_contacts").on('click', showAllContacts);


// $("#betButton").click(betMoney);
// $("#resetMoney").click(resetMoney);
// $("#betAmount").on('change', updateBetAmount);
// $("#userGuess").on('change', updateGuess);
});


