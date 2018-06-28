// window方式：
console.log('window方式：')
!function(){
    // 存了两个一样的地址——匿名对象
    var person = window.person = {
        name: 'frank'
    }
    console.log('我是模块A的结果')
    console.log(person)
    console.log(window.person)
}.call()
// 我这里做测试就写了两个匿名函数，一般都是写一个匿名函数的, 在一个模块里
// 闭包方式
// console.log('闭包方式：')
!function(){
    // 让模块A掌控，这个对象，其它模块并不知道这个对象的信息
    // 于是只需要暴露函数即可
    // 这样就不会让其它模块搞坏这个person,如换个名字，-1岁……
    var person = {
        name: 'frank',
        age: 18
    }
    window.frankGrowUp = function() {
        // 这段demo的作用域是在这个函数里面的，其它模块可以间接访问这个函数
        // 通过window。frankGrowUp这个函数
        person.age += 1
        return person.age
    }
    // 哪里体现了闭包？？？
    // person这个变量+这个匿名函数就是闭包，毕竟匿名函数用了它外面的变量
    // 闭包的作用：
    // 1.对数据隐藏细节，如不告诉你这个person多少岁，但是你可以让它长一岁
    // 或者说，我不告诉你有几条命，但是你可以长一命
    // 2.访问控制，如目前你并不能访问到这个person的name和age，在这里对name和age都隐藏了
    // 这里的age你可以间接控制，但你不能直接控制，毕竟你对它减一岁怎么搞？返老返童？？
    // 你只能让它长一岁，这就是闭包的用法
    // 闭包很简单：函数访问了外面的变量，那么这个函数+变量就构成了闭包，至于你对这个函数做了引入什么的，如这个
    // window.frankGrowUp，这就是另外的事儿了，反正这个函数可以操作外面的变量
    // 还有一点很重要的就是，如果没有立即执行函数的话，那么这个闭包也就毫无意义了
    // 为什么？这个person可以被其它模块访问了啊！这个立即执行函数恰恰起到隔离作用域的功能  
}.call()

// 优化闭包
// 不使用全局变量,而是局部变量
// accessor(访问器)保存返回了一个匿名函数的函数:
// *******************
var accessor = function() {
    var person = {
        name: 'frank',
        age: 18
    }
    return function() {
        person.age += 1
        return person.age
    }
}
var growUp = accessor.call()
// *************************
// 这个***这样包裹住的就是立即执行函数，为什么？这里声明了一个函数，然后立即执行了
// 所以闭包永远要跟立即执行函数一起用
// 毕竟没有立即执行函数的话，就没有局部变量啊，它就变成了全局变量了啊！
// 你想访问我这个变量？可以呀！我暴露了一个方法，你可以调用这个访问器就可以改我的数据了
// 不过你只能按我的规则来更改数据
// 只所以返回一个函数，那是因为这是外界访问的唯一桥梁，你必须告诉它们
growUp.call()