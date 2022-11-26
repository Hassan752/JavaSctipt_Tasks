window.addEventListener('keydown',k =>{
    var ascii , k = k.key;
    if (k.length ==1){
        ascii = k.charCodeAt(0);
        alert("ASCII code " + ascii + " enterd from your keyboard")
    }else if (event.altKey){
        alert("You clicked ALT ley")
      
    }
    else if (event.ctrlKey){
        alert("You clicked CTRL ley")
      
    }
    else if (event.shiftKey){
        alert("You clicked SHIFT key")
      
    }
})