## **Bölüm 3: DOM Öğelerini Manipüle Etme**

Bu bölümde, DOM'da seçtiğimiz öğeler üzerinde nasıl değişiklikler yapabileceğimizi öğreneceğiz. Bu, içeriğin güncellenmesini, stillerin değiştirilmesini, sınıf ekleme/çıkarma gibi işlemleri içerecek. Ayrıca her konuyu örneklerle detaylandıracağız.

---

### **1. Öğenin Metnini ve HTML İçeriğini Değiştirme**

#### **a. `textContent`**
- Bir öğenin yalnızca **metin içeriğini** günceller.
- HTML etiketlerini işlemez; sadece düz metin olarak ele alır.

**Örnek:**
HTML:
```html
<p id="myText">Original Text</p>
```

JavaScript:
```javascript
const textElement = document.getElementById("myText");
textElement.textContent = "Updated Text"; // Metni değiştirir
console.log(textElement.textContent); // Çıktı: Updated Text
```

---

#### **b. `innerHTML`**
- Bir öğenin **HTML içeriğini** günceller.
- HTML etiketlerini işleyebilir.

**Örnek:**
HTML:
```html
<div id="myDiv">Old Content</div>
```

JavaScript:
```javascript
const divElement = document.getElementById("myDiv");
divElement.innerHTML = "<strong>New Content</strong>"; // HTML içeriğini değiştirir
console.log(divElement.innerHTML); // Çıktı: <strong>New Content</strong>
```

#### **Fark: `textContent` vs `innerHTML`**
| **`textContent`**                     | **`innerHTML`**                     |
|---------------------------------------|-------------------------------------|
| Sadece düz metin içerir.              | HTML etiketlerini işler.            |
| Güvenlidir, kötü amaçlı kod çalıştırmaz. | XSS saldırılarına açık olabilir.    |

---

### **2. Stil ve Sınıf Değiştirme**

#### **a. `style` Özelliği ile CSS Değiştirme**
- Bir öğenin `style` özelliği ile CSS kurallarını değiştirebilirsiniz.

**Örnek:**
HTML:
```html
<p id="styledText">This is a paragraph.</p>
```

JavaScript:
```javascript
const styledText = document.getElementById("styledText");
styledText.style.color = "blue"; // Yazı rengini mavi yapar
styledText.style.fontSize = "20px"; // Yazı boyutunu değiştirir
```

---

#### **b. `classList` ile Sınıf Ekleme/Çıkarma**
- `classList` özelliği, bir öğenin CSS sınıflarını yönetmek için kullanılır.

**Yöntemler:**
1. `add`: Sınıf ekler.
2. `remove`: Sınıfı kaldırır.
3. `toggle`: Sınıf varsa kaldırır, yoksa ekler.
4. `contains`: Belirli bir sınıfın var olup olmadığını kontrol eder.

**Örnek:**
HTML:
```html
<div id="myDiv" class="box"></div>
```

JavaScript:
```javascript
const div = document.getElementById("myDiv");

// Sınıf ekle
div.classList.add("highlight");

// Sınıf kontrol et
console.log(div.classList.contains("highlight")); // Çıktı: true

// Sınıf çıkar
div.classList.remove("box");

// Sınıf ekle/çıkar (toggle)
div.classList.toggle("active");
```

---

### **3. Öğelerin Özelliklerini Güncelleme**

DOM öğelerinin özelliklerini (attributes) değiştirmek veya güncellemek için aşağıdaki yöntemleri kullanabilirsiniz.

#### **a. `getAttribute` ve `setAttribute`**
- **`getAttribute`**: Belirli bir özelliğin değerini alır.
- **`setAttribute`**: Belirli bir özelliğin değerini günceller veya ekler.

**Örnek:**
HTML:
```html
<img id="myImage" src="old-image.jpg" alt="Old Image">
```

JavaScript:
```javascript
const img = document.getElementById("myImage");

// Özellik değerini al
console.log(img.getAttribute("src")); // Çıktı: old-image.jpg

// Özellik değerini değiştir
img.setAttribute("src", "new-image.jpg");
console.log(img.getAttribute("src")); // Çıktı: new-image.jpg
```

#### **b. Doğrudan Özelliklere Erişim**
Özelliklere doğrudan erişmek de mümkündür:
```javascript
img.src = "another-image.jpg";
img.alt = "Updated Alt Text";
```

---

### **4. Öğeleri Eklemek ve Kaldırmak**

#### **a. `appendChild`**
Bir öğeye yeni bir alt öğe eklemek için kullanılır.

**Örnek:**
HTML:
```html
<ul id="myList">
  <li>Item 1</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("myList");
const newItem = document.createElement("li"); // Yeni bir öğe oluştur
newItem.textContent = "Item 2"; // İçeriğini belirle
list.appendChild(newItem); // Listeye ekle
```

---

#### **b. `removeChild`**
Bir öğeyi mevcut bir öğeden kaldırır.

**Örnek:**
HTML:
```html
<ul id="myList">
  <li id="item1">Item 1</li>
  <li id="item2">Item 2</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("myList");
const itemToRemove = document.getElementById("item2");
list.removeChild(itemToRemove); // Item 2'yi kaldır
```

---

#### **c. `replaceChild`**
Bir öğeyi başka bir öğe ile değiştirir.

**Örnek:**
HTML:
```html
<ul id="myList">
  <li id="item1">Item 1</li>
  <li id="item2">Item 2</li>
</ul>
```

JavaScript:
```javascript
const list = document.getElementById("myList");
const newItem = document.createElement("li");
newItem.textContent = "Updated Item 2";

const oldItem = document.getElementById("item2");
list.replaceChild(newItem, oldItem); // Item 2 yerine yeni öğeyi koy
```

---

### **5. Dinamik Eleman Eklemek (Template Literals ile)**
Dinamik olarak HTML içeriği eklemek için `innerHTML` kullanılabilir. Ancak dikkatli olunmalıdır çünkü kötü amaçlı kodlara (XSS) açık olabilir.

**Örnek:**
HTML:
```html
<div id="container"></div>
```

JavaScript:
```javascript
const container = document.getElementById("container");
container.innerHTML = `
  <h2>New Heading</h2>
  <p>This is a new paragraph.</p>
`;
```

---

### **6. Stil Çakışmalarını Önlemek (Inline vs Class)**
- **Inline Stil:** `style` özelliğiyle doğrudan uygulanır.
- **CSS Class:** Daha organize ve sürdürülebilir bir çözüm sunar.

**Örnek:**
```javascript
const element = document.getElementById("myElement");

// Inline stil
element.style.color = "red";

// Class kullanımı
element.classList.add("highlight"); // CSS dosyasında "highlight" sınıfı tanımlanmıştır

```

---

### **7. Öğeleri Gizleme ve Gösterme**

#### **a. Görünürlüğü Değiştirme**
- `style.display` kullanarak bir öğeyi gizleyebilir veya gösterebilirsiniz.

**Örnek:**
```javascript
const element = document.getElementById("myElement");

// Gizle
element.style.display = "none";

// Göster
element.style.display = "block";
```

#### **b. Sınıf ile Kontrol**
CSS sınıfları kullanarak görünürlüğü daha kontrollü şekilde yönetebilirsiniz.

**CSS:**
```css
.hidden {
  display: none;
}
```

**JavaScript:**
```javascript
element.classList.add("hidden"); // Gizler
element.classList.remove("hidden"); // Gösterir
```

---

### **Sonuç**
Bu bölümde, DOM üzerindeki seçili öğelerin metin içeriğini değiştirme, stil ve sınıf ekleme/çıkarma, özellik yönetimi, ve öğeleri ekleme/kaldırma işlemlerini öğrendik. Bir sonraki bölümde, **olay yönetimi** ve kullanıcı etkileşimleri ile DOM manipülasyonunu ele alacağız.

Devam edelim mi? 😊