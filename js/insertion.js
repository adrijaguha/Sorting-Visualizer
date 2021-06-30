//function to perform insertion sort
async function insertionSort() {
    arr = document.querySelectorAll('.bar')
    //changeColor(arr[0], "#06d6a0")
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i].style.height;
        let j = i - 1;
        changeColor(arr[i], "#ef476f")
        await wait(delay)
        while (j >= 0 && parseInt(arr[j].style.height) > parseInt(key)) {
            changeColor(arr[j], "#ffafcc")
            if (j + 1 !== i)
                changeColor(arr[j + 1], "#ffafcc")
            await wait(delay)
            swap(arr[j], arr[j + 1])
            changeColor(arr[j], "#c77dff")
            if (j + 1 !== i)
                changeColor(arr[j + 1], "#c77dff")
            j--;
        }
        changeColor(arr[i], "#c77dff")
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        changeColor(arr[i], "#06d6a0")
        await wait(delay)
    }
}

//event listener for insertion sort button
document.getElementById('insertion').addEventListener("click", async function () {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    await insertionSort();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});