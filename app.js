let body = document.body
const btn1 = document.querySelector('.btn1')
const btn = document.getElementById('btn')
const section = document.querySelector('.section')
const section1 = document.querySelector('.ins')

let arrColor = ['red', 'purple', 'pink', 'red', 'blue', 'yellow', 'gold', 'rainbow']


const timer = () => setInterval (()=> {
    let random = Math.floor(Math.random() * arrColor.length)
    body.style.backgroundColor = arrColor[random]
    section.style.display = 'None'
    section1.style.display = 'None'
}, 100)




//     setTimeout(() => {
//         section.style.display = 'None'
//         section1.style.display = 'None'

//       }, "1000");    
// }

const stop = () => {
    location.reload()
}



btn1.addEventListener('click', timer)
btn.addEventListener('click', stop)