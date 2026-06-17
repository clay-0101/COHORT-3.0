# 📝 Task Manager App

A simple and interactive Task Manager built using **HTML, CSS, and Vanilla JavaScript**. This project allows users to add, edit, delete, and manage tasks dynamically while exploring important DOM concepts, browser internals, and Local Storage.

---

## 🚀 Features

* ➕ Add New Tasks
* ✏️ Edit Existing Tasks
* 🗑️ Delete Tasks
* ✅ Mark Tasks as Completed
* 💾 Local Storage Support
* 🌙 Dark / Light Theme Toggle
* 🔔 Toast Notifications
* 📋 Empty State UI
* 🎨 Responsive and Clean Interface
* ⚡ Dynamic DOM Manipulation
* 🎯 Event Delegation
* 🔄 Theme Persistence Across Refreshes
* 📂 Category-Based Task Organization

---

# 🌐 Browser Concepts Used

Before a webpage appears on the screen, the browser goes through several steps. Understanding these concepts helped me build this project.

---

## 1️⃣ Parsing

Parsing means reading and understanding the code.

When the browser receives HTML and CSS files, it reads them line by line and tries to understand what each tag and style means.

### Example

```html
<h1>Hello</h1>
<p>Welcome</p>
```

The browser understands:

* `h1` is a heading
* `p` is a paragraph

This understanding process is called **Parsing**.

---

## 2️⃣ Tokenization

While parsing, the browser breaks the code into smaller pieces called **Tokens**.

### Example

```html
<h1>Hello</h1>
```

Becomes:

* `<h1>`
* `Hello`
* `</h1>`

These small pieces help the browser understand the structure of the code.

This process is called **Tokenization**.

---

## 3️⃣ DOM Tree (Document Object Model)

After parsing HTML, the browser creates a tree-like structure called the **DOM Tree**.

### Example

```html
<body>
    <div>
        <h1>Task Manager</h1>
    </div>
</body>
```

DOM Tree:

```text
Body
 └── Div
      └── H1
```

Every HTML element becomes a node inside the DOM Tree.

### How I Used It

In this project JavaScript interacts with the DOM to:

* Add Tasks
* Edit Tasks
* Delete Tasks
* Update Task Status
* Show/Hide Elements
* Toggle Themes

Examples:

```javascript
document.querySelector()
createElement()
appendChild()
remove()
classList.toggle()
```

---

## 4️⃣ CSSOM Tree

Just like HTML creates a DOM Tree, CSS creates a **CSSOM Tree**.

The browser stores all styling information inside this tree.

### Example

```css
h1 {
    color: blue;
}
```

The browser remembers that all `h1` elements should be displayed in blue color.

This collection of styling rules is called the **CSSOM Tree**.

---

## 5️⃣ Render Tree

The browser combines:

* DOM Tree
* CSSOM Tree

and creates a new structure called the **Render Tree**.

The Render Tree contains only the elements that should actually appear on the screen.

### Example

```html
<div>Hello</div>
<div style="display:none">Hidden</div>
```

The hidden div will not be included because it is not visible.

The browser uses the Render Tree to draw the final webpage.

---

# 🎯 Event Handling Concepts

User interactions such as clicking buttons, editing tasks, and deleting tasks are handled through JavaScript events.

---

## 6️⃣ Event Bubbling

When an element is clicked, the event starts from that element and moves upward through its parent elements.

### Example

```html
<div>
    <button>Delete</button>
</div>
```

Flow:

```text
Button
  ↓
Div
  ↓
Body
  ↓
Document
```

This upward movement is called **Event Bubbling**.

It is JavaScript's default event behavior.

---

## 7️⃣ Event Capturing

Event Capturing works opposite to Event Bubbling.

The event starts from the top and travels down to the clicked element.

Flow:

```text
Document
  ↓
Body
  ↓
Div
  ↓
Button
```

Although this project does not directly use capturing, understanding it helped me understand how browser events work internally.

---

## 8️⃣ Event Delegation

This is one of the most important concepts used in this project.

Instead of attaching event listeners to every task button individually, I attached a single listener to the parent container.

### Example

```javascript
taskList.addEventListener("click", function(e) {
    if (e.target.closest(".deleteBtn")) {
        // Delete Task
    }
});
```

### Why Event Delegation?

* Less Code
* Better Performance
* Easier Maintenance
* Works for Dynamically Added Elements

### Where I Used It

* Delete Button
* Edit Button
* Checkbox Completion Feature

Because all tasks are created dynamically using JavaScript.

---

# 💾 Local Storage

To improve the user experience, the application uses the browser's **Local Storage API**.

### Why Local Storage?

Without Local Storage, all tasks would disappear whenever the page is refreshed.

### How It Is Used

* Tasks are stored in Local Storage when created.
* Edited tasks are updated in Local Storage.
* Deleted tasks are removed from Local Storage.
* Tasks are automatically restored when the page reloads.
* Selected theme (Dark/Light Mode) is also saved and restored.

### Example

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];
```

This allows the application to persist data even after refreshing or reopening the browser.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage API

---

# 📚 What I Learned

While building this project, I learned:

* How browsers parse HTML and CSS
* What Tokenization means
* How DOM Trees are created
* How CSSOM Trees store styling information
* How Render Trees are generated
* How Event Bubbling works
* How Event Delegation helps manage dynamic elements
* How Local Storage works
* How Theme Persistence is implemented
* How to manipulate the DOM using JavaScript

This project improved my understanding of how websites work behind the scenes and strengthened my JavaScript DOM manipulation skills.

---

## 👩‍💻 Author

**Carry Saini**

Built as part of **Cohort 3.0 DOM Explorer Assignment** 🚀
