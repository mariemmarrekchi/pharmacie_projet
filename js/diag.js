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
function verifBilan(){
 if(document.getElementById('temperature').value==''&& document.getElementById('glugose').value==''|| document.getElementById('resTemp').innerHTML=='remplir le champs svp'|| document.getElementById('resTemp').innerHTML=='invalid votre température' ){
document.getElementById('bilan').disabled=true;

}else{
 document.getElementById('bilan').disabled=false;
}


}
function verifClickBilan(){
if(document.getElementById('temperature').value===''&& document.getElementById('glugose').value==='' ){
document.getElementById('bilan').disabled=true;

}else{
 document.getElementById('bilan').disabled=false;
}

}

function verifTemp(){
 document.getElementById('temp').innerHTML=document.getElementById('temperature').value;
  if(parseInt(document.getElementById('temperature').value) < 35 || parseInt(document.getElementById('temperature').value) > 42 ){
   document.getElementById('resTemp').innerHTML="invalid votre température";
   document.getElementById('resTemp').style.color='red'
  }
  else{
  if(parseInt(document.getElementById('temperature').value) >=35 && parseInt(document.getElementById('temperature').value) < 38 ){
   document.getElementById('resTemp').innerHTML="pas de fiévre";
   document.getElementById('resTemp').style.color='blue'
  }
  
  else 
  if(parseInt(document.getElementById('temperature').value) >=38){
   document.getElementById('resTemp').innerHTML=" vous avez du fiévre";
   document.getElementById('resTemp').style.color='red'
  }
  else{
   document.getElementById('resTemp').innerHTML='remplir le champs svp'
   document.getElementById('resTemp').style.color='red'
  }
}
}

function verifToux(){
if(document.getElementById('radio1').checked==true){
 document.getElementById('resToux').innerHTML=''
 document.getElementById('resToux').style.color='red'
 document.getElementById('toux').innerHTML=document.getElementById('radio1').value;
}
else{
 document.getElementById('resToux').innerHTML='votre etat est stable '
 document.getElementById('resToux').style.color='green'
 document.getElementById('toux').innerHTML=document.getElementById('radio2').value;
}
}

function verifTension(){
if(parseInt(document.getElementById('tension').value)>=15){
 document.getElementById('resToux2').innerHTML='Vous avez Hypertension '
 document.getElementById('resToux2').style.color='red'
 document.getElementById('toux2').innerHTML=document.getElementById('tension').value;
}
else  if(parseInt(document.getElementById('tension').value)<=8){
 document.getElementById('resToux2').innerHTML='votre avez Hypotension '
 document.getElementById('resToux2').style.color='red'

 document.getElementById('toux2').innerHTML=document.getElementById('tension').value;
}
else if(parseInt(document.getElementById('tension').value)>8){
 document.getElementById('resToux2').innerHTML='votre tension est normale '
 document.getElementById('resToux2').style.color='green'

 
 document.getElementById('toux2').innerHTML=document.getElementById('tension').value;
}
else{
 document.getElementById('resToux2').innerHTML='Remplir votre champ svp '
 document.getElementById('resToux2').style.color='red'
}
}

function verifGlu(){

let glugose=parseFloat(document.getElementById('glugose').value);
let glu=document.getElementById('glugose').value;
document.getElementById('glucose').innerHTML=document.getElementById('glugose').value;

if(glugose< 0.7 || glugose > 1.7){
document.getElementById('resGlu').innerHTML='consulter votre medecin '
document.getElementById('resGlu').style.color='red'

}
else{
 document.getElementById('resGlu').innerHTML= 'votre etat normale '
 document.getElementById('resGlu').style.color='green'
}
if(glu==''){
 document.getElementById('resGlu').innerHTML= ' Remplir le champ svp'
 document.getElementById('resGlu').style.color='red'
}
}

function verifVertige(){
if(document.getElementById('radio5').checked==true){
 document.getElementById('resVertige').innerHTML=document.getElementById('radio5').value;
 document.getElementById('resVertige').style.color='red'
 document.getElementById('vertige').innerHTML=document.getElementById('radio5').value;
}
else if(document.getElementById('radio6').checked==true){
 document.getElementById('resVertige').innerHTML=document.getElementById('radio6').value;
 document.getElementById('resVertige').style.color='green'
 document.getElementById('vertige').innerHTML=document.getElementById('radio6').value;

}
else{
 document.getElementById('resVertige').innerHTML=document.getElementById('radio7').value;
 document.getElementById('resVertige').style.color='red'
 document.getElementById('vertige').innerHTML=document.getElementById('radio7').value;

}
}

function verifOx(){
 if(document.getElementById('radio8').checked==true){
 document.getElementById('resToux').innerHTML=document.getElementById('radio8').value;
 document.getElementById('resToux').style.color='green'
 document.getElementById('toux').innerHTML=document.getElementById('radio8').value;
}
else{
 document.getElementById('resToux').innerHTML=document.getElementById('radio9').value;
 document.getElementById('resToux').style.color='red'
 document.getElementById('toux').innerHTML=document.getElementById('radio9').value;
}
}