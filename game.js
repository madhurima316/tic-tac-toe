let m='X';
let c1,c2,c3,c4,c5,c6,c7,c8,c9 ;

score = JSON.parse(localStorage.getItem('score'));
document.querySelector('.score').innerHTML= `X:${score.X} O:${score.O} tie:${score.tie}`;
if(!score){
  score = {
    X: 0,
    O: 0,
    tie: 0
  };
  localStorage.setItem('score', JSON.stringify(score));
}

function update(a){
  document.querySelector(`.b${a}`).innerHTML = m;
  if (m==='X'){
    m='O';
    document.querySelector('.turn').innerHTML = `${m} turn`;
  }else if(m==='O'){
    m='X';
    document.querySelector('.turn').innerHTML = `${m} turn`;
  }

  c1= document.querySelector('.b1').innerHTML;
  c2= document.querySelector('.b2').innerHTML;
  c3= document.querySelector('.b3').innerHTML;
  c4= document.querySelector('.b4').innerHTML;
  c5= document.querySelector('.b5').innerHTML;
  c6= document.querySelector('.b6').innerHTML;
  c7= document.querySelector('.b7').innerHTML;
  c8= document.querySelector('.b8').innerHTML;
  c9= document.querySelector('.b9').innerHTML;
  winner();
}

let img= document.createElement('img');
img.src='acc/celebrate-gif-13.gif';
function winner(){
  score = JSON.parse(localStorage.getItem('score'));
  //horizontal possibilities
  if (c1===c2 && c2===c3 && c1){
    document.querySelector('.status').innerHTML = `${c1} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c1); 
  }
  else if (c4===c5 && c5===c6 && c4){
    document.querySelector('.status').innerHTML = `${c4} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c4);
  }
  else if (c7===c8 && c8===c9 && c7){
    document.querySelector('.status').innerHTML = `${c7} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c7);
  }
  //vertical possibilities
  else if (c1===c4 && c4===c7 && c1){
    document.querySelector('.status').innerHTML = `${c1} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c1);
  }
  else if (c2===c5 && c5===c8 && c2){
    document.querySelector('.status').innerHTML = `${c2} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c2);
  }
  else if (c3===c6 && c6===c9 && c3){
    document.querySelector('.status').innerHTML = `${c3} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c3);
  }
  //diagonal possibilities
  else if (c1===c5 && c5===c9 && c1){
    document.querySelector('.status').innerHTML = `${c1} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c1);
  }
  else if (c3===c5 && c5===c7 && c3){
    document.querySelector('.status').innerHTML = `${c3} WON`;
    document.getElementById("celeb").appendChild(img);
    document.querySelector('.turn').innerHTML = '';
    scoresheet(c3);
  }
  //checking for tie
  else if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9){
    document.querySelector('.status').innerHTML = `TIE!!`;
    document.querySelector('.turn').innerHTML = '';
    score.tie++ ;
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.score').innerHTML= `X:${score.X} O:${score.O} tie:${score.tie}`;
  }
}

function scoresheet(k){
  score = JSON.parse(localStorage.getItem('score'));
  if (k==='X'){
    score.X++;
  }else{
    score.O++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.score').innerHTML= `X:${score.X} O:${score.O} tie:${score.tie}`;
}
