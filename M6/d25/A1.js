window.jQuery = function () {
    // ……
}

window.$ = window.jQuery

// 参数值用了ES6语法——解构赋值
window.jQuery.ajax = function ({url,method,body,successFn,failFn,headers}) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    // 遍历头
    for(let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 成功就回调successFn呗！！！
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                // 失败就回调这个函数呗
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

// 这两个函数，用于这样的需求「请求成功后，需要执行两个函数」，于是直接扔到那个成功的回调函数里面去了
function f1(responseText) {}

function f2(responseText) {}

myButton.addEventListener('click', (e) => {
    // 用有结构的数据作为参数，如对象，这样一来，你就不会忘记「之前写的这个值是什么含义了」
    window.jQuery.ajax({
            url: '/xxx',
            method: 'get',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'gg': 'good game'
            },
            successFn: (x) => {
                f1.call(undefined, x)
                f2.call(undefined, x)
            },
            failFn: (x) => {
                console.log(x)
                console.log(x.status)
                console.log(x.responseText)
            }
        }
    )
})