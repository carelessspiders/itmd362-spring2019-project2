/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/6/2019
   File Name: index_script.js
*/

// Runs when the document starts
$(document).ready(function() {
  var initialdrop = false;
  var initialsubdrop = false;

  // ======== Toggles nav menu dropdowns ========
  $("#menu").click(function() {
    $("#navbars").slideToggle();
  });

  // ====================================================================
  // main buttons

  // ======== home button ========
  $("#homebtn").on({  

    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideUp(200);
        $("#aboutusdropdown").slideUp(200);
        initialdrop = false;
      }
    },

    dblclick: function () {
      window.location.href='/itmd362-spring2019-project2/index.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/index.html'; // go to home page
      } else {
        $("#eventsdropdown").slideUp();
        $("#aboutusdropdown").slideUp();
        $("#homedropdown").slideToggle();
      }
    } 

  })

  // ======== about us ========
  $("#aboutusbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialdrop == false){
        $("#aboutusdropdown").slideDown(200, function(){ initialdrop = true;});
        initialdrop = true;
      } else if ($(window).outerWidth() >= 960){
        $("#aboutusdropdown").show();
        $("#eventsdropdown").hide();
        $("#homedropdown").hide();
      }
    },

    dblclick: function () {
      window.location.href='/itmd362-spring2019-project2/aboutus.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/aboutus.html'; // go to home page
      } else {
        $("#eventsdropdown").slideUp();
        $("#homedropdown").slideUp();
        $("#aboutusdropdown").slideToggle();
      }
    } 
  })

  // === ABOUT SUBNAV ===
  $("#abouthisbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/history.html'; }
  })

  $("#aboutconbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/constitution.html'; }
  })

  $("#aboutdirbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/directors.html'; }
  })

  $("#aboutjourbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/journal.html'; }
  })

  // ======== events ========
  $("#eventsbtn").on({ 
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialdrop == false){
        $("#eventsdropdown").slideDown(200, function(){ initialdrop = true;});
        initialdrop = true;
      } else if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").show();
        $("#aboutusdropdown").hide();
        $("#homedropdown").hide();
      }
    },

    dblclick: function () {
      window.location.href='/itmd362-spring2019-project2/events.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/events.html'; // go to home page
      } else {
        $("#aboutusdropdown").slideUp();
        $("#homedropdown").slideUp();
        $("#eventsdropdown").slideToggle();
      }
    } 

  })

  //============= events submenu =============
  $("#submenuev").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialsubdrop == false){
        $("#submenudropdown").slideDown(200, function(){ initialsubdrop = true;});
        initialsubdrop = true;
      } else if ($(window).outerWidth() >= 960){
        $("#submenudropdown").show();
      }
    },

    dblclick: function () { //TODO: Blank page for 2018
      //window.location.href='#'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){ //TODO: Blank page for 2018
        //window.location.href='/events.html';  
      } else {
        $("#submenudropdown").slideToggle(); //opens or closes submenu
      }
    }

  })

  // =======================================================================================================
  $("#2016cgbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#submenudropdown").slideUp();
        initialsubdrop = false;
      }
    },

    dblclick: function () { 
      //window.location.href='#'; 
    },

    click: function () {
      window.location.href='/itmd362-spring2019-project2/events/2016_congress.html';
    }

  })

  //=======

  //=======
  $("#pastpg").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#submenudropdown").slideUp();
        initialsubdrop = false;
      }
    },

    dblclick: function () { 
      //window.location.href='#'; 
    },

    click: function () {
      window.location.href='/itmd362-spring2019-project2/events/past_events.html';
    }

  })

  //=======
  $("#vidspg").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#submenudropdown").slideUp();
        initialsubdrop = false;
      }
    },

    dblclick: function () { 
      //window.location.href='#'; 
    },

    click: function () {
      window.location.href='/itmd362-spring2019-project2/events/videos.html';
    }

  })

  //==========redirects for events page================
  $("#2018cpbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_callforpapers.html'; }
  })
  $("#2018gabtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_generaladvice.html'; }
  })
  $("#2018vsbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_visa.html'; }
  })
  $("#2018srvfbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_survfood.html'; }
  })
  $("#2018srvhbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_survhist.html'; }
  })
  $("#2018srvtbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_survtrip.html'; }
  })

  $("#pastpg").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/past_events.html'; }
  })
  $("#vidspg").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/videos.html'; }
  })
  
  $("#2018gabtn2").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/2018_congress_generaladvice.html'; }
  })
  $("#pastpg2").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/past_events.html'; }
  })
  $("#vidspg2").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/events/videos.html'; }
  })

  // ======== contact ========
  $("#contactbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        slideNavAndSubnav();
      }
    },

    dblclick: function () {
      window.location.href='/itmd362-spring2019-project2/contact.html'; 
    },

    click: function () { window.location.href='/itmd362-spring2019-project2/contact.html'; }

  })


  // ======== whole nav ========
  $("nav").on({  
    mouseenter: function () { },
    mouseleave: function () {
      if ($(window).outerWidth() >= 960){
        if(initialsubdrop = true){
          slideNavAndSubnav();
        }
        else{
          $("#eventsdropdown").slideUp(200);
          $("#aboutusdropdown").slideUp(200);
          $("#homedropdown").slideUp(200);
        }
        initialdrop = false;
      }
    }
  })

});

//slides up all nav
function slideNavAndSubnav(){
  $("#submenudropdown").slideUp(200,"swing", function(){
    $("#eventsdropdown").slideUp(200);
    $("#aboutusdropdown").slideUp(200);
    $("#homedropdown").slideUp(200);
    initialdrop = false;
    initialsubdrop = false;
  });
}

//homepage signup button
  $("#signupbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/signup.html'; }
  })

//form signup button
  $("#gotoformbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/signupform.html'; }
  })


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
    $("#submenudropdown").hide();
    resized = true;
  } 
  // Hides main nav
  if($(window).outerWidth() < 960 && resized == true){
    $("#navbars").hide();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    $("#submenudropdown").hide();

    resized = false;
  }

});
