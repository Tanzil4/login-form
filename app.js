let login = document.querySelector('.login')
let logout = document.querySelector('.logout')

let email = document.getElementById('email')
let password = document.getElementById('password')



function  show() {
    if (localStorage.getItem('email')) {
        login.style.display = 'none'
        logout.style.display = 'block'
    }else{
        login.style.display = 'block'
        logout.style.display = 'none'
    }


}

show()


function btn1() {
    if(!email.value || !password.value)  return alert('plz enter info')
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        show()
        email.value = ''
        password.value = ''
}

function btn2() {
   localStorage.removeItem('email') 
   show()
}