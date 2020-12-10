var points = [];
var len = 0;
var count = 0;


function solution(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] == 1 && isNewPoint(i, j)) {
        len = 0;
        land(i, j, array);
        if (len > 1) {
          count++;
        }
      }
    }
  }

  alert(`კუნძულების რაოდენობა ${count}`);
}

function isNewPoint(i, j) {
  for (let k = 0; k < points.length; k++) {
    if (points[k].x == i && points[k].y == j) {
      return false;
    }
  }

  return true;
}

function land(i, j, array) {
  if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
    return 0;
  }

  if (array[i][j] == 0) {
    return 0;
  }
  if (array[i][j] == 1) {
    points.push({ x: i, y: j });

    len++;
  }
  let x1 = i + 1;
  let y1 = j;
  let x2 = i;
  let y2 = j + 1;
  let x3 = i + 1;
  let y3 = j + 1;
  let x4 = i + 1;
  let y4 = j - 1;
  land(x1, y1, array);
  land(x2, y2, array);
  land(x3, y3, array);
  land(x4, y4, array);
}

function getRandomArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
      array[i] = [];
    for (let j = 0; j < n; j++) {
        if(Math.floor(Math.random() * 10000000000)%2==0){
            array[i].push(0)
        }else{
            array[i].push(1);
        }

    }
  }

  return array;
}

solution(getRandomArray(4));