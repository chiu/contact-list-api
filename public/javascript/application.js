
$(document).ready(function(){

  (function(){
    var userMoney;
    var betAmount;
    var userGuess;
    var randomNumber;
    var BET_MINIMUM = 5;
    var BET_MAXIMUM = 10;
    var GUESS_MINIMUM = 1;
    var GUESS_MAXIMUM = 10;
    var MONEY_INITIAL = 100;


    function generateRandomNumber(){
     randomNumber = Math.floor((Math.random() * 3) + 1);
     console.log("random number:" + randomNumber + typeof(randomNumber));
     $("#last_round_random").text(randomNumber.toString());
   }

   

   function showAllContacts(){

     $.getJSON("/contacts/", function( data ){

      console.log(JSON.stringify(data));
      var items = [];
      $.each( data, function( key, val ) {
        var rawData = JSON.stringify(val);
        var parsed = JSON.parse(rawData);


        // var obj = JSON.parse(val);
        // console.log(obj);
        items.push( "<li id='" + key + "'>" + val.firstname + "; " + val.lastname + " ;" + val.email+ "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );

    });



   }

   
   $("#show_all_contacts").on('click', showAllContacts)


// $("#betButton").click(betMoney);
// $("#resetMoney").click(resetMoney);
// $("#betAmount").on('change', updateBetAmount);
// $("#userGuess").on('change', updateGuess);

})();
});


