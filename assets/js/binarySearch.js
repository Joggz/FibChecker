function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1
  let text
  while (start <= end) {
    let text

    let mid = Math.floor((start + end) / 2)

    if (item === arr[mid]) {
      // console.log(arr[mid], item)
      text = `Your input ${item} is a correct number in the sequence.`
      console.log('t?????????', text)
      return text
    }

    if (item > arr[mid]) {
      start = mid + 1
    }

    if (item < arr[mid]) {
      end = mid - 1
    }

    else {
      text = `${item} is a wrong number in the sequence`

    }
  }
  return text = `${item} is a wrong number in the sequence`
}

export default binarySearch