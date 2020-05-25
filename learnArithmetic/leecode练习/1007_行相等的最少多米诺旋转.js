/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  let leftTime = 0;
  let rightTime = 0;
  let tagLeft = 0
  let tagRight = 0
  let myA = JSON.parse(JSON.stringify(A))
  let myB = JSON.parse(JSON.stringify(B))
  for (var i = 0; i < myA.length-1; i++) {
    if (myA[i + 1] != myA[i]) {
      if (B[i + 1] != myA[i]) {
        tagLeft = -1
      }
      myA[i+1] = B[i+1]
      leftTime++
    }
    if (myB[i + 1] != myB[i]) {
      if (A[i + 1] != myB[i]) {
        tagRight = -1
      }
      myB[i+1] = A[i+1]
      rightTime++
    }
  }
  console.log(leftTime,rightTime,tagLeft,tagRight)
  if(!tagLeft && !tagRight ) {
    console.log(1)
    return leftTime > rightTime ? rightTime: leftTime
  }
  if(!tagLeft && leftTime || leftTime === 0) {
    console.log(2)
    return leftTime
  }
  if(!tagRight && rightTime || rightTime === 0) {
    return rightTime
  }
  return -1
};
console.log(minDominoRotations([1,1,1,2,1,1,1,2,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,2,1,1,2,1,2,1,1,2,2,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,2,1,1,1,1,2,2,2,2,1,2,1,1,2,1,1,2,1,2,2,1,1,2,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,2,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,2,2,2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,1,1,1,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,2,1,1,2,2,1,1,1,2,1,2,2,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,1,2,2,1,1,2,2,2,1,1,1,1,1,2,2,2,1,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2,1,1,1,2,1,2,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,2,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,1,1,2,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,2,1,1,1,1,1,2,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,1,1,1,1,2,1,1,1,2,1,2,1,2,2,1,1,2,2,1,1,1,1,2,2,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,1,1,2,2,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,1,1,2,2,2,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,1,1,1,2,2,1,2,1,1,2,1,1,1,1,1,1,2,2,2,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,1,1,2,1,1,2,2,1,1,2,1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,2,2,1,1,1,1,1,2,1,2,1,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,2,1,2,1,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,2,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,2,1,1,2,1,2,1,2,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,2,1,1,2,1,2,1,2,1,2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,1,2,1,1,2,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,2,2,1,2,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,1,1,2,1,2,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,2,2,2,2,1,2,2,1,2,1,1,2,2,2,1,2,1,1,2,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,1,2,1,1,1,2,1,2,2,1,2,2,1,1,2,2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,2,1,2,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,2,1,2,2,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,2,2,2,1,2,1,1,1,2,1,2,2,1,1,2,1,2,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,2,1,1,2,1,1,1,1,1,2,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,2,2,1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,2,1,2,2,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,2,1,2,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,1,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,2,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,2,2,1,2,1,1,1,1,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,2,2,2,1,1,2,1,1,1,1,1,2,1,2,2,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,2,1,2,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2,2,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,2,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,2,2,2,1,2,1,1,2,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,1,2,1,2,2,2,2,1,1,1,1,2,1,1,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,2,1,2,1,2,1,1,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,1,1,2,2,1,1,1,2,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,2,2,1,2,1,2,1,1,1,2,1,1,1,2,1,2,1,2,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,1,2,2,1,1,1,2,1,1,1,1,1,2,2,2,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,2,1,1,1,2,2,2,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,2,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,2,1,1,2,1,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,2,1,1,2,1,1,1,1,2,1,2,2,1,2,1,1,1,2,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,2,2,1,1,2,2,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1]
,[2,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,2,1,1,1,2,1,2,1,2,1,2,2,1,1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,2,1,1,1,2,1,1,2,2,2,1,1,1,2,2,1,2,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,2,2,1,2,2,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,2,1,2,1,1,1,2,2,1,1,1,1,1,1,1,2,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2,2,1,1,1,2,2,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,2,1,2,1,2,1,2,2,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,1,1,2,2,1,2,1,1,2,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,1,1,2,1,1,2,2,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,2,1,2,1,1,2,1,2,2,1,1,2,1,2,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,2,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,1,1,1,2,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,2,1,2,1,1,1,2,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,1,1,1,1,2,1,1,1,2,1,2,1,2,1,2,2,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,2,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,2,2,2,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,2,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1,2,2,2,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,2,1,1,2,1,1,1,2,2,2,1,2,2,1,1,2,2,1,1,1,1,1,2,1,1,1,1,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,1,1,2,2,2,1,1,1,2,1,1,1,2,2,1,1,2,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,2,1,1,1,2,1,2,2,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,2,1,1,1,2,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,2,2,1,1,1,1,1,2,2,2,1,1,1,1,2,1,2,1,2,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,2,2,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,2,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,2,1,2,1,1,1,2,1,1,1,2,1,2,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,2,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,2,1,2,2,2,1,1,1,1,1,2,1,1,1,1,2,2,1,1,2,2,1,1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,2,1,2,1,2,2,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,2,1,2,1,1,1,2,2,1,1,1,1,2,1,2,2,1,1,1,2,1,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,2,1,2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,2,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,2,2,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,2,2,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,2,2,2,1,2,1,1,1,1,1,2,1,2,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,2,2,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,2,1,1,2,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,2,2,1,1,2,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,2,1,2,1,1,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,1,1,1,1,2,1,2,2,1,2,1,2,1,1,1,1,1,2,2,1,2,2,2,1,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,2,1,2,1,1,1,1,2,1,2,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,2,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,1,1,1,2,2,1,2,1,1,2,2,2,2,1,1,2,1,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,2,2,2,2,1,1,1,1,1,2,1,2,1,2,1,1,1,2,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,2,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,2,1,1,2,2,2,2,1,2,1,1,2,1,1,2,1,2,2,2,1,1,1,1,2,2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,1,2,2,1,2,1,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,2,2,1,1,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1,1,2,1,2,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,2,2,2,1,1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,2,1,1,1,2,2,2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,2,1,1,1,2,2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1,1,1,2,2,2,1,1,2,2,1,1,2,1,1,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,2,2,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,1,2,1,1,1,1,1,1,1,2,2,1,1,1,1,2,2,2,1,1,1,1,2,1,1,1,2,1,2,2,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,2,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,2,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1]))