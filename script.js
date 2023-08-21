var controls = document.querySelectorAll('.control');
var myth = document.querySelectorAll('.myths');
var directionalControls = document.querySelectorAll('.slider-arrow-controls');
// for each click of a control, change slide
controls.forEach(c => c.addEventListener('click', ()=>{
    //get data target number
    var cAttr = c.getAttribute('data-target');
    // unhide data-myth that matches that number

    for(let i = 0; i < myth.length; i ++){
        if( myth[i] != cAttr){
            setAsInactive(i);
        }
    }
    setAsActive(cAttr);
}))

//arrow controls
directionalControls.forEach(d => d.addEventListener('click', ()=>{

    var direction = d.getAttribute('data-slider');
    var activeVal;
    var newVal;
    // get active value from data-target by checking for data active value
    for(let i = 0; i < controls.length; i ++){
        if(controls[i].getAttribute("data-active") == "true"){
            // gives an int of a number from 0 to max item count
            activeVal = controls[i].getAttribute("data-target");
        }
    }

    switch(direction){
        case "previous":
            if(activeVal <= 0){
                newVal = controls.length;
            }
            else {
                newVal = activeVal - 1;
            }
        break;
        case "next":
            if(activeVal >= controls.length){
                newVal = 0;
            }
            else {
                newVal = activeVal + 1;
            }
        break;
    }

    setAsInactive(activeVal);
    setAsActive(newVal);

    //if next, increease by 1, if greater than number of elements set to 0, if smaller than elements set to max items

    // if previous, decrease by 1, if smaller than number of elements set to 0, if greater than elements set to max items
    
}))

function setAsActive(cAttr){
    myth[cAttr].classList.remove('d-none');
    myth[cAttr].classList.add('d-flex');
    controls[cAttr].setAttribute('data-active', "true");
}

function setAsInactive(i){
    controls[i].setAttribute('data-active', "false");
    myth[i].classList.remove('d-flex');
    myth[i].classList.add('d-none');
}