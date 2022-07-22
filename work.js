var greenBallCount =0;
function generateGreen(){
    console.log("Game Started");
    var node = document.createElement("div"); 
    node.setAttribute("class", "ball greenball"); 
    document.getElementsByClassName("ballContainer")[0].appendChild(node);
    greenBallCount+=1;
    document.getElementById('resetButton').innerHTML="RESET";
}
function removeBall(){
    if(greenBallCount>0){
        document.getElementsByClassName("greenball")[0].remove();
        greenBallCount-=1;
    }

}
function startReset(){
    if(greenBallCount==0){
        generateGreen();
    }
    else{
        while(greenBallCount){
            document.getElementsByClassName("greenball")[0].remove();
            greenBallCount-=1;
        }
        document.getElementById('resetButton').innerHTML="START";
    }
}