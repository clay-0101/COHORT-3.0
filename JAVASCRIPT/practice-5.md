# 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 4

## Beginner Level

### 1. Create an Object

Create an object for a student with:

- name
- age
- course

Then print all values.

---

### 2. Access Properties

Given:

```jsx
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}
```

Print:

- brand
- model

using both:

- dot notation
- bracket notation

---

### 3. Update Object Value

Change the age of a user from 20 to 25.

```jsx
const user = {
  name: "Anubhav",
  age: 20
}
```

---

### 4. Add New Property

Add a new property:

```jsx
isAdmin: true
```

to this object.

---

### 5. Delete Property

Remove the `password` property from the object.

```jsx
const account = {
  username: "john",
  password: "12345"
}
```

---

# Intermediate Level

### 6. Count Properties

Write a function that returns how many properties an object has.

Example:

```jsx
countProperties({a:1,b:2,c:3})
// 3
```

Hint:

Use:

```jsx
Object.keys()
```

---

### 7. Loop Through Object

Print all keys and values from this object.

```jsx
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
```

Hint:

Use:

```jsx
for...in
```

---

### 8. Check Property Exists

Check whether `"email"` exists inside an object or not.

Hint:

Use:

```jsx
in
```

---

### 9. Merge Two Objects

Merge these two objects into one.

```jsx
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
```

Hint:

Use:

```jsx
spread operator
```

---

### 10. Convert Object to Array

Convert this object into an array of key-value pairs.

```jsx
const user = {
  name: "Aman",
  age: 21
}
```

Hint:

Use:

```jsx
Object.entries()
```

---

# Problem Solving Level

### 11. Find Highest Value

Find the student with highest marks.

```jsx
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}
```

Expected Output:

```jsx
"Anubhav"
```

---

### 12. Sum of Object Values

Find total salary.

```jsx
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}
```

Expected Output:

```jsx
4500
```

---

### 13. Nested Object Access

Print:

- city
- pincode

```jsx
const user = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}
```

---

### 14. Object Method Practice

Create an object with:

- name
- marks
- method called `getResult`

If marks > 40:

```jsx
"Pass"
```

else:

```jsx
"Fail"
```

---

### 15. Convert Array to Object

Convert this array into an object.

```jsx
const arr = ["name", "Anubhav", "age", 24]
```

Expected Output:

```jsx
{
  name: "Anubhav",
  age: 24
}
```

---

# Harder Practice Questions

### 16. Frequency Counter

Count frequency of each character.

Input:

```jsx
"banana"
```

Expected Output:

```jsx
{
  b:1,
  a:3,
  n:2
}
```

---

### 17. Group By Property

Group users by age.

```jsx
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]
```

Expected Output:

```jsx
{
  20: [
    { name: "A", age: 20 },
    { name: "C", age: 20 }
  ],
  21: [
    { name: "B", age: 21 }
  ]
}
```

---

### 18. Deep Property Check

Check whether this property exists:

```jsx
"user.address.city"
```

inside an object dynamically.

Hint:

Use:

```jsx
split(".")
```

---

### 19. Object Comparison

Check if two objects have same keys and values.

Example:

```jsx
{a:1,b:2}
{a:1,b:2}
```

Expected Output:

```jsx
true
```

---

### 20. Remove Duplicate Objects

Remove duplicate objects from array based on `id`.

```jsx
[
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]
```

Expected Output:

```jsx
[
  {id:1,name:"A"},
  {id:2,name:"B"}
]
```

end
