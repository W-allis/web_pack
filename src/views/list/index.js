import { getCityList } from '@/api/list'

import './index.css'
import '../../../assets/css/button.less'
import $ from 'jquery'

console.log('i am list html')

const [a, b] = [1, 2]

getCityList()
.then(function(res) {
  console.log(res)
})

function Ob() {
  this._isScal = false
  this.callbacks = []
  this.value = null
}

Ob.prototype = {
  throttleTime: function(number) {
    const that = this
    function _() {
      that._isScal = false
      setTimeout(function() {
        that._isScal = true
      }, number) 
    }
    return this.pushCallback(_)   
  },
  debounceTime: function(time) {
    function _() {

    }
  },
  notify: function() {
    console.log(this._isScal)
    if (this._isScal) {
      this.callbacks.forEach(callback => {
        callback(this.value)
      })
    }
  },
  pushCallback: function(callback) {
    this.callbacks.push(callback)
    return this
  },
  fromEvent: function(selector, type) {
    const that = this
    selector.addEventListener(type, function(e) {
      that.value = e
      that.notify()
    })
    return this
  },
  subscribe: function(callback) {
    this._isScal = true
    this.pushCallback(callback)
  }
}

// $('.throttle').click(function() {
  
// })

var ob = new Ob()

ob.fromEvent(document.querySelector('.throttle'), 'click')
.throttleTime(2000)
.subscribe(function(res) {
  console.log(res)
})

// console.log('i am list')