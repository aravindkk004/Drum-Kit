for(var i=0; i<document.querySelectorAll('.drum').length; i++){
    console.log(i)
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var valueof = this.innerHTML;
        makeSound(valueof);
        btnAnimation(valueof);
    })
}  

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
})

function makeSound(key) {
    switch(key){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("click a valid button...")
    }
}

function btnAnimation(currentKey){
    var keyElement = document.querySelector("."+currentKey);
    keyElement.classList.add("pressed");

    setTimeout(function(){
        keyElement.classList.remove("pressed");
    }, 200)
}
