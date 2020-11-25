addDiv(10);

function addDiv(number) {
    const height = (500-(number-1))/number;
    const container = document.getElementById("container");
    const div = document.createElement("div")
    div.style.height= height+"px";
    div.style.width = height+"px";
    div.style.backgroundColor = "white";
    div.margin = "1px 1px 1px 1px";
    div.className = "grid-item";
    
    for (let i=0; i<number**2; i++) {
        const div = document.createElement("div")
        div.style.height= height+"px";
        div.style.width = height+"px";
        div.style.backgroundColor = "rgb(255,255,255)";
        div.margin = "1px 1px 1px 1px";
        div.className = "grid-item";
        container.appendChild(div);
    }

    let gridItems = document.getElementById("container").querySelectorAll("div");
    gridItems.forEach(div => div.addEventListener("mouseover",colorize));
}

const makeDiv = document.getElementById("new-btn");
makeDiv.addEventListener("click",function () {
    const gridSize = parseInt(document.getElementById("grid-size").value);
    const container = document.getElementById("container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    addDiv(gridSize);

     }
    );

let gridSizeText = document.getElementById("grid-size");
let gridCount = document.getElementById("grid-count");
gridCount.innerHTML = gridSizeText.value;


gridSizeText.oninput = function () {
    gridCount.innerHTML = this.value;
}

let colorType;

function colorize () {
    let rgb=this.style.backgroundColor.match(/\d+/g);
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    let radio = document.getElementsByName("color-type");
    for (let i = 0; i<radio.length; i++){
        if (radio[i].checked) {
            colorType = radio[i].value;
        }
    }
    if (colorType === "black"){
        r = 0; g = 0; b = 0;
        this.style.backgroundColor = "rgb(0,0,0)";
    }

    else if (colorType === "random") {
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        this.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }

    else {
        r = r - 30; g = g - 30; b = b - 30;
        this.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }

}



