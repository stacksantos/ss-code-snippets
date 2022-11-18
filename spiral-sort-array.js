const spiralSortArray = (arr) => {
    const sortedArray = [];
    while (arr.length) {
      sortedArray.push(...arr.shift());
      for (let i = 0; i < arr.length; i++) {
        sortedArray.push(arr[i].pop());
      }
      sortedArray.push(...(arr.pop() || []).reverse());
      for (let i = arr.length - 1; i >= 0; i--) {
        sortedArray.push(arr[i].shift());
      }
    }
    return sortedArray;
  };