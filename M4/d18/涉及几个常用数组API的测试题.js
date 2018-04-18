// var students = ['小明','小红','小花'] var scores = { 小明: 59, 小红: 99, 小花: 80 } students.sort(???)

// 请填写 ??? 使得 students 按分数的高低从大到小排列
var students = ['小明','小红','小花']
var scores = { 小明: 59, 小红: 99, 小花: 80 }

students.sort((x,y) => scores[y] - scores[x])

// 为什么这个不行?x是个‘小明’，scores.'小明'没有报错也是够可以的啊
// 这是两个undefined相减为NaN,这个y是对象的属性，而不是变量
// students.sort((x,y) => scores.y - scores.x)


// 2.
// 获取所有偶数
// 得到所有偶数的平方
var a = [1,2,3,4,5,6,7,8,9]
// a.filter(???).map(???) // [4,16,36,64]
a.filter(value => value % 2 === 0).map(value => value*value)


// 3.
// var a = [1,2,3,4,5,6,7,8,9]
// a.reduce(???,???)
// 计算所有奇数的和

// a.filter(value => value % 2 !== 0).reduce((sum,n) => sum+n , 0)

a.reduce(
    function(arr,n) {
        if(n % 2 !== 0) {
            arr.push(n)
        }
        return arr
    },[]
).reduce((sum,n) => sum+n , 0)
// 根据第二个参数判断返回的是什么，如第一个是数组，那么它就可以数组的API
// 第二个reduce的第二个参数是0，那么最终的返回值就是一个数值了

// 这道题只用两个参数真得可以搞定吗？
// 真的可以呀！关键在于，reduce的第一个参数函数，可有4个参数哦
// 真的很难受啊！做这道题思考了20min
// 能想出来，还是芳芳的那句话「在不懂的情况下，搞定它」
// 还有一句话「先写，错了就换另外一条路」
//思路： 根据arr这个参数表示 调用 reduce()方法的数组，
        // 然后根据减掉偶数的值的方向去思考

a.reduce(function (sum,n,index,arr) {
    if(sum===0) {
        let ar = arr.filter(value => value % 2 === 0)
        let sum1 = ar.reduce((sum1,n1) => sum1+n1,0 )
        return sum+n-sum1
    } else {
        return sum+n
    }
},0)