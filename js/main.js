//enable 'New Array' button
function enableNewArrayBtn() {
    document.getElementById('newArray').disabled = false;
}

//disable 'New Array' button
function disableNewArrayBtn() {
    document.getElementById('newArray').disabled = true;
}

//enable all sorting buttons
function enableSortingBtn() {
    document.getElementById('bubble').disabled = false;
    document.getElementById('selection').disabled = false;
    document.getElementById('insertion').disabled = false;
    document.getElementById('quick').disabled = false;
    document.getElementById('merge').disabled = false;
}

//disable all sorting buttons
function disableSortingBtn() {
    document.getElementById('bubble').disabled = true;
    document.getElementById('selection').disabled = true;
    document.getElementById('insertion').disabled = true;
    document.getElementById('quick').disabled = true;
    document.getElementById('merge').disabled = true;
}

//enable size slider
function enableSizeSlider() {
    document.getElementById('arr_size').disabled = false;
}

//disable size slider
function disableSizeSlider() {
    document.getElementById('arr_size').disabled = true;
}

//swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

//fuction to change colour of bars
function changeColor(el, color) {
    el.style.background = color;
}

//function that helps to change speed during sorting
function wait(time) {
    return new Promise(resolve => setTimeout(() => { resolve() }, time));
}

let speed = document.getElementById('sort_speed'); //get speed slider element

let delay = 320 - speed.value; //set default delay value

//event listener to update delay depending slider value
speed.addEventListener('input', function () {
    delay = 320 - speed.value; //update delay value
})

let array = []; //array to store randomly generated numbers

//function to create the array of bars
function addBars(n = 20) {
    //create array of random numbers (1-100)
    for (let i = 0; i < n; i++) {
        array[i] = (Math.floor(Math.random() * 100) + 1);
    }

    //remove all the previous bars
    barsdiv = document.getElementById('bars');
    barsdiv.innerHTML = "";

    //adding new bars
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add("bar");
        div.style.height = `${array[i] * 5}px`;
        div.style.display = 'inline-block';
        div.style.marginLeft = '2px'
        div.style.width = '2%';
        changeColor(div, '#c77dff');
        // div.innerHTML = arr[i - 1] * 5
        // div.style.fontSize = 'xx-small'
        barsdiv.append(div);
    }
}

let arraySize = document.getElementById('arr_size'); //selecting the slider

addBars(arraySize.value);  //add bars when site is first opened

//event listener to update array size
arraySize.addEventListener('input', function () {
    addBars(arraySize.value);
})

document.getElementById('newArray').addEventListener("click", async function () {
    enableSortingBtn();
    enableSizeSlider();
    addBars(arraySize.value);
})





