# 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3

## 1. `forEach()`

### Intermediate Question

You are given an array of prices.

Print each price with `"₹"` before it.

```jsx
let prices = [100, 250, 399, 499];
```

### Hint

- `forEach()` runs once for every element.
- You don't return anything here.
- Use `console.log()` inside it.

---

### Hard Question

You are given an array of students.

```jsx
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
```

Print:

- `"Pass"` if marks are greater than 50
- `"Fail"` otherwise

Output format:

```jsx
Anubhav - Pass
Rahul - Fail
```

### Hint

- Loop through objects using `forEach()`
- Use condition checking inside loop.

---

# 2. `map()`

### Intermediate Question

Convert all names into uppercase.

```jsx
let names = ["anubhav", "rahul", "aman"];
```

Expected Output:

```jsx
["ANUBHAV", "RAHUL", "AMAN"]
```

### Hint

- `map()` creates a new array.
- Use `.toUpperCase()`.

---

### Hard Question

You are given products.

```jsx
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
```

Create a new array where:

- Every product has a new property `discountPrice`
- Discount is 10%

Expected:

```jsx
[
  { name: "Laptop", price: 50000, discountPrice: 45000 }
]
```

### Hint

- Return a new object from `map()`
- Formula:

```jsx
price - (price * 10 / 100)
```

---

# 3. `filter()`

### Intermediate Question

Filter all even numbers.

```jsx
let nums = [1,2,3,4,5,6,7,8];
```

Expected Output:

```jsx
[2,4,6,8]
```

### Hint

- `filter()` keeps elements when condition is `true`.

---

### Hard Question

You are given users.

```jsx
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
```

Return only active users.

### Hint

- Check `active === true`
- Return condition directly.

---

# 4. `reduce()`

### Intermediate Question

Find total sum of array.

```jsx
let nums = [10,20,30,40];
```

Expected Output:

```jsx
100
```

### Hint

- `reduce()` needs:
    - accumulator
    - current value

---

### Hard Question

Count frequency of elements.

```jsx
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
```

Expected Output:

```jsx
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

### Hint

- Create an empty object `{}` as initial value.
- Increase count if already exists.

---

# 5. `find()`

### Intermediate Question

Find first number greater than 50.

```jsx
let nums = [20, 35, 60, 80];
```

Expected Output:

```jsx
60
```

### Hint

- `find()` returns first matching element.

---

### Hard Question

Find a user with username `"admin"`.

```jsx
let users = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
```

### Hint

- Compare inside callback:

```jsx
user.username === "admin"
```

---

# 6. `findIndex()`

### Intermediate Question

Find index of number `90`.

```jsx
let nums = [10, 40, 90, 50];
```

### Hint

- `findIndex()` returns index number.

---

### Hard Question

Find index of first failed student.

```jsx
let students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
```

Condition:

- Failed if marks < 40

### Hint

- Use condition directly inside callback.

---

# 7. `some()`

### Intermediate Question

Check if any number is negative.

```jsx
let nums = [10, 20, -5, 40];
```

Expected Output:

```jsx
true
```

### Hint

- `some()` returns true if at least one condition matches.

---

### Hard Question

Check if any product is out of stock.

```jsx
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
```

### Hint

- Check:

```jsx
stock === 0
```

---

# 8. `every()`

### Intermediate Question

Check if all numbers are positive.

```jsx
let nums = [10, 20, 30, 40];
```

Expected Output:

```jsx
true
```

### Hint

- `every()` checks all elements.

---

### Hard Question

Check if all students passed.

```jsx
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
```

Passing marks:

```jsx
40
```

### Hint

- Return condition:

```jsx
marks >= 40
```