var radioControl = document.querySelectorAll('.radio-control');
var slides = document.querySelectorAll('.item-slides');
var directionalControls = document.querySelectorAll('.slider-arrow-controls');
radioControl.forEach(c => c.addEventListener('click', ()=>{
    var controlAttribute = c.getAttribute('data-target');
    for(let i = 0; i < slides.length; i ++){
        if( slides[i] != controlAttribute){
            setAsInactive(i);
        }
    }
    setAsActive(controlAttribute);
}));
directionalControls.forEach(d => d.addEventListener('click', ()=>{
    var direction = d.getAttribute('data-slider');
    var activeVal;
    var newVal;
    for(let i = 0; i < radioControl.length; i ++){
        if(radioControl[i].getAttribute("data-active") == "true"){
            activeVal = radioControl[i].getAttribute("data-target");
            setAsInactive(activeVal);
        }
    }
    var maxItems = radioControl.length - 1;
    switch(direction){
        case "previous":
            if(activeVal <= 0){
                newVal = maxItems;
            }
            else {
                activeVal--;
                newVal = activeVal;
            }
        break;
        case "next":
            if(activeVal >= maxItems){
                newVal = 0;
            }
            else {
                activeVal++;
                newVal = activeVal;
            }
        break;
    }
    setAsActive(newVal);
}));
function setAsActive(i){
    slides[i].classList.remove('d-none');
    slides[i].classList.add('d-flex');
    radioControl[i].setAttribute('data-active', "true");
}
function setAsInactive(x){
    radioControl[x].setAttribute('data-active', "false");
    slides[x].classList.remove('d-flex');
    slides[x].classList.add('d-none');
}