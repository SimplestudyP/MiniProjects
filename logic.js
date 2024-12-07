// Select all elements with the class 'cell'
let count=0
const cells = document.querySelectorAll(".cell");
const elementData = [0,0,0,0,0,0,0,0,0];
// Iterate over the NodeList and add the event listener to each element
cells.forEach((cell,index) => {
    cell.addEventListener("click", (ev) => {
        clicked(index,ev.currentTarget);
    });
});

function clicked(index,move) {
    count++
    if(count%2==0){
        move.textContent="O"
        elementData[index]=1
    }
    else{
        move.textContent="X"
        elementData[index]=2
    }    
    if(checkwin(1))
        {
            winText=document.getElementById("winText")
            winText.textContent="O wins!"
            winText.style.visibility='visible'
            showrefreshbutton()
        }
    else if(checkwin(2))
        {
            winText=document.getElementById("winText")
            winText.textContent="X wins!"
            winText.style.visibility='visible'
            showrefreshbutton()
        }
}
function checkwin(n){
    if(elementData[0]==n && elementData[1]==n && elementData[2]==n)
        return true
    else if(elementData[3]==n && elementData[4]==n && elementData[5]==n)
        return true
    else if(elementData[6]==n && elementData[7]==n && elementData[8]==n)
        return true
    else if(elementData[0]==n && elementData[4]==n && elementData[8]==n)
        return true
    else if(elementData[2]==n && elementData[4]==n && elementData[6]==n)
        return true
    else
        return false

}
function showrefreshbutton() {
    const refreshButton = document.getElementById("newGame")
    refreshButton.style.visibility='visible';
    refreshButton.addEventListener('click', () => {
        window.location.reload()});
}
