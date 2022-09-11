const drumKeys = document.querySelectorAll(".key");
// console.log(drumKeys);


function drumPlay(newSound){
    // console.log(newSound);
    new Audio(newSound).play();
}


drumKeys.forEach((drumKey, i) =>{
    const number = i<5 ? (i+1): 'no song found';
    const newSound = "sounds/mixkit" + number + ".wav";
    console.log(newSound);
    drumKey.addEventListener('click', () => drumPlay(newSound));
    // console.log(drumKey);
})