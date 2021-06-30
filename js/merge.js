//main function to sort the array
async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = Math.floor((l + r) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}

//function to merge the sub arrays
async function merge(arr, l, m, r) {
    let n1 = m - l + 1;//size of left array
    let n2 = r - m; // size of right array
    let left = [];
    let right = [];

    //copy data to temp arrays
    for (let i = 0; i < n1; i++) {
        //await wait(delay);
        left[i] = arr[l + i].style.height;
        changeColor(arr[l + i], "#ef8a8f")
    }
    for (let j = 0; j < n2; j++) {
        //await wait(delay);
        right[j] = arr[m + 1 + j].style.height;
        changeColor(arr[m + 1 + j], "#09A6F3")
    }
    await wait(delay);

    let k = l, i = 0, j = 0;
    while (i < n1 || j < n2) {
        if (j >= n2) {
            arr[k++].style.height = left[i++];
        }
        else if (i >= n1) {
            arr[k++].style.height = right[j++];
        }
        else if (parseInt(left[i]) <= parseInt(right[j])) {
            arr[k++].style.height = left[i++];
        }
        else {
            arr[k++].style.height = right[j++];
        }
        if ((n1 + n2) === arr.length) {
            changeColor(arr[k - 1], "#06d6a0")
        }
        else
            changeColor(arr[k - 1], "#ACF1DF");
        await wait(delay);
    }

}

// event listener for the merge sort button
document.getElementById('merge').addEventListener("click", async function () {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    let arr = document.querySelectorAll('.bar')
    await mergeSort(arr, 0, arr.length - 1);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});