var controls = document.querySelectorAll('.control');
var myth = document.querySelectorAll('.myths');

// for each click of a control, change slide
controls.forEach(c => c.addEventListener('click', ()=>{
    //get data target number
    var cAttr = c.getAttribute('data-target');
    // unhide data-myth that matches that number
    // if the attribute tartget is the same as control
    for(let i = 0; i < myth.length; i ++){
        if(myth[i].getAttribute = cAttr){
            myth[i].classList.remove('d-none');
            myth[i].classList.add('d-flex');
            controls[i].setAttribute('data-active', "true");
        }else if( myth[i] != cAttr){
            controls[i].setAttribute('data-active', "false");
            myth[i].classList.remove('d-flex');
            myth[i].classList.add('d-none');
        }
    }
    
}))
