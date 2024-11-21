## **Bölüm 2: DOM Seçicileri**

DOM manipülasyonu yapmadan önce, DOM üzerindeki öğeleri seçmek gerekir. Bu işlem, JavaScript'in DOM seçici yöntemleriyle yapılır. Bu bölümde, DOM'daki öğeleri seçmenin farklı yollarını ve her bir yöntemin nasıl çalıştığını örneklerle açıklayacağız.

---

### **1. DOM Seçicileri Nedir?**
DOM seçicileri, web sayfasındaki belirli öğeleri (örneğin, bir `div`, bir `p` etiketi veya bir `input`) bulmamızı sağlar. Seçilen öğeler üzerinde değişiklik yapabilir, olaylar ekleyebilir veya stillerini değiştirebiliriz.

---

### **2. Seçici Yöntemler**

#### **a. `getElementById`**
- Belirli bir **id** değeri olan tek bir öğeyi seçer.
- Hızlıdır ve genellikle benzersiz öğeleri seçmek için kullanılır.

**Örnek:**
HTML:
```html
<div id="myDiv">Hello World!</div>
```

JavaScript:
```javascript
const element = document.getElementById("myDiv");
console.log(element.textContent); // Çıktı: Hello World!
```

---

#### **b. `getElementsByClassName`**
- Aynı **class** adına sahip birden fazla öğeyi seçer ve bir **HTMLCollection** döndürür.
- **HTMLCollection**, bir diziye benzer, ancak tam olarak bir dizi değildir.

**Örnek:**
HTML:
```html
<div class="myClass">First</div>
<div class="myClass">Second</div>
```

JavaScript:
```javascript
const elements = document.getElementsByClassName("myClass");
console.log(elements[0].textContent); // Çıktı: First
console.log(elements[1].textContent); // Çıktı: Second
```

---

#### **c. `getElementsByTagName`**
- Belirli bir **etiket adı** ile eşleşen tüm öğeleri seçer ve bir **HTMLCollection** döndürür.

**Örnek:**
HTML:
```html
<p>First paragraph</p>
<p>Second paragraph</p>
```

JavaScript:
```javascript
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent); // Çıktı: First paragraph
console.log(paragraphs[1].textContent); // Çıktı: Second paragraph
```

---

#### **d. `querySelector`**
- CSS seçicisi kullanarak DOM'daki **ilk eşleşen öğeyi** seçer.
- Çok esnek bir yöntemdir.

**Örnek:**
HTML:
```html
<div class="container">
  <p id="first">First paragraph</p>
  <p>Second paragraph</p>
</div>
```

JavaScript:
```javascript
const firstParagraph = document.querySelector("#first"); // ID'ye göre seçiyor
console.log(firstParagraph.textContent); // Çıktı: First paragraph
```

- **CSS Seçici Örnekleri:**
  - `.className` → Belirli bir class.
  - `#idName` → Belirli bir id.
  - `tagName` → Belirli bir etiket.

---

#### **e. `querySelectorAll`**
- CSS seçicisi kullanarak DOM'daki **tüm eşleşen öğeleri** seçer ve bir **NodeList** döndürür.
- `forEach` döngüsü ile tüm elemanlar üzerinde kolayca işlem yapılabilir.

**Örnek:**
HTML:
```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
```

JavaScript:
```javascript
const boxes = document.querySelectorAll(".box"); // Tüm ".box" class'lı elemanları seç
boxes.forEach((box) => {
  console.log(box.textContent);
});
// Çıktı:
// Box 1
// Box 2
// Box 3
```

---

### **3. Seçicilerle Çalışma Örnekleri**

#### **Örnek 1: Bir Elemanın Stilini Değiştirme**
HTML:
```html
<p id="text">Hello World!</p>
```

JavaScript:
```javascript
const text = document.getElementById("text");
text.style.color = "red"; // Yazı rengini kırmızı yap
```

#### **Örnek 2: Birden Fazla Elemanı Güncelleme**
HTML:
```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

JavaScript:
```javascript
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.style.fontWeight = "bold"; // Her elemanın yazı tipi kalın olacak
});
```

#### **Örnek 3: Bir Etiketi Dinamik Olarak Seçme**
HTML:
```html
<div>
  <h1>Hello</h1>
  <p>Paragraph</p>
</div>
```

JavaScript:
```javascript
const header = document.querySelector("div > h1"); // div'in içindeki ilk h1 etiketini seç
console.log(header.textContent); // Çıktı: Hello
```

---

### **4. Seçici Kullanımındaki Dikkat Edilmesi Gerekenler**

1. **`getElementById` ve `querySelector` Farkı:**
   - `getElementById` daha hızlıdır, ancak yalnızca ID seçimi yapabilir.
   - `querySelector` esnektir ve CSS seçicileri kullanabilir.

2. **HTMLCollection vs NodeList:**
   - **`getElementsByClassName` ve `getElementsByTagName`**: HTMLCollection döndürür.
   - **`querySelectorAll`**: NodeList döndürür ve `forEach` ile daha kolay kullanılabilir.

3. **Eleman Bulunamazsa:**
   - Eğer bir seçici, DOM'da uygun bir öğe bulamazsa `null` döndürür. Bu nedenle kontrol yapılması önerilir:
   ```javascript
   const element = document.getElementById("missingId");
   if (element) {
       console.log("Element bulundu");
   } else {
       console.log("Element bulunamadı");
   }
   ```

---

### **Sonuç**
Bu bölümde, DOM'daki öğeleri seçmenin farklı yollarını öğrendik. Şimdi bu seçicileri kullanarak öğeleri manipüle etmeye başlayabiliriz. Bir sonraki bölümde, seçilen öğeler üzerinde nasıl işlem yapılacağını (metin değiştirme, stil ekleme, sınıf yönetimi vb.) ele alacağız.

Devam edelim mi? 😊