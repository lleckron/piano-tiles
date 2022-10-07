function playButtonClick() {
    removeTitleDivs();
    addSelectionDiv();
    addSelectionButtons();
}

function removeTitleDivs() {
    let header = document.getElementById("content-container");
    header.remove();
}

function addSelectionDiv() {
    const selectionContainer = document.createElement("div");
    selectionContainer.setAttribute("id","selection-container");
    document.body.appendChild(selectionContainer);
}

function addSelectionButtons() {
    const selectionContainer = document.getElementById("selection-container");
    for(let i = 0; i < 3; i++) {
        let newButtonDiv = document.createElement("div");
        newButtonDiv.setAttribute("id","selection-button-div");
        let newButton = document.createElement("button");
        newButton.setAttribute("id","selection-button");
        //newButton.setAttribute("onclick","");
        newButton.textContent = "Test";
        newButtonDiv.appendChild(newButton);
        selectionContainer.appendChild(newButtonDiv);
        document.body.appendChild(selectionContainer);
    }
}