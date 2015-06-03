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

function searchFirstNameContacts()
{

  var term = 'John';
   term = $('#firstname_field').val();
   console.log(typeof(term));
  console.log("term below");
  console.log(term);
  console.log("term above");
  $.getJSON("/contacts/firstname/" + term , function(data)
  {
    renderContacts(data);
  });
}

function searchLastNameContacts()
{

  var term = 'John';
   term = $('#firstname_field').val();
   console.log(typeof(term));
  console.log("term below");
  console.log(term);
  console.log("term above");
  $.getJSON("/contacts/lastname/" + term , function(data)
  {
    renderContacts(data);
  });
}


function searchEmailContacts()
{

  var term = 'John';
   term = $('#firstname_field').val();
   console.log(typeof(term));
  console.log("term below");
  console.log(term);
  console.log("term above");
  $.getJSON("/contacts/email/" + term , function(data)
  {
    renderContacts(data);
  });
}


function addNewContact()
{

  var term = 'John';
   term = $('#firstname_field').val();
   console.log(typeof(term));
  console.log("term below");
  console.log(term);
  console.log("term above");
  $.getJSON("/contacts/email/" + term , function(data)
  {
    renderContacts(data);
  });
}

$("#show_all_contacts").on('click', showAllContacts);


$("#show_search_results").on('click', searchFirstNameContacts);


$("#show_search_results_last_name").on('click', searchLastNameContacts);

$("#show_search_results_email").on('click', searchEmailContacts);

$("#add_new_contacts").on('click', addNewContact)



});