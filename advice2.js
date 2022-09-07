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
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
      const adviceObj = data.slip;
      adviceSection.innerHTML= ` <p>${ adviceObj.advice} </p>`;
      adviceID.innerHTML = `<h6> ADVICE #${adviceObj.id}</h6>`;
      //  or adviceSection.innerText= ` ${ adviceObj.advice}`;
    }).catch(error=>{
      console.log(error);
    });
}



