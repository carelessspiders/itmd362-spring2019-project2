/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/6/2019
   File Name: index_script.js
*/

// Runs when the document starts
$(document).ready(function() {

  // ======== Toggles nav menu dropdowns ========
  $("#menu").click(function() {
    $("#navbars").slideToggle();
  });

  $("#homebtn").click(function() {
    if ($(window).outerWidth() >= 960){
      window.location.href='index.html'; // go to home page
    } else {
      $("#eventsdropdown").slideUp();
      $("#aboutusdropdown").slideUp();
      $("#homedropdown").slideToggle();
    }

  });

  $("#aboutusbtn").click(function() {
    if ($(window).outerWidth() >= 960){
      window.location.href='aboutus.html'; // go to about us page
    } else {
      $("#eventsdropdown").slideUp();
      $("#homedropdown").slideUp();
      $("#aboutusdropdown").slideToggle();
    }
  });

  $("#eventsbtn").click(function() {
    if ($(window).outerWidth() >= 960){
      window.location.href='events.html'; // go to events page
    } else {
      $("#aboutusdropdown").slideUp();
      $("#homedropdown").slideUp();
      $("#eventsdropdown").slideToggle();
    }
  });



  // ======== Mouse hover for desktop view ========

  // home 
  $("#homebtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#homedropdown").slideDown(400);
        $("#eventsdropdown").slideUp(400);
        $("#aboutusdropdown").slideUp(400);
      }
    }
  })

  // about us
  $("#aboutusbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#aboutusdropdown").slideDown(400);
        $("#eventsdropdown").slideUp(400);
        $("#homedropdown").slideUp(400);
      }
    }
  })
  
  // events
    $("#eventsbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideDown(400);
        $("#aboutusdropdown").slideUp(400);
        $("#homedropdown").slideUp(400);
      }
    }
  })

  // entire nav
  $("nav").on({  
    mouseenter: function () { },
    mouseleave: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideUp(200);
        $("#aboutusdropdown").slideUp(200);
        $("#homedropdown").slideUp(200);
      }
    }
  })
  
});


// =====================================================================
// Shows or hides the mobile navbar when resizing to larger screen
var resized = false;
$(window).resize(function(){
  // Hides mobile nav, but shows main nav
  if ($(window).outerWidth() >= 960 && resized == false){
    $("#navbars").show();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    resized = true;
  } 
  // Hides main nav
  if($(window).outerWidth() < 960 && resized == true){
    $("#navbars").hide();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    resized = false;
  }

});
