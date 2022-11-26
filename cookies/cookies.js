function getcookie(cName){
    let name = cName + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
  }
    return false;
}

function setcookie(cName , cValue, exdays){
    //sets a cookie based on cookie name , value , expiredate
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/"

}
function deletecookie(){
    var d = new Date();
    var exp = d.getDate()-1;
    document.cookie = cName+"=;expires="+d;
    
}

function allcookieList(){
    var allcookie = document.cookie.split(";");
    var cArr = [];
    for (var i = 0 ; i < allcookie.length ; i++){
        cArr[allcookie[i].split("=")[0].trim()] = allcookie[i].split("=")[1];
    }
    return cArr;
}
function checkcookie(cName){
    //check whether a cookie exists or not
    if(allcookieList()[cName]){
        return true;
    }else{
        return false;
    }


}