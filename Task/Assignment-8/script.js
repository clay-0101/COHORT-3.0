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
        "dp_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 2,
        "name": "Ananya Iyer",
        "about": "Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.Digital artist and UX designer capturing the beauty of everyday life through minimalist illustrations.",
        "dp_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 3,
        "name": "Rohan Verma",
        "about": "Freelance travel photographer and storyteller, exploring hidden gems across Southeast Asia.",
        "dp_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
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
        "dp_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
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
        "dp_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        "id": 8,
        "name": "Diya Joshi",
        "about": "Pastry chef and cafe owner experimenting with fusion desserts and artisanal sourdough bread.",
        "dp_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
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
    USERS.forEach((elem) => {
        cards.innerHTML += `<div class="user-card">
                <div class="dp-part">
                    <img src="${elem.dp_url}"
                        alt="">
                </div>
                <div class="bio-part">
                    <h1>${elem.name.toUpperCase()}</h1>
                    <p>${elem.about}</p>
                    <div class="editorBtn">
                        <button class="btn1">Edit</button>
                        <button class="btn2">Delete</button>
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
        name : userName.value,
        about : userBio.value,
        dp_url: userURL.value
    })

    addUser()

    //After Generate the Card All Field Will be Emplty
    userBio.value = ''
    userName.value = ''
    userURL.value = ''

})