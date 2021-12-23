$(document).ready(function(){
    $(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
   
  }); 
 $('#aside').fadeOut(1000).fadeIn('slow');
  $('.service-1-icon').css("opacity",'0.6')
  $('#image-head').css("opacity",'1')
  
$('.service-1-icon').each(function(i, obj) {
 $(this).mouseenter(function(){
   $(this).css({
     opacity: '1',
   height: '120px',
     width: '100px'
   })
 })
 $(this).mouseleave(function(){
   $(this).css({
     opacity: '0.6',
   height: '80px',
     width: '80px'
   })
 })


});

   
    });
   $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
 });

function repeter(){
 document.getElementById('verifEmail').innerHTML="";
 document.getElementById('email').style.color='black'
} 
function send(){
  var regEmail=/@/;
  var verification=document.getElementById('email').value.match(regEmail);
 if(verification==null){
  document.getElementById('verifEmail').innerHTML="il faut vérifier la forme de l'email ajouter @";
  document.getElementById('email').style.color='gray'
 }
}