// var students = ['小明','小红','小花'] var scores = { 小明: 59, 小红: 99, 小花: 80 } students.sort(???)

// 请填写 ??? 使得 students 按分数的高低从大到小排列
var students = ['小明','小红','小花']
var scores = { 小明: 59, 小红: 99, 小花: 80 }

students.sort((x,y) => scores[y] - scores[x])

// 为什么这个不行?x是个‘小明’，scores.'小明'没有报错也是够可以的啊
// 这是两个undefined相减为NaN,这个y是对象的属性，而不是变量
// students.sort((x,y) => scores.y - scores.x)


// 2.
var a = [1,2,3,4,5,6,7,8,9]
// a.filter(???).map(???) // [4,16,36,64]
a.filter(value => value % 2 === 0).map(value => value*value)


// 3.
// var a = [1,2,3,4,5,6,7,8,9]
// a.reduce(???,???)

// a.filter(value => value % 2 !== 0).reduce((sum,n) => sum+n , 0)

a.reduce(
    function(arr,n) {
        if(n % 2 !== 0) {
            arr.push(n)
        }
        return arr
    },[]
).reduce((sum,n) => sum+n , 0)