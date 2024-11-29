function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const stack = [[0, array.length-1]];
    while (stack.length > 0) {
        const [beg, end] = stack.pop();
        if (beg >= end) {
            continue;
        }
        const pivotPoint = seperate(array, beg, end);
        stack.push([beg, pivotPoint-1]);
        stack.push([pivotPoint+1, end]);
    }
    return array;
}

function seperate(array, beg, end) {
    const pivotNum = array[end];
    let i = beg-1;
    for (let j = beg; j < end; j++) {
        if (array[j] <= pivotNum) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i+1], array[end]] = [array[end], array[i+1]];
    return i+1;
}
