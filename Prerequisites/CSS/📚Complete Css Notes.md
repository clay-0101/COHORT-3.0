# 📚Complete Css Notes

## 📁 Topics

- 🎯 [Selectors](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🎨 [Colors & Units](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 📝 [Text Styling](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🔤 [Fonts](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 📦 [Box Model](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🖼️ [Background](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 📺 [Display Property](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- ⚡ [Flexbox](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🧱 [CSS Grid](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 📍 [Positioning](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🎭 [Pseudo Classes](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🧩 [Pseudo Elements](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🎬 [Transitions](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🔄 [Transform](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 🎞️ [Animations](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)
- 📱 [Responsive Design](%F0%9F%93%9AComplete%20Css%20Notes%2035806c3cd4b980269555f6ac4ed6154e.md)

---

## 📘 Notes

---

### 🎯 Selectors

🧠 **Concepts**

Selectors are used to **target HTML elements** so that styles can be applied.

👉 Types:

- Universal () → targets all elements
- Element (`p`) → targets specific tags
- Class (`.class`) → reusable styling
- ID (`#id`) → unique element
- Group (`h1, p`) → multiple elements

👉 Example:

```
* {
  margin:0;
  padding:0;
}

.card {
  background:blue;
}

#header {
  font-size:20px;
}
```

---

### 🎨 Colors & Units

🧠 **Concepts**

Used to define **colors and sizing** in CSS.

👉 Color Types:

- Named → `red`
- HEX → `#ff5733`
- RGB → `rgb(255,0,0)`
- RGBA → transparency support

👉 Units:

- `px` → fixed
- `%` → relative
- `em` → parent-based
- `rem` → root-based

👉 Example:

```
color:red;
background-color:#ff0000;
width:50%;
```

---

### 📝 Text Styling

Used to control **text appearance and spacing**.

👉 Example:

```
text-align:center;
text-transform:uppercase;
text-decoration:underline;
line-height:1.5;
letter-spacing:2px;
word-spacing:5px;
```

---

### 🔤 Fonts

Used to style **text font and typography**.

👉 Example:

```
font-family:Arial,sans-serif;
font-size:16px;
font-weight:bold;
font-style:italic;
```

👉 Google Fonts:

```
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

body {
  font-family:'Poppins',sans-serif;
}
```

---

### 📦 Box Model

🧠 **Concepts**

Every element follows:

**Content → Padding → Border → Margin**

👉 Example:

```
width:200px;
height:100px;
padding:10px;
border:2px solid black;
margin:20px;
box-sizing:border-box;
```

---

### 🖼️ Background

Used to style **element backgrounds**.

👉 Example:

```
background-color:red;
background-image:url('image.jpg');
background-repeat:no-repeat;
background-position:center;
background-size:cover;
```

---

### 📺 Display Property

Controls how elements are **rendered on screen**.

👉 Types:

- `block` → full width
- `inline` → no width/height
- `inline-block` → hybrid
- `none` → hidden

👉 Example:

```
display:block;
display:inline-block;
```

---

### ⚡ Flexbox

🧠 **Concepts**

Used for **1D layouts (row OR column)**.

👉 Example:

```
.container {
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
}
```

---

### 🧱 CSS Grid

🧠 **Concepts**

Used for **2D layouts (rows + columns)**.

👉 Example:

```
.container {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows:auto;
  gap:10px;
  place-items:center;
}
```

---

### 📍 Positioning

Controls **element placement**.

👉 Types:

- `static` → default
- `relative` → from itself
- `absolute` → from parent
- `fixed` → screen fixed
- `sticky` → sticks on scroll

👉 Example:

```
position:absolute;
z-index:10;
```

---

### 🎭 Pseudo Classes

Used for **element states**.

👉 Example:

```
button:hover {
  background:red;
}

input:focus {
  border:2px solid blue;
}

li:nth-child(2) {
  color:green;
}
```

---

### 🧩 Pseudo Elements

Used to style **specific parts of elements**.

👉 Example:

```
p::before {
  content:"🔥";
}

p::after {
  content:"✔";
}

::selection {
  background:yellow;
}
```

---

### 🎬 Transitions

Used for **smooth changes**.

👉 Example:

```
button {
  transition:all 0.3s ease-in-out;
}

button:hover {
  background:red;
}
```

---

### 🔄 Transform

Used to **move or change shape**.

👉 Example:

```
transform:translate(50px,0);
transform:rotate(45deg);
transform:scale(1.2);
transform:skew(20deg);
```

---

### 🎞️ Animations

Used to create **motion effects**.

👉 Example:

```
@keyframes slide {
  from { transform:translateX(0); }
  to { transform:translateX(100px); }
}

.box {
  animation-name:slide;
  animation-duration:2s;
  animation-iteration-count:infinite;
}
```

---

### 📱 Responsive Design

🧠 **Concepts**

Makes websites **adapt to different screen sizes**.

👉 Media Query:

```
@media (max-width:768px) {
  body {
    background:red;
  }
}
```

👉 Breakpoints:

- 576px → mobile
- 768px → tablet
- 992px → laptop
- 1200px → desktop

👉 Width Control:

```
max-width:1200px;
min-width:300px;
```