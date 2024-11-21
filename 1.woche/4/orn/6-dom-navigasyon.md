## **Bölüm 6: DOM'da Gezinme ve Ebeveyn/Çocuk İlişkileri**

Bu bölümde, DOM ağacında nasıl gezinileceğini ve öğelerin ebeveyn, çocuk veya kardeş (sibling) ilişkilerinin nasıl ele alınacağını öğreneceğiz. DOM yapısını anlamak ve yönetmek, dinamik web uygulamaları geliştirmek için önemlidir.

---

### **1. DOM Gezinme Kavramı**

Bir web sayfasındaki HTML öğeleri, hiyerarşik bir yapıdadır. Bu yapıdaki öğeler arasında şu ilişkiler bulunur:

- **Ebeveyn (Parent):** Bir öğenin kendisini kapsayan üst öğesi.
- **Çocuk (Child):** Bir öğenin doğrudan altındaki öğeler.
- **Kardeş (Sibling):** Aynı ebeveyne sahip diğer öğeler.

---

### **2. DOM Gezinme Metotları**

#### **a. `parentNode`**
- Bir öğenin ebeveynini döndürür.
- **Not:** Yorumlar ve metin düğümleri de ebeveyn olabilir.

**Örnek:**
HTML:
```html
<div id="parent">
  <p id="child">Hello</p>
</div>
```

JavaScript:
```javascript
const child = document.getElementById("child");
console.log(child.parentNode); // <div id="parent">
```

---

#### **b. `children`**
- Bir öğenin **tüm çocuk öğelerini** (sadece element düğümleri) bir HTMLCollection olarak döndürür.

**Örnek:**
HTML:
```html
<div id="container">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

JavaScript:
```javascript
const container = document.getElementById("container");
console.log(container.children); // HTMLCollection(2) [p, p]
```

---

#### **c. `firstElementChild` ve `lastElementChild`**
- **`firstElementChild`:** Bir öğenin ilk çocuk öğesini döndürür.
- **`lastElementChild`:** Bir öğenin son çocuk öğesini döndürür.

**Örnek:**
```javascript
console.log(container.firstElementChild); // İlk <p>
console.log(container.lastElementChild); // Son <p>
```

---

#### **d. `nextElementSibling` ve `previousElementSibling`**
- **`nextElementSibling`:** Bir öğenin sonraki kardeş öğesini döndürür.
- **`previousElementSibling`:** Bir öğenin önceki kardeş öğesini döndürür.

**Örnek:**
HTML:
```html
<ul>
  <li id="first">First</li>
  <li id="second">Second</li>
  <li id="third">Third</li>
</ul>
```

JavaScript:
```javascript
const second = document.getElementById("second");
console.log(second.nextElementSibling); // Third <li>
console.log(second.previousElementSibling); // First <li>
```

---

#### **e. `childNodes`**
- Bir öğenin **tüm düğümlerini** (metin, yorum ve element düğümleri dahil) döndürür.

**Örnek:**
HTML:
```html
<div id="example">
  <p>Text</p>
  <!-- Comment -->
</div>
```

JavaScript:
```javascript
const example = document.getElementById("example");
console.log(example.childNodes); // NodeList(3) [p, text, comment]
```

---

### **3. DOM Gezinme Örnekleri**

#### **a. Bir Ebeveynin Tüm Çocuklarını Listeleme**
HTML:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("list");
Array.from(list.children).forEach((child) => {
  console.log(child.textContent);
});
// Çıktı:
// Item 1
// Item 2
// Item 3
```

---

#### **b. Sonraki Kardeşe Geçiş**
HTML:
```html
<div>
  <p id="first">First Paragraph</p>
  <p id="second">Second Paragraph</p>
</div>
```

JavaScript:
```javascript
const firstParagraph = document.getElementById("first");
const nextParagraph = firstParagraph.nextElementSibling;
console.log(nextParagraph.textContent); // Çıktı: Second Paragraph
```

---

#### **c. Metin ve Element Düğümlerini Ayırma**
HTML:
```html
<div id="content">
  Text
  <p>Paragraph</p>
</div>
```

JavaScript:
```javascript
const content = document.getElementById("content");
content.childNodes.forEach((node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    console.log("Text Node:", node.textContent.trim());
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    console.log("Element Node:", node.tagName);
  }
});
// Çıktı:
// Text Node: Text
// Element Node: P
```

---

### **4. Faydalı `Node` Türleri**

- **`Node.ELEMENT_NODE (1)`**: Element düğümleri (`<div>`, `<p>`, vb.).
- **`Node.TEXT_NODE (3)`**: Metin düğümleri.
- **`Node.COMMENT_NODE (8)`**: Yorum düğümleri (`<!-- Comment -->`).

**Örnek:**
```javascript
const node = document.getElementById("content").childNodes[0];
if (node.nodeType === Node.TEXT_NODE) {
  console.log("This is a text node");
}
```

---

### **5. DOM Navigasyonunun Kullanım Alanları**

1. **Dinamik İçerik Yönetimi:**
   - Örneğin, bir listeden belirli bir öğeyi seçip güncellemek veya silmek.
2. **Karmaşık Yapılar:**
   - Çok seviyeli iç içe geçmiş menüler veya ağaç yapıları üzerinde gezinmek.
3. **Ebeveyn/Çocuk Kontrolleri:**
   - Bir elemanın belirli bir ebeveyne ait olup olmadığını kontrol etmek.

---

### **6. Örnek: Dinamik Bir Menü Güncelleme**

HTML:
```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

JavaScript:
```javascript
const menu = document.getElementById("menu");

// Yeni bir menü öğesi ekle
const newItem = document.createElement("li");
newItem.textContent = "Blog";
menu.appendChild(newItem);

// İlk öğeyi değiştir
const firstItem = menu.firstElementChild;
firstItem.textContent = "Welcome";

// Son öğeyi kaldır
const lastItem = menu.lastElementChild;
menu.removeChild(lastItem);
```

**Sonuç:**
```html
<ul id="menu">
  <li>Welcome</li>
  <li>About</li>
  <li>Blog</li>
</ul>
```

---

### **Sonuç**

Bu bölümde, DOM ağacında gezinme metotlarını ve ebeveyn/çocuk/kardeş ilişkilerini inceledik. Bu metotlar, dinamik web uygulamaları geliştirmek için temel araçlardır. Bir sonraki bölümde, **DOM performans optimizasyonu** ve büyük projelerde DOM manipülasyonunu nasıl daha verimli hale getirebileceğimizi ele alacağız.

Devam edelim mi? 😊
