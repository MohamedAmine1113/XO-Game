let title = document.querySelector('.title');
let squares = [];
let turn = 'x';
function pro(num1,num2,num3){
    title.innerHTML = `${squares[num1]} Winner`
    document.getElementById('item'+num1).style.background = '#131112';
    document.getElementById('item'+num2).style.background = '#131112';
    document.getElementById('item'+num3).style.background = '#131112';

    setInterval(()=>{
        title.innerHTML += '.';
    },1000)
    setTimeout(()=>{
        location.reload();
    },4000)
}
function winner(){
    for(let i = 1 ; i < 10 ; i++){
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2]== squares[3] && squares[2] != ""){

        pro(1,2,3);

    }else if(squares[4] == squares[5] && squares[5]== squares[6] && squares[4] != ""){

        pro(4,5,6);

    }else if(squares[7] == squares[8] && squares[8]== squares[9] && squares[7] != ""){

        pro(7,8,9);

    }



    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ""){

        pro(1,4,7);

    }else if(squares[2] == squares[5] && squares[5]== squares[8] && squares[2] != ""){

        pro(2,5,8);

    }else if(squares[3] == squares[6] && squares[6]== squares[9] && squares[3] != ""){

        pro(3,6,9);

    }


    if(squares[1] == squares[5] && squares[5]== squares[9] && squares[1] != ""){
        pro(1,5,9);
    }else if(squares[3] == squares[5] && squares[5]== squares[7] && squares[3] != ""){
        pro(3,5,7);
    }
    
}

function game(id){


    let element = document.getElementById(id);

    if (turn === 'x' && element.innerHTML == ''){
        element.innerHTML = "X" ;
        title.innerHTML = "O"
        turn = 'o';
    }else if (turn === 'o' && element.innerHTML == ''){
        element.innerHTML = "O" ;
        title.innerHTML = "X";
        turn = 'x';
    }

    winner();
}

