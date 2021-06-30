//main function implementing quicksort
async function quickSort(arr, l, r) {
    if (l < r) {
        let pi = await partition(arr, l, r);
        await quickSort(arr, l, pi - 1);
        await quickSort(arr, pi + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < arr.length && r < arr.length) {
            changeColor(arr[l], "#06d6a0")
            changeColor(arr[r], "#06d6a0")
        }
    }
}

async function partition(arr, l, r) {
    let pivot = arr[r].style.height;
    changeColor(arr[r], "#ef476f");
    let i = l - 1;
    for (let j = l; j < r; j++) {
        changeColor(arr[j], "#E39145");
        await wait(delay);
        if (parseInt(arr[j].style.height) < parseInt(pivot)) {
            i++;
            swap(arr[i], arr[j]);
            changeColor(arr[i], "#09A6F3");
            await wait(delay);
        }
    }
    await wait(delay);
    swap(arr[i + 1], arr[r])
    if (r != (i + 1))
        changeColor(arr[r], "#ffafcc");
    changeColor(arr[i + 1], "#06d6a0");

    await wait(delay);

    for (let k = 0; k < arr.length; k++) {
        //console.log(arr[k].style.background)
        if (arr[k].style.background !== "rgb(6, 214, 160)")
            changeColor(arr[k], "#c77dff");
    }
    return i + 1;
}

// event listener for the quick sort button
document.getElementById('quick').addEventListener("click", async function () {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    let arr = document.querySelectorAll('.bar')
    await quickSort(arr, 0, arr.length - 1);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});