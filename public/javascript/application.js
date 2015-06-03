/* jshint jquery:true, devel:true, quotmark:false */
$(function()
{
  "use strict";

  function renderContacts(data)
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
  }

function showAllContacts()
{
  $.getJSON("/contacts/", function(data)
  {
    renderContacts(data);
  });
}

function searchContacts()
{
  var term = $('#firstname').text();
  $.getJSON("/contacts/firstname/" + term, function(data)
  {
    renderContacts(data);
  });
}

$("#show_all_contacts").on('click', showAllContacts);


$("#search_all_results").on('click', searchContacts)
// $("#betButton").click(betMoney);
// $("#resetMoney").click(resetMoney);
// $("#betAmount").on('change', updateBetAmount);
// $("#userGuess").on('change', updateGuess);
});