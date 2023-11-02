# Работа с DOM
JavaScript предоставляет множество методов для работы с Document Object Model или сокращенно DOM (объектной моделью документа).

Для создания элементов используется метод createElement(tag) объекта Document:
```
const listEl = document.createElement('ul')
```

Такой способ создания элементов называется императивным. Он является не очень удобным и слишком многословным.

## Способы получения элементов
```
const box = document.getElementById("box");
```

```
const buttons = document.getElementsByTagName("button");
console.log(buttons); // pseudo-array
console.log(buttons[1]);
```

```
const btn2 = document.getElementsByTagName("button")[2];
```

```
const circle = document.getElementsByClassName("circle");
```

```
const hearts = document.querySelectorAll(".heart");
```

Мы можем изменять стили элементов:
```
buttons[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
```

