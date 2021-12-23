      

   
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card" ).filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        $("button").css("visibility","visible")
      });
      if(value==""){
          $("button").css("visibility","visible")
      }
    });
    $(window).scroll(function(){
         $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
        
       }); 
  });
  
  
  $(".post-entry-1-contents").each(function(i,objt){
      $(this).click(function(){
          $(".btn").each(function(index,objet){
         if(i==index){
          
          $(this).css("visibility","visible")
         }
          
      })
             })
     
  })
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