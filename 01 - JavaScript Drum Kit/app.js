document.addEventListener('keydown', (e)=>{
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0; // 메모!
    audio.play();
    key.classList.add('playing');
})

function removeTransition(e){
    console.log(e);
    if (e.propertyName !== 'transform') return; //propertyName???
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 