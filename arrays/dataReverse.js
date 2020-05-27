function dataReverse(data) {
  const res = [];
  for (let i = 0; i < data.length; i += 8) {
    res.unshift(...data.slice(i, i + 8));
  }
  return res;
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
// dataReverse(data1);
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1];
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0];
dataReverse(data3);