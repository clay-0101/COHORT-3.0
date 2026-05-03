
## 🌐 HTML Table Basics

### 🧠 Concepts

HTML tables are used to display data in a structured format using rows and columns, just like an Excel sheet. They are mainly used when you have tabular data, such as student records, pricing tables, reports, etc.

A table is created using the `<table>` tag, and everything inside it (rows, columns, headings) is organized using specific tags.

---

## 🔹 Table Structure Tags

These tags define the overall structure of a table:

| Tag | Purpose |
|-----|---------|
| `<table>` | Main container. Every table starts and ends with this tag |
| `<thead>` | Top section of the table, usually containing headings |
| `<tbody>` | Contains the main data of the table (most of the rows) |
| `<tfoot>` | Bottom section, often used for totals or summaries |

> 👉 Using these tags makes your table more readable, structured, and SEO-friendly.

---

## 🧱 Rows & Cells

Tables are built using rows and cells:

| Tag | Purpose |
|-----|---------|
| `<tr>` (Table Row) | Defines a row in the table. Each row contains multiple cells |
| `<td>` (Table Data) | Defines a normal data cell inside a row |

👉 Think of it like:
- `<tr>` = one horizontal row
- `<td>` = individual boxes inside that row

---

## 🏷️ Headers & Caption

| Tag | Purpose |
|-----|---------|
| `<th>` (Table Header) | Used for headings (like Name, Age, Price). Bold and centered by default |
| `<caption>` | Gives a title/description to the table. Appears above the table |

---

## 📊 Column Grouping

These are advanced tags used for styling or managing columns:

| Tag | Purpose |
|-----|---------|
| `<colgroup>` | Used to group multiple columns together |
| `<col>` | Used to define properties for individual columns |

> 👉 Mostly used when you want to apply same styling to multiple columns at once.

---

## 💻 Code Example

```html
<table border="1">
  <caption>Student Data</caption>

  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Anubhav</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Rahul</td>
      <td>23</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">End of Data</td>
    </tr>
  </tfoot>
</table>
```

👉 This example shows:
- Header (`thead`)
- Data (`tbody`)
- Footer (`tfoot`)

---

## 📎 Resources
- Add YouTube explanation link
- Add MDN Docs link

---

## 📝 Summary

- Tables are used to display structured data
- `<table>` is the main container
- `<tr>` creates rows, `<td>` creates data cells
- `<th>` is used for headings
- `<thead>`, `<tbody>`, `<tfoot>` improve structure

---

## ✅ Best Practices

- Always use `<thead>`, `<tbody>`, `<tfoot>` for better structure
- Use `<th>` instead of `<td>` for headings
- Add a `<caption>` to describe the table
- Keep tables clean and readable
- Avoid using tables for layout (use CSS instead)

---

## 🔥 Pro Tip

> Tables should only be used for **data representation**, not for designing layouts. Use CSS (Flexbox/Grid) for layout.