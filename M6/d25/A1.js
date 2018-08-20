window.jQuery = function () {
    // ……
}

window.$ = window.jQuery

// 参数值用了ES6语法——解构赋值
window.jQuery.ajax = function ({url,method,body,headers}) {
    // 请记住下面这行，请记住我……虽然再见必须说……请记住我……眼泪不要坠落……
    return new Promise(function(resolve,reject) {
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
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })  
}


myButton.addEventListener('click', (e) => {
    // 用有结构的数据作为参数，如对象，这样一来，你就不会忘记「之前写的这个值是什么含义了」
    window.jQuery.ajax({
            url: '/xxx',
            method: 'get',
            body: undefined,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'gg': 'good game'
            }
        }
    ).then(
        (text) => {
            console.log(text)
            return 'success'
        },
        (request) => {
            console.log(request)
            return 'fail'
        }
    ).then(
        (xxx) => {
            console.log(xxx)
        },
        (yyy) => {
            console.log(yyy)
        }
    )
})