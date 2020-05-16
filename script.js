const setSize = document.getElementById("chosenSize");
const reset = document.getElementById("resetBtn");
const colCount = document.getElementById("chooseCol")
const rowCount = document.getElementById("chooseRow")
let backgroundColor = "#ffffff";
let paintColor = "#000000";
let penPaint = true;
let cellSize = `${setSize.value}`;

//Cambio color de fondo
const backgroundPick = document.getElementById("backColor")
backgroundPick.addEventListener('change', function () {
    backgroundColor = backgroundPick.value;
    
})

// Cambio color del lapiz
const colorPick = document.getElementById("chosenColor")
colorPick.addEventListener('change', function () {
    paintColor = colorPick.value;
});

// Activa el lapiz o la goma, cambiando a true o false el valor penPaint
const goma = document.getElementById("gomaIcon")
const pen = document.getElementById("penIcon")
function setPen (value) {
    penPaint = value;
}


window.addEventListener("load", function () {
    
    const container = document.getElementById("containerGrid");
    
    function showGrid () {
        container.style.gridTemplateColumns = `repeat(${colCount.value} , 1fr)`;
        container.style.backgroundColor = backgroundColor;

        for (let i = 0 ; i < rowCount.value * colCount.value; i++){
            
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            
            newDiv.style.width = `${cellSize}px`;
            newDiv.style.height = `${cellSize}px`;
            
            newDiv.addEventListener('click', function() {
                if (penPaint) {
                    goma.style.opacity = 0.5;
                    pen.style.opacity = 1;
                    this.style.backgroundColor = paintColor;
                }else {
                    this.style.backgroundColor = backgroundColor;
                    goma.style.opacity = 1;
                    pen.style.opacity = 0.5;
                }
            })

            // Cambio el tamaño de las celdas, por cada cambio en el valor setSize.
            setSize.addEventListener('change', function () {
                cellSize = setSize.value;
                newDiv.style.width = `${cellSize}px`;
                newDiv.style.height = `${cellSize}px`;
            
            });

            container.appendChild(newDiv);
            
        };
  
    }
    
    
    // Elimina los elementos newDivs(hijos del container), 
    // para volver a dibujarlos segun los nuevos valores.
    reset.addEventListener('click', function () {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        showGrid();
        
    });
    
    //Inicio, se dibuja el grid base
    showGrid ();
    
})
