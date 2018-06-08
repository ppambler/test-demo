function foo(){
    throw new Error('Oops!哎哟')
}

function bar() {
    foo()
}

function baz() {
    bar()
}

baz()