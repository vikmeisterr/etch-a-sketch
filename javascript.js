let color = 'black';
function populateBoard(size){

    let board = document.querySelector(".board");
    let pixels = board.querySelectorAll('div')
    pixels.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for (let i = 0; i<amount; i++){
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = 'white';
        pixel.addEventListener('mouseover', colorPixel);
        board.insertAdjacentElement('beforeend',pixel);
    }
};

populateBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        populateBoard(input);
    }
    else{
        alert("Too many pixels");
    };
}

function colorPixel(){
    if (color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = color;
    };

};

function changeColor(choice){
    color = choice;
};

function resetBoard(){
    let board = document.querySelector(".board");
    let pixels = board.querySelectorAll('div')
    pixels.forEach((div) => div.style.backgroundColor='white');
}