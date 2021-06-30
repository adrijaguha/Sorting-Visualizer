// function to perform bubble sort
async function bubbleSort() {
    arr = document.querySelectorAll('.bar')
    //console.log(arr.length)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //change colour of the bars which will be compared
            changeColor(arr[j], "#ef476f")
            changeColor(arr[j + 1], "#ef476f")
            await wait(delay);
            if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
                // await wait(delay);
                swap(arr[j], arr[j + 1]);
            }

            changeColor(arr[j], "#c77dff")
            changeColor(arr[j + 1], "#c77dff")
        }
        changeColor(arr[arr.length - i - 1], "#06d6a0")
    }
    changeColor(arr[0], "#06d6a0")
}

// event listener for the bubble sort button
document.getElementById('bubble').addEventListener("click", async function () {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    await bubbleSort();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});