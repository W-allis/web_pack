import { getCityList } from '@/api/list'

import './index.css'
import '../../../assets/css/button.less'
import $ from 'jquery'
import { Observable } from 'rxjs/Observable'

const [a, b] = [1, 2]

getCityList()
  .then(function (res) {
    console.log(res)
  })

function Ob() {
  this._isScal = false
  this.callbacks = []
  this.value = null
}

Ob.prototype = {
  throttleTime: function (number) {
    const that = this
    function _() {
      that._isScal = false
      setTimeout(function () {
        that._isScal = true
      }, number)
    }
    return this.pushCallback(_)
  },
  debounceTime: function (time) {
    function _() {

    }
  },
  notify: function () {
    console.log(this._isScal)
    if (this._isScal) {
      this.callbacks.forEach(callback => {
        callback(this.value)
      })
    }
  },
  pushCallback: function (callback) {
    this.callbacks.push(callback)
    return this
  },
  fromEvent: function (selector, type) {
    const that = this
    selector.addEventListener(type, function (e) {
      that.value = e
      that.notify()
    })
    return this
  },
  subscribe: function (callback) {
    this._isScal = true
    this.pushCallback(callback)
  }
}

// $('.throttle').click(function() {

// })

var ob = new Ob()

ob.fromEvent(document.querySelector('.throttle'), 'click')
  .throttleTime(2000)
  .subscribe(function (res) {
    console.log(res)
  })

// console.log('i am list')

const emptyObserver = {
  error: (error) => { throw error },
  complete: () => {},
  next: (value) => {}
}

class $Observable {
  constructor() {}

  lift() {

  }
}

$Observable.create = function(observerFn) {
  const realObserver = new $Subscriber(observerFn)
  return realObserver
}

class $Subscription {
  constructor() {}
}

class $Subscriber extends $Subscription {

  constructor() {
    super()
  }

  subscribe(observerOrNext, error, complete) {

  }

  next(value) {
    if (!this.isStopped && this.next) {
      try {
        this.destination.next(value)
      } catch (error) {
        this.unsubscribe()
        throw error
      }
    }
  }

  error(error) {
    if (!this.isStopped && this.next) {
      try {
        this.destination.error(error)
      } catch (otherError) {
        this.unsubscribe()
        throw otherError
      }
      this.unsubscribe()
    }
  }  

  complete() {
    if (!this.isStopped && this.next) {
      try {
        this.destination.complete()
      } catch (error) {
        this.unsubscribe()
        throw error
      }
      this.unsubscribe()
    }
  }

  unsubscribe() {
    this.isStopped = true
  }

}

const $1 = $Observable.create(function(observer) {
  observer.next(2)
})

console.log($1)

const $_1 = Observable.create(observer => {
  console.log(observer)
})

$_1.subscribe(console.log)
console.log($_1)