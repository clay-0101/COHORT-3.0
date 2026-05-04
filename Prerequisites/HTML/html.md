# 📁 HTML Notes

## Topics
- 🌐 HTML Basics
- 🔹 Types of Tags
- 🏗️ Structure Tags
- 📝 Text & Content Tags
- 🎨 Formatting Tags
- 🔗 Links & Navigation
- 🖼️ Media Tags
- 📋 Lists

---

## 🌐 HTML - Basics

### 🧠 Concepts

HTML (HyperText Markup Language) is the **foundation of every webpage**. It is used to define the **structure and layout** of content like text, images, links, and more.

Instead of programming logic, HTML uses **tags** to describe elements. These tags tell the browser **what to display and how content is organized**.

👉 Example elements:
- Headings
- Paragraphs
- Images
- Links

---

## 🔹 Types of Tags

HTML tags are categorized based on how they behave:

### 1. Normal (Paired Tags)
These tags have both **opening and closing parts**.

```html
<p>This is a paragraph</p>
```

### 2. Self-Closing Tags
These tags **don't need a closing tag** because they don't wrap content.

```html
<br>
<img src="image.jpg">
<hr>
```

### 3. Block-Level Tags
- Take **full width** of the page
- Always start on a **new line**

```html
<div>Block Element</div>
<p>Paragraph</p>
```

### 4. Inline Tags
- Take only **required space**
- Stay in the **same line**

```html
<span>Inline Text</span>
<a href="#">Link</a>
```

### 5. Semantic Tags
These tags give **meaning** to content, improving SEO and readability.

```html
<header></header>
<footer></footer>
<article></article>
```

---

## 🏗️ Structure Tags

These tags define the **basic skeleton of a webpage**:

| Tag | Purpose |
|-----|---------|
| `<html>` | Root element (everything is inside this) |
| `<head>` | Contains metadata (not visible to users) |
| `<title>` | Page title (browser tab name) |
| `<body>` | All visible content |
| `<meta>` | SEO / charset info |
| `<link>` | Connect external CSS |
| `<style>` | Internal CSS |
| `<script>` | JavaScript |

---

## 📝 Text & Content Tags

Used to display **basic readable content**:

| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings (h1 = most important) |
| `<p>` | Paragraph text |
| `<br>` | Line break |
| `<hr>` | Horizontal divider |

> 👉 These tags help structure content for users and search engines.

---

## 🎨 Formatting Tags

Used to **style or emphasize text**:

| Tag | Purpose |
|-----|---------|
| `<b>` | Bold (visual only) |
| `<strong>` | Important (semantic bold) |
| `<i>` | Italic |
| `<em>` | Emphasized (semantic italic) |
| `<u>` | Underline |
| `<mark>` | Highlight |
| `<small>` | Smaller text |
| `<del>` | Deleted (strike-through) |
| `<sub>` | Subscript (H₂O) |
| `<sup>` | Superscript (x²) |

### Key Differences:
- `<b>` vs `<strong>` → `strong` has semantic meaning
- `<i>` vs `<em>` → `em` has semantic importance

---

## 🔗 Links & Navigation

### 🔹 Anchor Tag (`<a>`)
Used to create **clickable links**.

```html
<a href="https://google.com">Visit Google</a>
```

### Other Uses:
| Type | Syntax |
|------|--------|
| WhatsApp | `https://wa.me/number` |
| Email | `mailto:example@gmail.com` |
| SMS | `sms:+91...` |

---

## 🖼️ Media Tags

Used to add **multimedia content**:

| Tag | Purpose |
|-----|---------|
| `<img>` | Displays images (`src`, `alt`) |
| `<audio>` | Adds audio |
| `<video>` | Adds video |
| `<iframe>` | Embeds external content (YouTube, maps) |

> 👉 **Important**: Always use `alt` in images for accessibility + SEO.

---

## 📋 Lists

Used to organize content in **list format**:

| Tag | Purpose |
|-----|---------|
| `<ul>` | Unordered list (bullets) |
| `<ol>` | Ordered list (numbers) |
| `<li>` | List items |

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

---

## 📝 Summary

- HTML defines the **structure of a webpage**
- Tags are used to create and organize content
- Semantic tags improve **SEO and readability**
- Clean structure helps in **scalability and maintenance**

---

## ✅ Best Practices

- Use semantic tags wherever possible
- Maintain heading hierarchy (`h1 → h6`)
- Always add `alt` in images
- Avoid unnecessary tags
- Keep code clean and readable

---

## 🔥 Pro Tip

> Clean HTML structure = Better SEO + Better readability + Easier development


# 📚 HTML Table Tags

## 📁 Topics
- 🌐 HTML Table Basics
- 🔹 Table Structure Tags
- 🧱 Rows & Cells
- 🏷️ Headers & Caption
- 📊 Column Grouping
- ✅ Best Practices

---
