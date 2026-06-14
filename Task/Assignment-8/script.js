const userName = document.querySelector('#userName')
const userBio = document.querySelector('#userBio')
const userURL = document.querySelector('#userURL')
const addBtn = document.querySelector('#addBtn')
const cards = document.querySelector('#cards')

const USERS = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "about": "Full-stack developer who loves coffee, building scalable web apps, and late-night coding sessions.",
        "dp_url": "https://images.unsplash.com/photo-1659998012676-2769e22b8e43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1757459446809-3cdd8b34da55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Ananya Iyer",
        "about": "Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.",
        "dp_url": "https://images.unsplash.com/photo-1729434524785-16c40f7b24b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Rohan Verma",
        "about": "Freelance travel photographer and storyteller, exploring hidden gems across Southeast Asia.",
        "dp_url": "https://plus.unsplash.com/premium_photo-1674586422099-f52a936fd7f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 4,
        "name": "Meera Nair",
        "about": "Data scientist by day, avid reader by night. Passionate about machine learning and sustainability.",
        "dp_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 5,
        "name": "Kabir Mehta",
        "about": "Fitness coach and nutritionist helping people build sustainable habits and functional strength.",
        "dp_url": "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 6,
        "name": "Sanya Kapoor",
        "about": "Content strategist and indie podcaster discussing mental health, modern workplace culture, and creativity.",
        "dp_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 7,
        "name": "Vikram Rathore",
        "about": "Cybersecurity researcher, retro gaming enthusiast, and occasional open-source contributor.",
        "dp_url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 8,
        "name": "Diya Joshi",
        "about": "Pastry chef and cafe owner experimenting with fusion desserts and artisanal sourdough bread.",
        "dp_url": "https://plus.unsplash.com/premium_photo-1682095672918-234595db1df8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 9,
        "name": "Arjun Malhotra",
        "about": "Product manager with a knack for solving complex problems and managing cross-functional tech teams.",
        "dp_url": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 10,
        "name": "Isha Patel",
        "about": "Environmental scientist focusing on renewable energy policies and urban rooftop farming initiatives.",
        "dp_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400"
    }
]

function addUser() {
    cards.innerHTML = ''

    // Card UI 
    USERS.forEach((elem, idx) => {
        cards.innerHTML += `<div class="user-card">
                <div class="dp-part">
                    <div onclick="addImg(${idx})" class="editImg">
                        <i class="ri-camera-4-fill"></i>
                    </div>
                    <img src="${elem.dp_url}"
                        alt="NOT A Valid URL">
                </div>
                <div class="bio-part">
                    <h1 class="text">${elem.name.toUpperCase()}</h1>
                    <p class="text" >${elem.about}</p>
                    <div class="editorBtn">
                        <button  class="btn1">Edit</button>
                        <button  onclick="deleteCard(${idx})"  class="btn2">Delete</button>
                    </div>
                    <div class="editorBtn2">
                        <button  class="btn3">OK</button>
                        <button  class="btn4">Cancel</button>
                    </div>
                </div>
            </div>`
    })
}

addUser()

// After Click the Add Me Button A User Card will be Generated
addBtn.addEventListener('click', (e) => {

    // Prevent Default Reloading Behaviour
    e.preventDefault()

    // If User Leave any Field Empty
    if (userBio.value.trim() == '' || userName.value.trim() == '' || userURL.value.trim() == '') {
        alert('Fill All The Field Properly....')
        return
    }

    USERS.push({
        name: userName.value,
        about: userBio.value,
        dp_url: userURL.value
    })
    addUser()

    //After Generate the Card All Field Will be Emplty
    userBio.value = ''
    userName.value = ''
    userURL.value = ''

})

// Delete Card Function
const deleteCard = (idx) => {
    USERS.splice(idx, 1)
    addUser()
}

// Edit or Replace Img Function
const addImg = (idx) => {
    let url = prompt('Enter Another URL..')
    if (url.trim() == "") return
    USERS[idx].dp_url = url
    addUser()
}

// Edit Buttons
cards.addEventListener('click', (e) => {
    let userCard = e.target.closest('.user-card')
    let bio = e.target.closest('.bio-part')
    let text = bio.querySelectorAll('.text')
    let editBtns = bio.querySelector('.editorBtn')
    let editBtns2 = bio.querySelector('.editorBtn2')

    if (!userCard) return

    // FOR EDIT TEXT 
    if (e.target.classList.contains('btn1')) {
        editBtns.style.display = "none"
        editBtns2.style.display = "flex"
        text.forEach((ele) => {
            ele.setAttribute('contenteditable', 'true')
            ele.dataset.prev = ele.textContent
        })

        text[0].focus()
    }
    // IF USER CLICK 'OK' BUTTON
    if (e.target.classList.contains('btn3')) {
        if (text[0].textContent.trim() == '' || text[1].textContent.trim() == '') {
            text.forEach((ele) => {
                ele.textContent = ele.dataset.prev
                ele.setAttribute('contenteditable', 'false')
            })
            alert("Fill All The Field Properly....")
        } else {
            text.forEach((ele) => {
                ele.setAttribute('contenteditable', 'false')
            })
        }
        editBtns.style.display = "flex"
        editBtns2.style.display = "none"
    }

  // IF USER CLICK 'DELETE' BUTTON
    if (e.target.classList.contains('btn4')) {
        text.forEach((ele) => {
            ele.textContent = ele.dataset.prev
            ele.setAttribute('contenteditable', 'false')
        })
        editBtns.style.display = "flex"
        editBtns2.style.display = "none"
    }
})