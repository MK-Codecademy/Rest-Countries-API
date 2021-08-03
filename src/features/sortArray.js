const sortArray = (array, sortBy) => {
  const sortedArray = array.sort((a, b) => {
    const aNum = a[sortBy];
    const bNum = b[sortBy];

    if (aNum > bNum) {
      return -1;
    }
    if (aNum < bNum) {
      return 1;
    }
    return 0;
  })
  return sortedArray
}

export default sortArray