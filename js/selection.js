//function to perform selection sort
async function selectionSort() {
    arr = document.querySelectorAll('.bar')
    for (let i = 0; i < arr.length - 1; i++) {
        let minpos = i;
        changeColor(arr[i], "#ef476f")

        for (let j = i + 1; j < arr.length; j++) {
            changeColor(arr[j], "#ffafcc")
            await wait(delay);
            if (parseInt(arr[j].style.height) < parseInt(arr[minpos].style.height)) {
                if (minpos != i)
                    changeColor(arr[minpos], "#c77dff")
                changeColor(arr[j], "#ef476f")
                minpos = j;
            }
            else
                changeColor(arr[j], "#c77dff")
        }
        //await wait(delay)
        swap(arr[minpos], arr[i])
        changeColor(arr[i], "#06d6a0")
    }
    changeColor(arr[arr.length - 1], "#06d6a0")
}

//event listener for the selection sort button
document.getElementById('selection').addEventListener("click", async function () {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    await selectionSort();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});
