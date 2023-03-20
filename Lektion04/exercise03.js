//select single element
console.log(document.getElementById('my-form'))
console.log(document.querySelector("h2")) //works when type class name ".classname"

//select multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))


const ul = document.querySelector('.items')

//ul.remove()
//ul.lastElementChild.remove()

ul.firstElementChild.textContent= 'hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<hi>Hello</h1>'

const btn = document.querySelector('.btn')
btn.style.background ='red'