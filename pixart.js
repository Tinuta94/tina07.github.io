//function addNewButton() {
    //let newButton = document.createElement('#set-color')
    //newButton.innerText = 'Set Color'
//}
//function changeColor() {
    //let newColor = document.createElement('#brush')
    //document.querySelector('#set-color').addEventListener('click', (event) => {
        //event.preventDefault();
//};
function createNewElem() {
document.getElementByClassName('square')
for(let i = 0; i < 20; i++) {
    let newDiv = document.createElement('div')
    newDiv.className = 'more'
    document.querySelectorAll('body')[0].appendChild(newDiv)
}
}

unction getColor() {
    return document.querySelector('#colorfield').value
    }
    
    //function createNewColorElem(brush) {
        //let newColorElem = document.createElement('input')
        //return newColorElem;
    //}
    
    function addButton() {
        let newButton = document.createElement('button')
        newButton = 'Set Color'
        console.log(newButton)
    
    
        function createButtonItem() {
            let ButtonItem = document.createElement('.square')
            ButtonItem.innerHTML = .brush;
            console.log(ButtonItem)
    
         
     document.querySelector('set-color').appendChild(ButtonItem);
        }
        document.querySelector('button').addEventListener('click', addButton) => {
            event.preventDefault();
    
        }  
    
    
        
    
    //function addColorItem(event) {
        event.preventDefault()
        let itemColor = getColor();
        console.log(itemColor);
    
        let newElem = createNewColorElem(itemColor);
        console.log(createNewColorElem(itemColor));
        document.querySelector('div').appendChild(newElem);
    
        function newButton() {
         let thisButton = document.createElement('brush')
        }
    }
    document.querySelector('#form').addEventListener('set-color', addColorItem);
    
    
    function createButton() {
       let newButton = document.createElement()
        newButton.innerText = 'Set Color';
}


