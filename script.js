window.onload = createDivs(16,16);
function createDivs(numOne, numTwo) {
    let sum = numOne * numTwo;
    let divsCreated = 0;
    while (divsCreated < sum) {
        let mainSection = document.querySelector("section");
        let newDiv = document.createElement("div");
        mainSection.appendChild(newDiv);
        divsCreated++;
        newDiv.addEventListener("mouseover",function () {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            newDiv.style.backgroundColor = randomColor;
        })
    } 
    
}

function changeNums() {
    let newNumOne = prompt()
    let newNumTwo = prompt()
    if (newNumOne< 1 || newNumOne > 100 || Number.isNaN(newNumOne)) {
        alert("Cant use numbers higher than 100!")
    } else {
        let mainSection = document.querySelector("section");
    while (mainSection.firstChild) {
       mainSection.removeChild(mainSection.lastChild);
      } 
      createDivs(newNumOne, newNumTwo);
      mainSection.style.gridTemplateColumns = `repeat(${newNumOne}, 1fr)`;
    }
} 