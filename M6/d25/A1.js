window.jQuery = function() {
    // ……
}

window.$ = window.jQuery

window.jQuery.ajax = function(url,method,body,successFn,failFn) {
    let request = new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300){
                // 成功就回调successFn呗！！！
                successFn.call(undefined,request.responseText)
            } else if(request.status >= 400) {
                // 失败就回调这个函数呗
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body)
}

myButton.addEventListener('click', (e)=> {
    window.jQuery.ajax(
        '/xxx',
        'POST',
        'a=1&b=2',
        (responseText) => {console.log(1)},
        (request) => {console.log(2)}
    )
})
