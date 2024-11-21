## **Bölüm 5: Dinamik DOM Manipülasyonu**

Bu bölümde, dinamik olarak DOM'a yeni öğeler eklemeyi, mevcut öğeleri silmeyi ve öğelerin yerini değiştirmeyi öğreneceğiz. Dinamik DOM manipülasyonu, modern web uygulamalarında önemli bir rol oynar, çünkü kullanıcı etkileşimlerine göre sayfayı güncellemek için kullanılır.

---

### **1. Yeni Elemanlar Oluşturmak**

Yeni bir DOM öğesi oluşturmak için **`document.createElement`** kullanılır.

#### **a. Temel Kullanım**
```javascript
const newElement = document.createElement("div"); // Yeni bir <div> oluştur
newElement.textContent = "Hello, World!"; // İçeriği belirle
console.log(newElement); // <div>Hello, World!</div>
```

---

#### **b. Yeni Elemanı DOM'a Eklemek**
Bir öğe oluşturduktan sonra, bunu DOM'a eklemek için **`appendChild`** veya **`append`** kullanılır.

**Örnek:**
HTML:
```html
<div id="container"></div>
```

JavaScript:
```javascript
const container = document.getElementById("container");

const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

container.appendChild(newDiv); // Yeni div'i "container" içine ekler
```

**Sonuç:**
```html
<div id="container">
  <div>This is a new div</div>
</div>
```

---

#### **c. `append` ile Çoklu Eleman Ekleme**
`appendChild` yalnızca bir öğeyi eklerken, `append` ile birden fazla öğe veya metin eklenebilir.

**Örnek:**
```javascript
const container = document.getElementById("container");

const newDiv = document.createElement("div");
newDiv.textContent = "New div";

const textNode = document.createTextNode("Some text");

container.append(newDiv, textNode);
```

---

#### **d. `innerHTML` Kullanarak Eleman Eklemek**
`innerHTML`, bir elemanın içeriğini doğrudan değiştirmek için kullanılabilir. Ancak, **XSS (Cross-Site Scripting)** gibi güvenlik sorunlarına yol açabileceği için dikkatli kullanılmalıdır.

**Örnek:**
```javascript
container.innerHTML = "<p>This is a new paragraph</p>";
```

---

### **2. Dinamik Elemanlara Özellik ve Stil Ekleme**

#### **a. Özellik Ekleme veya Güncelleme**
Bir elemanın özelliklerini **`setAttribute`** ile ekleyebilir veya güncelleyebilirsiniz.

**Örnek:**
```javascript
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
newDiv.setAttribute("class", "highlight");
```

#### **b. Stil Ekleme**
```javascript
newDiv.style.color = "blue";
newDiv.style.fontSize = "20px";
```

---

### **3. Elemanları Silmek**

#### **a. `removeChild`**
Bir elemanı, ebeveyn öğesi üzerinden kaldırabilirsiniz.

**Örnek:**
HTML:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("list");
const item = list.children[1]; // İkinci elemanı seç
list.removeChild(item); // İkinci elemanı kaldır
```

**Sonuç:**
```html
<ul id="list">
  <li>Item 1</li>
</ul>
```

---

#### **b. `remove`**
Modern tarayıcılarda **`remove`** metodu doğrudan elemanı kaldırabilir.

**Örnek:**
```javascript
const item = document.querySelector("li");
item.remove();
```

---

### **4. Elemanları Değiştirmek**

#### **`replaceChild`**
Bir elemanı başka bir elemanla değiştirmek için kullanılır.

**Örnek:**
HTML:
```html
<ul id="list">
  <li>Old Item</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("list");
const oldItem = list.querySelector("li");

const newItem = document.createElement("li");
newItem.textContent = "New Item";

list.replaceChild(newItem, oldItem);
```

**Sonuç:**
```html
<ul id="list">
  <li>New Item</li>
</ul>
```

---

### **5. Elemanların Yerini Değiştirmek**

#### **a. `insertBefore`**
Bir öğeyi, başka bir öğenin önüne yerleştirir.

**Örnek:**
HTML:
```html
<ul id="list">
  <li id="first">First Item</li>
  <li id="second">Second Item</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("list");
const firstItem = document.getElementById("first");
const newItem = document.createElement("li");
newItem.textContent = "Inserted Item";

list.insertBefore(newItem, firstItem);
```

**Sonuç:**
```html
<ul id="list">
  <li>Inserted Item</li>
  <li id="first">First Item</li>
  <li id="second">Second Item</li>
</ul>
```

---

### **6. Şablonlarla (Templates) Dinamik İçerik**

#### **`template` Kullanımı**
HTML5 `template` etiketi, DOM'da render edilmeden saklanan bir şablon içeriği oluşturmanıza olanak tanır.

**Örnek:**
HTML:
```html
<template id="myTemplate">
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</template>

<div id="container"></div>
```

JavaScript:
```javascript
const template = document.getElementById("myTemplate");
const container = document.getElementById("container");

const clone = template.content.cloneNode(true); // Şablonu klonla
container.appendChild(clone); // DOM'a ekle
```

**Sonuç:**
```html
<div id="container">
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</div>
```

---

### **7. Elemanların Yerine `Fragment` Kullanımı**

#### **DocumentFragment**
Birçok öğeyi tek bir işlemle DOM'a eklemek için kullanılır. Bu, performansı artırır.

**Örnek:**
```javascript
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}

const list = document.getElementById("list");
list.appendChild(fragment);
```

**Sonuç:**
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

---

### **Sonuç**

Bu bölümde, DOM'a yeni öğeler eklemeyi, mevcut öğeleri kaldırmayı, değiştirmeyi ve yerini değiştirmeyi öğrendik. Ayrıca, daha gelişmiş yöntemlerle (template ve fragment) nasıl verimli çalışılacağını ele aldık. Bir sonraki bölümde, DOM'da gezinme (navigasyon) ve ebeveyn/çocuk ilişkileri üzerinde duracağız.

Devam edelim mi? 😊