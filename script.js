// số nhỏ nhất trong arr1 < số nhỏ nhất của arr 2
// số lớn nhất trong arr2 < số lớn nhất của arr2
// kết quả phải in ra true or false


var arr1 = [1, 4, 5];
var arr2 = [ 2, 4, 7];

const minArr1 = Math.min(...arr1);
const maxArr1 = Math.max(...arr1);

const minArr2 = Math.min(...arr2);
const maxArr2 = Math.max(...arr2);

// console.log('minArr1', minArr1);
// console.log('minArr2', minArr2);
// console.log('maxArr1', maxArr1);
// console.log('maxArr2', maxArr2);

if(minArr1 < minArr2){
    console.log('min của mảng 1 nhỏ hơn min của mảng 2');
}else {
    console.log('sai yêu cầu đề bài');
}

if(maxArr1 < maxArr2){
    console.log('max của mảng 1 nhỏ hơn max của mảng 2');
}else {
    console.log('sai yêu cầu đề bài');
}

var child = arr1.every(function(value, index, array){
    return arr2.some(function(value, index, array){
        return value.arr1 === value.arr2;
    }, 0)
});

console.log(child);