import 'webpack-hot-middleware/client?reload=true'
import '../style.less'

const [a, b] = [1, 2]

console.log(a, b)

function* foo() {
  let i = 0
  for (; i < 10; i++) {
    yield i
  }
}

console.log(foo())

console.log(1)