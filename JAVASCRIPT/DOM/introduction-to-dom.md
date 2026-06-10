# 🐁Introduction of DOM

## 1. HTML to Browser Pipeline

When a browser receives an HTML file, it follows a series of steps to convert the code into a visible webpage.

### Pipeline Flow:

```
HTML → Parsing → Tokenization → DOM Tree
CSS → Parsing → CSSOM Tree

DOM Tree + CSSOM Tree → Render Tree → Layout → Paint → Screen
```

The browser reads HTML and CSS, creates internal structures, and finally displays the webpage to the user.

---

# 2. Parsing

### Definition

Parsing is the process of reading and analyzing HTML or CSS code to understand its structure and meaning.

### Example

```html
<h1>Hello World</h1>
```

The browser reads this code and understands that:

- `h1` is a heading element.
- "Hello World" is the content inside the heading.

### Purpose of Parsing

- Detects HTML elements.
- Understands nesting of tags.
- Converts code into a structure the browser can work with.

---

# 3. Tokenization

### Definition

Tokenization is the process of breaking HTML code into smaller pieces called **tokens**.

### Example

HTML:

```html
<p>Hello</p>
```

Tokens:

```
Start Tag: <p>
Text: Hello
End Tag: </p>
```

### Purpose of Tokenization

- Splits code into understandable chunks.
- Helps the parser analyze HTML efficiently.
- Acts as the first step before creating the DOM Tree.

---

# 4. DOM Tree (Document Object Model)

### Definition

The DOM Tree is a tree-like representation of all HTML elements in a webpage.

Every HTML element becomes a **Node** inside the DOM Tree.

### Example

HTML:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

DOM Tree:

```
Document
 └── html
      └── body
           ├── h1
           │    └── "Hello"
           └── p
                └── "Welcome"
```

### Importance

- JavaScript interacts with the webpage through the DOM.
- Allows dynamic updates without reloading the page.

### Example

```jsx
document.querySelector("h1").textContent = "Hi";
```

This changes the heading content using the DOM.

---

# 5. CSSOM Tree (CSS Object Model)

### Definition

The CSSOM Tree is a tree-like structure created from CSS rules.

It contains all styling information required to style HTML elements.

### Example

CSS:

```css
h1 {
  color: red;
  font-size: 40px;
}
```

CSSOM Representation:

```
CSSOM
 └── h1
      ├── color: red
      └── font-size: 40px
```

### Importance

- Stores all CSS rules.
- Helps the browser determine how elements should appear.
- Works together with the DOM Tree.

---

# 6. DOM Tree + CSSOM Tree = Render Tree

### Definition

The Render Tree is created by combining the DOM Tree and CSSOM Tree.

It contains only the elements that need to be displayed on the screen.

### Example

HTML:

```html
<h1>Hello</h1>
<p>Welcome</p>
```

CSS:

```css
p {
  display: none;
}
```

DOM Tree:

```
h1
p
```

Render Tree:

```
h1
```

The `<p>` element is not included because `display: none` hides it.

### Importance

- Determines what will actually be rendered.
- Used for Layout and Paint processes.

---

# Element Selection in DOM

Element selection allows JavaScript to access and manipulate HTML elements.

---

## 1. getElementById()

Selects an element using its ID.

### HTML

```html
<h1 id="title">Hello</h1>
```

### JavaScript

```jsx
const heading = document.getElementById("title");
console.log(heading);
```

---

## 2. getElementsByClassName()

Selects all elements with a specific class.

### HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
```

### JavaScript

```jsx
const items = document.getElementsByClassName("text");
console.log(items);
```

Returns an HTMLCollection.

---

## 3. getElementsByTagName()

Selects elements based on tag name.

### JavaScript

```jsx
const paragraphs = document.getElementsByTagName("p");
```

Returns all `<p>` elements.

---

## 4. querySelector()

Selects the first matching element.

### JavaScript

```jsx
const element = document.querySelector(".text");
```

Selects the first element with class `text`.

---

## 5. querySelectorAll()

Selects all matching elements.

### JavaScript

```jsx
const elements = document.querySelectorAll(".text");
```

Returns a NodeList.

---

# Quick Summary

| Concept | Purpose |
| --- | --- |
| Parsing | Reads and understands HTML/CSS |
| Tokenization | Breaks code into tokens |
| DOM Tree | Structure of HTML elements |
| CSSOM Tree | Structure of CSS rules |
| Render Tree | Combines DOM + CSSOM for rendering |
| getElementById() | Select by ID |
| getElementsByClassName() | Select by Class |
| getElementsByTagName() | Select by Tag |
| querySelector() | Select first matching element |
| querySelectorAll() | Select all matching elements |

### Complete Browser Rendering Flow

```
HTML File
    ↓
Tokenization
    ↓
Parsing
    ↓
DOM Tree

CSS File
    ↓
Tokenization
    ↓
Parsing
    ↓
CSSOM Tree

DOM Tree + CSSOM Tree
            ↓
       Render Tree
            ↓
         Layout
            ↓
         Paint
            ↓
        Web Page
```