# Флаги и дескрипторы свойств

## Флаги свойств

Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

* **writable** – если *true*, свойство можно изменить, иначе оно только для чтения.
* **enumerable** – если *true*, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
* **configurable** – если *true*, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

Мы ещё не встречали эти атрибуты, потому что обычно они скрыты. Когда мы создаём свойство «обычным способом», все они имеют значение **true**. Но мы можем изменить их в любое время.

Метод **Object.getOwnPropertyDescriptor** позволяет получить полную информацию о свойстве.

Его синтаксис:
```
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

* **obj** - объект, из которого мы получаем информацию
* **propertyName** - имя свойства

**Возвращаемое значение** – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.

```
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

Чтобы изменить флаги, мы можем использовать метод **Object.defineProperty**.

Его синтаксис:

```
Object.defineProperty(obj, propertyName, descriptor)
```

* **obj, propertyName** - объект и его свойство, для которого нужно применить дескриптор
* **descriptor** - применяемый дескриптор

Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение **false**.

Например, здесь создаётся свойство name, все флаги которого имеют значение **false**:

```
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
 ```

 ## Только для чтения

 Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг **writable**:

```
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});
user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'
```

Теперь никто не сможет изменить имя пользователя, если только не обновит соответствующий флаг новым вызовом **defineProperty**.

## Неперечислимое свойство

Теперь добавим собственный метод **toString** к объекту **user**.

Встроенный метод **toString** в объектах – неперечислимый, его не видно в цикле **for..in**. Но если мы напишем свой собственный метод **toString**, цикл **for..in** будет выводить его по умолчанию:

```
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// По умолчанию оба свойства выведутся:
for (let key in user) alert(key); // name, toString
```

Если мы этого не хотим, можно установить для свойства **enumerable:false**. Тогда оно перестанет появляться в цикле **for..in** аналогично встроенному **toString**:

```
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Теперь наше свойство toString пропало из цикла:
for (let key in user) alert(key); // name
```

Неперечислимые свойства также не возвращаются **Object.keys**:

```
alert(Object.keys(user)); // name
```

## Неконфигурируемое свойство

Флаг неконфигурируемого свойства **(configurable:false)** иногда предустановлен для некоторых встроенных объектов и свойств.

Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены.

Например, свойство *Math.PI* – только для чтения, неперечислимое и неконфигурируемое:

```
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

То есть программист не сможет изменить значение *Math.PI* или перезаписать его.

Мы также не можем изменить **writable**.

**Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить. При этом можно изменить значение свойства.**

## Метод Object.defineProperties

Существует метод **Object.defineProperties(obj, descriptors)**, который позволяет определять множество свойств сразу.

Его синтаксис:

```
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
```

Например:

```
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
```

Таким образом, мы можем определить множество свойств одной операцией.

## Object.getOwnPropertyDescriptors

Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом **Object.getOwnPropertyDescriptors(obj)**.

Вместе с **Object.defineProperties** этот метод можно использовать для клонирования объекта вместе с его флагами:

```
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его свойства:

```
for (let key in user) {
  clone[key] = user[key]
}
```
Но это не копирует флаги. Так что если нам нужен клон «получше», предпочтительнее использовать **Object.defineProperties**.

Другое отличие в том, что **for..in** игнорирует символьные и неперечислимые свойства, а **Object.getOwnPropertyDescriptors** возвращает дескрипторы всех свойств.

