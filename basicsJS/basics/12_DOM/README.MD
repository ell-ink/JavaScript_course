# Работа с DOM
JavaScript предоставляет множество методов для работы с Document Object Model или сокращенно DOM (объектной моделью документа).

**Для навигации по DOM-дереву следует иметь представление о следующих понятиях:**

**1. Корневые элементы:**

* document.documentElement (самый верхний узел, соответствует тегу <html>, включает в себя всё содержимое документа);
* document.head (заголовочная часть web-страницы);
* document.body (тело документа, содержимое тега <body>).

**2. Узел-родитель (parentNode – непосредственный потомок конкретного объекта)**

**3. Дети, потомки:**

* childNodes (коллекция потомков определенного объекта);
* firstChild (первый ребенок);
* lastChild (последний дочерний элемент).

**4. Соседи (один уровень иерархии):**
* nextSibling (следующий сосед того же родителя);
* previousSibling (предыдущий элемент внутри родителя, находящийся на том же уровне, что и изначальный).

В большинстве случаев нам не особо нужны дополнительные текстовые объекты DOM-дерева, а требуется лишь список тегов. Для этого имеются соответствующие инструменты (свойства):
* **Свойство children** - список детей HTML-элемента, которые сами являются тегами;
* **Свойство firstElementChild** – первый потомок;
* **Свойство lastElementChild** – последний ребенок;
* **Свойство previousElementSibling** – предыдущий сосед элемента;
* **Свойство nextElementSibling** – следующий сосед элемента;
* **Свойство parentElement** – родительский тег.


