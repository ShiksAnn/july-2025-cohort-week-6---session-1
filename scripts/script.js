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
