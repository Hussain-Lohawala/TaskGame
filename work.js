var greenBallCount =0;
function generateGreen(){
    console.log("Hello World");
    var node = document.createElement("div"); 
    node.setAttribute("class", "ball greenball"); 
    document.getElementsByClassName("ballContainer")[0].appendChild(node);
    greenBallCount+=1;
}
function removeBall(){
    if(greenBallCount>0){
        document.getElementsByClassName("greenball")[0].remove();
        greenBallCount-=1;
    }

}