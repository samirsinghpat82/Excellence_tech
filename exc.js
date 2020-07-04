 //<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

 // Function for filtering
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Functions to delete element selected by Id
function removeElement1(){
    var elem=document.getElementById("card1");
    elem.remove();

}

 function removeElement2(){
          var elem=document.getElementById('card2');
          elem.remove();
        }
        function removeElement3(){
          var elem=document.getElementById('card3');
          elem.remove();
        }
        function removeElement4(){
          var elem=document.getElementById('card4');
          elem.remove();
        }
        function removeElement5(){
          var elem=document.getElementById('card5');
          elem.remove();
        }
        function removeElement6(){
          var elem=document.getElementById('card6');
          elem.remove();
        }
        function removeElement7(){
          var elem=document.getElementById('card7');
          elem.remove();
        }
        function removeElement8(){
          var elem=document.getElementById('card8');
          elem.remove();
        }
        function removeElement9(){
          var elem=document.getElementById('card9');
          elem.remove();
        } 