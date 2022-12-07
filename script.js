$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});


function myFunction() {

  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (btnText.innerHTML === "see more projects") {
    btnText.innerHTML = "see less projects"; 
    moreText.style.display = "flex";
  } else {
    btnText.innerHTML = "see more projects"; 
    moreText.style.display = "none";
  }
}

function myFunction2() {

  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (btnText.innerHTML === "weitere Projekte ansehen") {
    btnText.innerHTML = "weniger Projekte sehen"; 
    moreText.style.display = "flex";
  } else {
    btnText.innerHTML = "weitere Projekte ansehen"; 
    moreText.style.display = "none";
  }
}

