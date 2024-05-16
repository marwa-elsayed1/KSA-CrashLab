getLanguage();
function getLanguage(){
  var currentLanguage=localStorage.getItem('lang');
  if(currentLanguage=='Ar')
    change_arabic();
  else 
    change_english();

}



// var userLang = navigator.language || navigator.userLanguage; 
// alert ("The language is: " + userLang);
// en-US
// ar
