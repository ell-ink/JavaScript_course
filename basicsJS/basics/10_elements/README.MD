# Элементы
## Способы получения элементов
* **getElementById()** -	ищет объект по идентификатору
```
const box = document.getElementById("box");
```

* **getElementsByName()** -	позволяет выделить элементы с заданным атрибутом «name»
```
document.getElementsByName('last')
```


* **getElementsByTagName()**	- обнаружение элементов по названию тега
```
const buttons = document.getElementsByTagName("button");
console.log(buttons); // pseudo-array
console.log(buttons[1]);

const btn2 = document.getElementsByTagName("button")[2];
```

* **getElementsByClassName()** -	поиск на основании класса
```
const circle = document.getElementsByClassName("circle");
```

* **querySelectorAll()** - ищет все объекты по заданному селектору
```
const hearts = document.querySelectorAll(".heart");
hearts.forEach(item => {
    console.log(item);
});
```

* **querySelector()** -	находит первый элемент на основании CSS-селектора
```
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
```

## Внесение изменений в DOM-дерево
* **createElement()**	- создание определенного тега
```
const div = document.createElement("div");
```

* **createTextNode()**	- объявление текстового узла с некоторым содержимым
```
const text = document.createTextNode("Hello");
```

* **remove()**	- удаление элемента
```
circle[0].remove();
wrapper.removeChild(hearts[1])
```

* **cloneNode()**	- полная копия желаемого объекта
```
const p = document.querySelector('p');
const pModified = p.cloneNode(true);
```

* **append()**	- добавление узла в конец
```
document.body.append(div);
wrapper.appendChild(div);
```

* **prepend()**	- вставка объекта в начало узла
```
wrapper.prepend(div);
```

* **before()**	- добавление элемента перед узлом
```
hearts[1].before(div);
wrapper.insertBefore(div, hearts[1]);
```

* **after()**	- вставка объекта после узла
```
hearts[1].after(div);
```

* **replaceWith()**	- замена содержимого
```
hearts[0].replaceWith(circle[0]);
wrapper.replaceChild(circle[0], hearts[0]);
```

Мы можем изменять стили элементов:
```
box.style.cssText = "background-color: blue";
buttons[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
```

### Еще методы
* **innerHTML** -	доступ к внутреннему контенту элемента (представлен в виде строки)
```
div.innerHTML = "<h1>Hello World</h1>";
```
* **textContent** -	внутренний текст объекта за вычетом любых тегов
```
div.textContent = "Hello";
```
* **insertAdjacentHTML** - внедрение в документ строки с тегами
```
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
```
