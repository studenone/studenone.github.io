// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world'

// let myVariable = 'bob'
// myVariable = 'mi'
// // js的变量可以存储不同数据类型
// myVariable = 10
// myVariable = true
// myVariable = [10, 20, 30]
// myVariable = document.querySelector('h2')
// /**多行注释 */
// // 基本的条件语句

// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//   alert('我喜欢冰淇淋')
// } else {
//   alert('巧克力才是我的最爱')
// }

// //函数
// function multiply(num1, num2) {
//   let result = num1 * num2
//   return result
// }

// //事件处理器
// document.querySelector('html').addEventListener('click', () => {
//   alert('别戳我，怕疼啊')
// })
const myImage = document.querySelector('img')
console.log(myImage)
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/logo.png') {
    myImage.setAttribute('src', 'images/logo2.jpeg')
  } else {
    myImage.setAttribute('src', 'images/logo.png')
  }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
  const myName = prompt('Please enter your name')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `欢迎大佬光临,${myName}`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `酷酷的大佬,${storedName}`
}

myButton.onclick = () => {
  setUserName()
}
