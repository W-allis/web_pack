import '../style.less'
// import $ from 'jquery'

const [a, b] = [1, 2]

// console.log($)

console.log(a, b)

function* foo() {
  let i = 0
  for (; i < 10; i++) {
    yield i
  }
}

console.log(foo())

console.log(1)