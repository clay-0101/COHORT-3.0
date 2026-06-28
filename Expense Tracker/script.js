const login_Form = document.querySelector('#loginAuth')
const register_Form = document.querySelector('#registerAuth')
const goToLogin_Form = document.querySelector('#loginHere')
const goToRegister_Form = document.querySelector('#goToRegistration')
const register_username = document.querySelector('#Rusername')
const register_password = document.querySelector('#Rpassword')


let users = JSON.parse(localStorage.getItem('All_Users')) || []


function show_User() {
    // users.forEach((user) => {
    //     console.log(user)
    // })
    console.log(users)
}



// REGISTRATION FORM
register_Form.addEventListener('submit', (e) => {
    e.preventDefault()

    let user_exists = users.some(user => user.username === register_username.value)

    if (user_exists) {
        alert('This Username is already exists..')
    } else {
        let obj = {
            id: Date.now(),
            username: register_username.value,
            password: register_password.value,
            current_balance: 0,
            total_income: 0,
            total_expense: 0,
            total_transactions: 0
        }
        users.push(obj)
        localStorage.setItem('All_Users',JSON.stringify(users))
        show_User()
    }


    register_Form.reset()
})




// SHOW / HIDDEN - LOGIN & REGISTER FORM
goToLogin_Form.addEventListener('click', () => {
    login_Form.style.display = 'block'
    register_Form.style.display = 'none'
})
goToRegister_Form.addEventListener('click', () => {
    register_Form.style.display = 'block';
    login_Form.style.display = 'none';
});
localStorage.clear()