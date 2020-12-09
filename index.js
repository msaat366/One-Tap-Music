window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394' ,
        '#d36060' ,
        '#c060d3' , 
        '#d3d160' ,
        '#6860d3' ,
        '#60b2d3' 
    ];
    const keys = [
        'KeyA' ,
        'KeyS' ,
        'KeyD' ,
        'KeyJ' , 
        'KeyK' ,
        'KeyL'
    ];
    
    pads.forEach((pad , index) => {
        pad.addEventListener('click', function(){
            
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
        window.addEventListener('keydown' , function(e){
            
            if(e.code == keys[index])
            {
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubbles(index);
                console.log(e.code);
            }
        });
    });
    
    const createBubbles =  index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend' , function(){
            visual.removeChild(this);
        })
    };
});

const fullscreen = document.querySelector('.fullscreen');

fullscreen.addEventListener('click' , () =>{
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
        document.getElementById('fullscreenIcon').src = './svg/compress-arrows-alt-solid.svg';
    }
    else{ 
        document.exitFullscreen();
        document.getElementById('fullscreenIcon').src = './svg/fullscreen.svg';
    }
});