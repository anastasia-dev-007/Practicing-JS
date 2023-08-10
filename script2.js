// A function findPairsWithSum that takes an array arr and a target sum k as parameters. It then attempts to find pairs of elements from the array that add up to the given target sum k.

const findPairsWithSum = (arr, k) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === k) {
          pairs.push([arr[i],arr[j]]);
        }
      }
    }
    return pairs.length > 0 ? pairs : null;
  }
  
  console.log(findPairsWithSum([8,-5, -2, 4, 2, 10, -3, 2 ,3, 4, 1,0], 5));