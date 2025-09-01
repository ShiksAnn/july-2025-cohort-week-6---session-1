const button = document.getElementById('myButton');

button.onclick = function() {
    alert('Button Clicked - DOM Property Method');
};

let btn = document.getElementById('thirdButton');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    output.textContent = 'Button Clicked - addEventListener Method';
});

//different events
let input = document.getElementById('inputBox')

//keydown event
input.addEventListener('keydown', function(event){
    console.log("You pressed this key: ", event.key);
});

//focus event
input.addEventListener('focus', function(){
    input.style.backgroundColor = 'lightblue';
});

//blur event
input.addEventListener('blur', function(){
    input.style.backgroundColor = 'lightyellow';
});

function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}

//drag and drop
let dragItem = document.getElementById('dragItem');
let dropzone = document.getElementById('dropzone');

dragItem.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('id', event.target.id);
});

dropzone.addEventListener('dragover', function(event){
    event.preventDefault(); //allow drop
});

dropzone.addEventListener('drop', function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));
    dropzone.style.backgroundColor = 'lightgreen'; 
});