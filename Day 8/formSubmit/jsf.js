var userInputs = document.getElementsByTagName("input");
var myEvent = new Event("timer");
var myTimer , i;
alert("You should enter any data before 5 Sec")
document.addEventListener("timer",function(){
    myTimer = setInterval(function(){
        for(var i = 0 ; i < userInputs.length - 5; i++){
            if (userInputs[i].value == ""){
                alert("Enter your data");
            }
            else{
                document.getElementById("myAlert").innerText = "Good , you enter your Data"
            }
        }
    },5000)
});
document.dispatchEvent(myEvent);