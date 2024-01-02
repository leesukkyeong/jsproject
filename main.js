//랜덤 번호 지정
//유저가 번호 입력 그리고 go라는 버튼 누름
//만약 랜덤번호 맞추면, 맞췄습니다
//랜덤번호<유저번호 down
//> up
//reset 버튼 누르면 게임 리셋
//5번의 기회를 다쓰면 게임 끝
//1~100범위 안에서만 가능
//이미 입력한 숫자는 기회 줄이기 x

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById('reset-button');
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById('chance-area');
let history = [];

playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function(){
    userInput.value=''
});


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100);
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    if(userValue<1 || userValue>100){
        resultArea.textContent='1과 100사이 숫자를 입력해 주세요'
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = '이미 입력한 숫자입니다 다른 숫자를 입력해 주세요';
        return;
    }
    chances --;
    chancesArea.textContent = `남은기회: ${chances}번`;

    if(userValue < computerNum){
        resultArea.textContent = 'UP!'
    }else if (userValue > computerNum){
        resultArea.textContent = 'DOWN!!'
    }else{
        resultArea.textContent = '정답입니다!'
        gameOver=true
    }

    history.push(userValue)
    if (chances < 1){
        gameOver = true
    }
    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = '';
    pickRandomNum();
}
pickRandomNum();