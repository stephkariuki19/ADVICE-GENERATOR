const adviceSection = document.querySelector(".advice");
const myDice = document.querySelector(".dice-background");
const adviceID = document.querySelector(".topic");

myDice.addEventListener('click',()=>{
  getAdvice();
});
window.onload = () =>{
  getAdvice();
}

function getAdvice(){
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>{
      const adviceObj = data.quote;
      adviceSection.innerHTML= ` <p>${ adviceObj} </p>`;
      adviceID.innerHTML = `<h6> KANYE WEST SAYS</h6>`;
      //  or adviceSection.innerText= ` ${ adviceObj.advice}`;
    }).catch(error=>{
      console.log(error);
    });
}



