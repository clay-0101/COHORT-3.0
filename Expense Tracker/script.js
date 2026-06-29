const authPage = document.querySelector('#authPage')
const trackerPage = document.querySelector('#tracker')
const login_Form = document.querySelector('#loginAuth')
const register_Form = document.querySelector('#registerAuth')
const goToLogin_Form = document.querySelector('#loginHere')
const goToRegister_Form = document.querySelector('#goToRegistration')
const login_username_input = document.querySelector('#username') 
const login_password_input = document.querySelector('#password')
const list = document.querySelector('#list')
const register_username = document.querySelector('#Rusername')
const register_password = document.querySelector('#Rpassword')
const addTransactionBtn = document.querySelector('#addTransaction')
const addTransactionDisplay = document.querySelector('#addTransaction_page')
const cross_Icon = document.querySelector('#crossIcon')
const transaction_form = document.querySelector('#addTransaction_form')
const type = document.querySelector('#type')
const description = document.querySelector('#description')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const category = document.querySelector('#category')
const searchInput = document.querySelector('#search-Transaction')
const filterSelect = document.querySelector('#select-category')
const resetBtn = document.querySelector('#resetBtn')
const darkModeBtn = document.querySelector('#darkModeBtn')
const innerBall = document.querySelector('#innerBall')
const dashboardPage = document.querySelector('#dashboard-page')
const settingsPage = document.querySelector('#settings-page')
const dashBtn = document.querySelector('#dashBtn')
const settingBtn = document.querySelector('#settingBtn')
const settingsForm = document.querySelector('#settings_form')
const settingsUsername = document.querySelector('#Susername')
const settingsCurrency = document.querySelector('#Scurrency')

let transactionDisplayFlag = false;
let editId = null;

let users = JSON.parse(localStorage.getItem('All_Users')) || []
let currentUser = JSON.parse(localStorage.getItem('Current_User')) || null;
let darkModeStatus = localStorage.getItem('DarkMode') || 'disabled';

function checkAuthStatus() {
    if (currentUser) {
        authPage.style.display = 'none';
        trackerPage.style.display = 'flex';
        updateNavbarName();
        updateDashboardAndGraph();
        create_li(); 
    } else {
        trackerPage.style.display = 'none';
        authPage.style.display = 'flex';
        register_Form.style.display = 'block'; 
        login_Form.style.display = 'none';
    }
}

function updateNavbarName() {
    if (!currentUser) return;
    const userNavName = document.querySelector('#user');
    if (userNavName) userNavName.innerText = currentUser.username;
}

function getCurrencySign() {
    if (!currentUser || !currentUser.currency) return '₹';
    if (currentUser.currency === 'USD') return '$';
    if (currentUser.currency === 'EUR') return '€';
    return '₹';
}

function applyDarkMode() {
    if (darkModeStatus === 'enabled') {
        document.body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.style.backgroundColor = '#1e40af';
        if (innerBall) innerBall.style.transform = 'translateX(20px)';
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeBtn) darkModeBtn.style.backgroundColor = 'grey';
        if (innerBall) innerBall.style.transform = 'translateX(0px)';
    }
}

//ONlY this part is not made by me (Use ai)
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ctx = document.getElementById('cashFlowChart').getContext('2d');
const cashFlowChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthLabels,
        datasets: [
            {
                label: 'Income',
                data: Array(12).fill(0),
                backgroundColor: '#16a34a', 
                borderRadius: 6,
            },
            {
                label: 'Expenses',
                data: Array(12).fill(0),
                backgroundColor: '#dc2626', 
                borderRadius: 6,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: { boxWidth: 12, usePointStyle: true, pointStyle: 'circle' }
            }
        },
        scales: {
            y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
            x: { grid: { display: false } }
        }
    }
});
// end
function updateDashboardAndGraph() {
    let totalIncome = 0;
    let totalExpense = 0;
    let monthlyIncome = Array(12).fill(0);
    let monthlyExpense = Array(12).fill(0);

    let userTransactions = currentUser && currentUser.transactions ? currentUser.transactions : [];

    userTransactions.forEach(t => {
        const transDate = new Date(t.date);
        const monthIndex = transDate.getMonth();

        if (t.type === 'income' || t.type === 'salary') {
            totalIncome += t.amount;
            monthlyIncome[monthIndex] += t.amount;
        } else if (t.type === 'expense') {
            totalExpense += t.amount;
            monthlyExpense[monthIndex] += t.amount;
        }
    });

    let currentBalance = totalIncome - totalExpense;
    let sign = getCurrencySign();

    const balanceText = document.querySelector('#first h1 .currency');
    if (balanceText) balanceText.innerText = `${sign}${currentBalance.toLocaleString('en-IN')}`;

    const incomeText = document.querySelector('#second h1 .currency');
    if (incomeText) incomeText.innerText = `${sign}${totalIncome.toLocaleString('en-IN')}`;

    const expenseText = document.querySelector('#third h1 .currency');
    if (expenseText) expenseText.innerText = `${sign}${totalExpense.toLocaleString('en-IN')}`;

    const transCountText = document.querySelector('#forth h1');
    if (transCountText) transCountText.innerText = userTransactions.length;

    cashFlowChart.data.datasets[0].data = monthlyIncome;
    cashFlowChart.data.datasets[1].data = monthlyExpense;
    cashFlowChart.update();
}

register_Form.addEventListener('submit', (e) => {
    e.preventDefault()

    let user_exists = users.some(user => user.username === register_username.value)

    if (user_exists) {
        alert('This Username already exists..')
    } else {
        let obj = {
            id: String(Math.random()),
            username: register_username.value,
            password: register_password.value,
            current_balance: 0,
            total_income: 0,
            total_expense: 0,
            total_transactions: 0,
            currency: 'INR',
            transactions: [] 
        }
        users.push(obj)
        localStorage.setItem('All_Users', JSON.stringify(users))
        
        alert('Registration Successful! Please Login.')
        register_Form.reset()

        login_Form.style.display = 'block'
        register_Form.style.display = 'none'
    }
})

login_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    let foundUser = users.find(user => user.username === login_username_input.value && user.password === login_password_input.value);

    if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('Current_User', JSON.stringify(currentUser)); 
        login_Form.reset();
        checkAuthStatus();
    } else {
        alert('Invalid Username or Password!');
    }
});

const logoutBtn = document.querySelector('#logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('Current_User'); 
        checkAuthStatus();
    });
}

goToLogin_Form.addEventListener('click', () => {
    login_Form.style.display = 'block'
    register_Form.style.display = 'none'
})
goToRegister_Form.addEventListener('click', () => {
    register_Form.style.display = 'block';
    login_Form.style.display = 'none';
});

addTransactionBtn.addEventListener('click', () => {
    editId = null;
    transaction_form.reset();
    document.querySelector('#addTransaction_form h1').innerText = "Add Transaction";
    addTransactionDisplay.style.display = 'flex'
})
cross_Icon.addEventListener('click', () => {
    addTransactionDisplay.style.display = 'none'
})

transaction_form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!currentUser) {
        alert("Please login first!");
        return;
    }

    if (editId) {
        currentUser.transactions = currentUser.transactions.map(t => {
            if (t.id === editId) {
                return {
                    id: editId,
                    type: type.value,
                    description: description.value,
                    amount: Number(amount.value),
                    date: date.value,
                    category: category.value
                }
            }
            return t;
        });
        editId = null;
    } else {
        let transObj = {
            id: String(Math.random()),
            type: type.value,
            description: description.value,
            amount: Number(amount.value),
            date: date.value,
            category: category.value
        }
        if (!currentUser.transactions) {
            currentUser.transactions = [];
        }
        currentUser.transactions.push(transObj)
    }

    localStorage.setItem('Current_User', JSON.stringify(currentUser));

    users = users.map(user => {
        if (user.id === currentUser.id) {
            return currentUser;
        }
        return user;
    });
    localStorage.setItem('All_Users', JSON.stringify(users))

    updateDashboardAndGraph()
    create_li(); 

    transaction_form.reset()
    addTransactionDisplay.style.display = 'none'
})

function deleteTransaction(id) {
    currentUser.transactions = currentUser.transactions.filter(t => String(t.id) !== String(id));
    localStorage.setItem('Current_User', JSON.stringify(currentUser));

    users = users.map(user => {
        if (user.id === currentUser.id) {
            return currentUser;
        }
        return user;
    });
    localStorage.setItem('All_Users', JSON.stringify(users));

    updateDashboardAndGraph();
    create_li();
}

function editTransaction(id) {
    let target = currentUser.transactions.find(t => String(t.id) === String(id));
    if (target) {
        editId = id;
        type.value = target.type;
        description.value = target.description;
        amount.value = target.amount;
        date.value = target.date;
        category.value = target.category;

        document.querySelector('#addTransaction_form h1').innerText = "Edit Transaction";
        addTransactionDisplay.style.display = 'flex';
    }
}

function create_li(){
    if (!list || !currentUser || !currentUser.transactions) return;

    let rowContainer = document.querySelector('#transaction-rows');

    if (!rowContainer) {
        rowContainer = document.createElement('div');
        rowContainer.id = 'transaction-rows';
        list.appendChild(rowContainer);
    }

    rowContainer.innerHTML = "";

    let searchValue = searchInput ? searchInput.value.toLowerCase() : "";
    let filterValue = filterSelect ? filterSelect.value : "All";

    let filteredTransactions = currentUser.transactions.filter(trans => {
        let matchesSearch = trans.description.toLowerCase().includes(searchValue) || trans.category.toLowerCase().includes(searchValue);
        let matchesType = filterValue === "All" || trans.type === filterValue;
        return matchesSearch && matchesType;
    });

    let sign = getCurrencySign();

    filteredTransactions.forEach((trans)=>{
        let li = `<div class="li">
                    <p>${trans.date}</p>
                    <p style="color: black;">${trans.description}</p>
                    <p>${trans.category}</p>
                    <p style="color:${trans.type === 'income' || trans.type === 'salary' ? 'rgb(2, 83, 2)' : '#991b1b'}">${trans.type === 'income' || trans.type === 'salary' ? '+' : '-'}${sign}${trans.amount}</p>
                    <div style="display: flex;">
                        <i class="ri-pencil-fill" onclick="editTransaction('${trans.id}')" style="color: rgb(10, 10, 114); margin-right: 10px; cursor: pointer;"></i>
                        <i class="ri-delete-bin-7-fill" onclick="deleteTransaction('${trans.id}')" style="color:#991b1b; cursor: pointer;"></i>
                    </div>
                </div>`
        rowContainer.innerHTML += li;
    })
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        let confirmReset = confirm("Are you sure you want to clear all transactions?");
        if (confirmReset && currentUser) {
            currentUser.transactions = [];
            localStorage.setItem('Current_User', JSON.stringify(currentUser));

            users = users.map(user => {
                if (user.id === currentUser.id) {
                    return currentUser;
                }
                return user;
            });
            localStorage.setItem('All_Users', JSON.stringify(users));

            updateDashboardAndGraph();
            create_li();
        }
    });
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        if (darkModeStatus === 'enabled') {
            darkModeStatus = 'disabled';
        } else {
            darkModeStatus = 'enabled';
        }
        localStorage.setItem('DarkMode', darkModeStatus);
        applyDarkMode();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', create_li);
}
if (filterSelect) {
    filterSelect.addEventListener('change', create_li);
}

if (dashBtn) {
    dashBtn.addEventListener('click', () => {
        dashboardPage.style.display = 'block';
        settingsPage.style.display = 'none';
        dashBtn.style.color = '#1e40af';
        dashBtn.style.backgroundColor = '#dbeafe';
        if (settingBtn) {
            settingBtn.style.color = 'grey';
            settingBtn.style.backgroundColor = 'transparent';
        }
    });
}

if (settingBtn) {
    settingBtn.addEventListener('click', () => {
        dashboardPage.style.display = 'none';
        settingsPage.style.display = 'block';
        settingBtn.style.color = '#1e40af';
        settingBtn.style.backgroundColor = '#dbeafe';
        if (dashBtn) {
            dashBtn.style.color = 'grey';
            dashBtn.style.backgroundColor = 'transparent';
        }
        if (currentUser) {
            settingsUsername.value = currentUser.username;
            settingsCurrency.value = currentUser.currency || 'INR';
        }
    });
}

if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentUser) return;
        
        let name_taken = users.some(u => u.username === settingsUsername.value && u.id !== currentUser.id);
        if (name_taken) {
            alert("Username already taken!");
            return;
        }
        
        currentUser.username = settingsUsername.value;
        currentUser.currency = settingsCurrency.value;
        
        localStorage.setItem('Current_User', JSON.stringify(currentUser));
        
        users = users.map(user => {
            if (user.id === currentUser.id) {
                return currentUser;
            }
            return user;
        });
        localStorage.setItem('All_Users', JSON.stringify(users));
        
        updateNavbarName();
        updateDashboardAndGraph();
        create_li();
        alert("Changes saved successfully!");
    });
}

checkAuthStatus();
applyDarkMode();