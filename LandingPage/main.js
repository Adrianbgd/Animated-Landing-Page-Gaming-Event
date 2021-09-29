document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline({
        
    })
    .add({
        targets: '#cover',
        left: ['-110%', '110%'],
        easing: 'easeInOutQuad',
        complete: (anim)=> document.getElementById('cover').style.display = 'none'
    })
    .add({
        targets: 'nav',
        translateY: [10, 0],
        
        opacity: [0, 1],
        easing: 'linear'
    })
    .add({
        targets: '.background',
        scale: [0, 1.1]
    }, '-=600')
    .add({
        targets: '.name',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad'
    }, '-=600')
    .add({
        targets: '.details',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad'
    }, '-=600');
   
})




















