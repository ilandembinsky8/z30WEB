/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


  $(document).ready(function(){
      $("#tab1").click(function(){
          $("#users").toggle();
           $("#requests").hide();
      });
    
    
    });

   $(document).ready(function(){
      $("#tab2").click(function(){
          $("#requests").toggle();
          $("#users").hide();
      });
    
    
    });

 function  Approve(){
    alert("Approve")
 }
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

