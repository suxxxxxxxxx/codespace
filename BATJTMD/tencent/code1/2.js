//hackthon
function createPhoneNumber(numbers){
    var format = '(xxx) xxx-xxxx';
    for (let i = 0;i <numbers.length; i++ ){
        format = format.replace('x',numbers[i])//考点常有
    }
    return format
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
