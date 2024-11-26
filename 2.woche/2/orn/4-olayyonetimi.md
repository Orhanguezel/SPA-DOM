## **Bölüm 4: DOM Olay Yönetimi (Event Handling)**

Bu bölümde, DOM'daki öğelerin kullanıcı etkileşimlerine nasıl tepki verdiğini inceleyeceğiz. Olay yönetimi, kullanıcıların bir web sayfasında gerçekleştirdiği işlemlere (örneğin, tıklamalar, klavye girişleri, fare hareketleri) yanıt vermek için kullanılır.

---

### **1. Olay (Event) Nedir?**
- **Olay (Event)**, bir kullanıcının veya tarayıcının gerçekleştirdiği bir işlemdir.
  - Örneğin: Bir düğmeye tıklama, bir metin kutusuna yazma, bir sayfanın yüklenmesi.
- Olaylar, DOM öğeleri ile birlikte çalışır ve JavaScript kullanılarak yönetilir.

---

### **2. Bir Olayın Eklenmesi**

DOM olaylarına yanıt vermek için genellikle `addEventListener` metodu veya HTML'deki inline olay işleyicileri kullanılır.

#### **a. `addEventListener` ile Olay Ekleme**
- En yaygın yöntemdir.
- Bir öğeye belirli bir olay türü için bir dinleyici (listener) ekler.

**Örnek:**
HTML:
```html
<button id="myButton">Click Me</button>
```

JavaScript:
```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

---

#### **b. Inline Olay İşleyicileri**
- HTML içinde olay işleyicisi yazılır.
- Kullanılması önerilmez çünkü kodunuzu karışık hale getirir.

**Örnek:**
HTML:
```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

---

### **3. Yaygın Kullanılan Olay Türleri**

#### **a. Fare Olayları**
| **Olay**       | **Açıklama**                           |
|-----------------|---------------------------------------|
| `click`         | Öğeye tıklanır.                       |
| `dblclick`      | Öğeye çift tıklanır.                  |
| `mousedown`     | Fare tıklaması başlar.                |
| `mouseup`       | Fare tıklaması bırakılır.             |
| `mousemove`     | Fare hareket eder.                    |
| `mouseover`     | Fare öğenin üzerine gelir.            |
| `mouseout`      | Fare öğeden ayrılır.                  |

**Örnek:**
```javascript
const button = document.getElementById("myButton");

button.addEventListener("mouseover", () => {
  console.log("Mouse is over the button!");
});
```

---

#### **b. Klavye Olayları**
| **Olay**       | **Açıklama**                           |
|-----------------|---------------------------------------|
| `keydown`       | Bir tuşa basıldığında tetiklenir.      |
| `keyup`         | Bir tuş bırakıldığında tetiklenir.     |
| `keypress`      | (Eski) Tuşa basma olayını dinler.      |

**Örnek:**
HTML:
```html
<input type="text" id="textInput" placeholder="Type something">
```

JavaScript:
```javascript
const input = document.getElementById("textInput");

input.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
```

---

#### **c. Form Olayları**
| **Olay**       | **Açıklama**                           |
|-----------------|---------------------------------------|
| `submit`        | Form gönderildiğinde tetiklenir.       |
| `change`        | Bir form öğesinin değeri değiştiğinde. |
| `focus`         | Bir öğe odaklandığında tetiklenir.     |
| `blur`          | Odak kaybolduğunda tetiklenir.         |

**Örnek:**
HTML:
```html
<form id="myForm">
  <input type="text" id="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
```

JavaScript:
```javascript
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Formun varsayılan gönderim davranışını engeller
  console.log("Form submitted!");
});
```

---

#### **d. Yükleme ve Pencere Olayları**
| **Olay**       | **Açıklama**                           |
|-----------------|---------------------------------------|
| `load`          | Sayfa veya bir öğe tamamen yüklendiğinde. |
| `resize`        | Pencerenin boyutu değiştiğinde.        |
| `scroll`        | Kullanıcı sayfada kaydırma yaptığında. |

**Örnek:**
```javascript
window.addEventListener("resize", () => {
  console.log("Window resized!");
});
```

---

### **4. Olay Nesnesi (`event`)**

Bir olay tetiklendiğinde, bir `event` nesnesi otomatik olarak olay işleyiciye aktarılır. Bu nesne, olay hakkında detaylı bilgi sağlar.

#### **Örnek: `event` Nesnesi Kullanımı**
```javascript
document.addEventListener("click", (event) => {
  console.log("Olay tipi:", event.type); // click
  console.log("Tıklanan öğe:", event.target); // Tıklanan öğeyi döndürür
});
```

#### **`event.preventDefault()`**
- Olayın varsayılan davranışını engeller.

**Örnek:**
Bir linkin tıklanmasını engelleme:
```javascript
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link tıklanması engellendi!");
});
```

---

#### **`event.stopPropagation()`**
- Olayın, diğer öğelere yayılmasını (bubbling) durdurur.

**Örnek:**
HTML:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

JavaScript:
```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked!");
});

child.addEventListener("click", (event) => {
  event.stopPropagation(); // Olayın parent öğeye yayılmasını durdurur
  console.log("Child clicked!");
});
```

**Çıktı:**
- "Child clicked!" (Sadece bu tetiklenir, "Parent clicked!" çalışmaz.)

---

### **5. Bir Olayı Kaldırma**

#### **`removeEventListener`**
Bir öğeye eklenen bir olay dinleyicisini kaldırır.

**Örnek:**
```javascript
function handleClick() {
  console.log("Button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// Olayı kaldır
button.removeEventListener("click", handleClick);
```

---

### **6. Delegasyon ile Olay Yönetimi**

Bazı durumlarda, birden fazla öğe için olay eklemek yerine, olayları tek bir üst öğeye eklemek daha verimli olabilir. Bu yönteme **event delegation** denir.

#### **Örnek:**
HTML:
```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Tıklanan öğe:", event.target.textContent);
  }
});
```

---

### **Sonuç**
Bu bölümde, DOM'daki olayları nasıl yöneteceğimizi, olay türlerini ve `event` nesnesini ele aldık. Bir sonraki bölümde, **dinamik DOM manipülasyonu** ve sayfaya yeni öğeler ekleme/silme işlemlerini daha detaylı inceleyeceğiz.

Devam edelim mi? 😊