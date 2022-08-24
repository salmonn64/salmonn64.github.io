function showMail(){
    document.getElementById("mail").style.display='block';
    var audioEffect = new Audio("resources/fairy.wav");
    audioEffect.volume = .2;
    audioEffect.play();
}
