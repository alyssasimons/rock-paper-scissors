function changeImage(){
    let randomNumber1 = Math.floor(Math.random() * 3);
    let randomNumber2 = Math.floor(Math.random() * 3);
    document.querySelector(".img1").setAttribute("src", "assets/" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "assets/" + randomNumber2 + ".png");


    if (randomNumber1 === 0 && randomNumber2 === 1) {
        document.querySelector("h2").innerHTML = "Player 1 wins! 🎉";
    } else if (randomNumber1 === 1 && randomNumber2 === 2) {
        document.querySelector("h2").innerHTML = "Player 1 wins! 🎉"; 
    } else if (randomNumber1 === 2 && randomNumber2 === 0) {
        document.querySelector("h2").innerHTML = "Player 1 wins! 🎉";
    } else if (randomNumber1 === 1 && randomNumber2 === 0){
        document.querySelector("h2").innerHTML = "Player 1 wins! 🎉";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h2").innerHTML = "Draw!"; 
    } else {
        document.querySelector("h2").innerHTML = "Player 2 wins! 🎉"; 
    }

    /*
    document.querySelector("h2").style.margin = "40px 0px 0px 0px";
    document.querySelector("h2").style.fontSize = "33px";
    */

}

const buttonClick = document.querySelector("button");
buttonClick.addEventListener("click", changeImage);

