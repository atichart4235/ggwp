var pressthebutton = 0;
function postFunction(){
    pressthebutton++;
    console.log(pressthebutton);
     tagTextArea = document.getElementById("Area").value;
 if(pressthebutton == 1){
    document.getElementById("topic1").innerHTML= tagTextArea;
}
 if(pressthebutton == 2){
    document.getElementById("comment1").innerHTML= tagTextArea;
}
 if(pressthebutton == 3){
    document.getElementById("comment2").innerHTML=tagTextArea;
}
else{
} 
}

function clearFunction(){
    document.getElementById("topic1").innerHTML= "";
    document.getElementById("comment1").innerHTML= "";
    document.getElementById("comment2").innerHTML= "";
    pressthebutton = 0;
}