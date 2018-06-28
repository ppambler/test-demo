!function() {
    // 测试来自A模块定义的变量
    var person = window.person
    console.log('我是模块B的结果')
    console.log(person)
}.call()

// 闭包测试
console.log('闭包测试：')
!function() {
    var newAge = window.frankGrowUp()
    console.log(newAge)
}.call()