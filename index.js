const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector('#reset-btn')
const msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let playerX = true;

const winPatterns = [
    [0,1,2],
    [2,5,8],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,4,5],
    [0,4,8],
    [2,4,6]
]

resetBtn.addEventListener('click', function(){
    playerX = true;
    enableBoxes()
    msgcontainer.classList.add('hide')
})
    

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        console.log('box clicked')
        if(playerX){
            box.textContent = 'X'
            playerX = false
        }else{
            box.textContent = 'O'
            playerX = true
        }
        decideWinner();
        disableBox(box);
    })
})


function disableBox(box) {
    box.disabled = true;
    box.style.pointerEvents = 'none';    
}


function disableBoxes(){
    for(let box of boxes){
        disableBox(box);
    }
}

function enableBoxes(){
    for(let box of boxes){
        box.style.pointerEvents = 'auto';
        box.textContent = ''
    }
}

function showWinner(winner){
    msg.textContent = `Congratulations, Winner is Player${winner} `
    msgcontainer.classList.remove('hide')
    disableBoxes()
}

function decideWinner() {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].textContent 
        let pos2 = boxes[pattern[1]].textContent
        let pos3 = boxes[pattern[2]].textContent
        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 === pos2 && pos2 === pos3) {
                console.log('winner',pos1)
                
                showWinner(pos1)         
            }
        }
    }
    
}
