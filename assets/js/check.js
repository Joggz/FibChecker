function check(fibarr, generatedNumber) {
  const getLastTwo = [...fibarr].slice(-2).reduce((acc, cum) => acc + cum)
  if (getLastTwo === generatedNumber) {
    fibarr.push(generatedNumber)

    return fibarr.toString(' ')
  } else return `Your input ${generatedNumber} is not the next number in the sequence`

}

export default check
