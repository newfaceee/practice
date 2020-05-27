function rotateImage(a) {
  const rotatedImage = [];
  for (let i = 0; i < a.length; i++) {
    const res = [];
    for (let j = a.length - 1; j >= 0; j--) {
      res.push(a[j][i]);
    }
    rotatedImage.push(res);
  }
  return rotatedImage;
}
rotateImage([[1,2,3], 
  [4,5,6], 
  [7,8,9]]);
