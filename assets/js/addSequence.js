function add(arr) {
  const reducer = (acc, item ) => {
    return acc + item;
  }

  return arr.reduce(reducer, 0)
}

export default add;