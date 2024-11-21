## **Bölüm 7: DOM Performans Optimizasyonu**

Bu bölümde, DOM manipülasyonu sırasında performansı artırmak ve büyük projelerde daha verimli çalışmak için kullanabileceğiniz teknikleri inceleyeceğiz. DOM manipülasyonu, dikkatli yapılmadığında yavaş çalışabilir ve sayfa yanıt verebilirliğini olumsuz etkileyebilir.

---

### **1. Neden Performans Optimizasyonu Gerekir?**

- **DOM Ağacı Güncellemeleri:** DOM'un her güncellenmesi tarayıcı tarafından yeniden çizime (repaint) veya düzenlemeye (reflow) neden olur. Bu işlemler CPU yoğunlukludur.
- **Büyük Veri Setleri:** Dinamik olarak çok fazla öğe eklemek, performans sorunlarına yol açabilir.
- **Etkinlik Dinleyicileri:** Fazla sayıda dinleyici kullanımı belleği tüketebilir ve uygulamanın yavaşlamasına neden olabilir.

---

### **2. Performans Optimizasyonu Teknikleri**

#### **a. DOM Güncellemelerini Minimize Edin**
DOM'u mümkün olduğunca az sayıda güncelleyin. Her bir DOM güncellemesi maliyetlidir.

**Kötü Örnek:**
```javascript
const list = document.getElementById("list");
for (let i = 0; i < 1000; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  list.appendChild(item); // Her döngüde DOM güncelleniyor
}
```

**İyi Örnek:**
```javascript
const list = document.getElementById("list");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  fragment.appendChild(item); // DOM yerine fragmente ekleniyor
}

list.appendChild(fragment); // Tek seferde DOM'a ekleniyor
```

---

#### **b. Etkinlik Delegasyonu Kullanın**
Birden fazla öğeye olay eklemek yerine, olayları bir ebeveyn öğeye ekleyerek yönetin.

**Kötü Örnek:**
```javascript
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
});
```

**İyi Örnek:**
```javascript
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    console.log("Button clicked");
  }
});
```

---

#### **c. `innerHTML` Kullanımını Azaltın**
`innerHTML`, kolay bir yöntem olsa da tüm öğeyi yeniden oluşturduğu için performans maliyeti yüksektir.

**Alternatif: `document.createElement`**
```javascript
const div = document.createElement("div");
div.textContent = "Hello, World!";
document.body.appendChild(div);
```

---

#### **d. Stil Güncellemelerini Gruplayın**
Stil değişikliklerini bir arada yapın. Her stil değişikliği bir yeniden düzenleme (reflow) tetikleyebilir.

**Kötü Örnek:**
```javascript
const element = document.getElementById("box");
element.style.width = "100px";
element.style.height = "100px";
element.style.backgroundColor = "blue";
```

**İyi Örnek:**
```javascript
const element = document.getElementById("box");
element.style.cssText = "width: 100px; height: 100px; background-color: blue;";
```

---

#### **e. Gereksiz DOM Seçimlerinden Kaçının**
Bir öğeyi tekrar tekrar seçmek yerine, seçimi bir değişkende saklayın.

**Kötü Örnek:**
```javascript
for (let i = 0; i < 100; i++) {
  document.getElementById("box").textContent = i;
}
```

**İyi Örnek:**
```javascript
const box = document.getElementById("box");
for (let i = 0; i < 100; i++) {
  box.textContent = i;
}
```

---

#### **f. CSS Class'ları Kullanın**
Stil değişiklikleri için doğrudan `style` yerine **CSS sınıflarını** kullanmak daha verimlidir.

**Örnek:**
```css
/* styles.css */
.hidden {
  display: none;
}
```

```javascript
const element = document.getElementById("box");
element.classList.add("hidden"); // Doğrudan stil yerine sınıf ekleme
```

---

### **3. Büyük Veri Setleri ile Çalışma**

#### **a. Sanal Listeleme (Virtualization)**
Büyük veri setlerini göstermek için, yalnızca kullanıcıya görünen kısmı render edin.

**Örnek: React Virtualized veya bir benzeri kütüphane kullanımı.**

#### **b. Asenkron DOM Güncellemeleri**
Büyük bir listeyi tek seferde eklemek yerine, DOM güncellemelerini zaman aralıklarına bölebilirsiniz.

**Örnek:**
```javascript
const list = document.getElementById("list");
let i = 0;

function addItems() {
  const fragment = document.createDocumentFragment();
  for (let j = 0; j < 100; j++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i}`;
    fragment.appendChild(item);
    i++;
  }
  list.appendChild(fragment);

  if (i < 1000) {
    setTimeout(addItems, 0); // Güncellemeleri küçük parçalara böler
  }
}

addItems();
```

---

### **4. Performans Ölçümü**

#### **a. `console.time` ve `console.timeEnd`**
Kodun performansını ölçmek için kullanılır.

**Örnek:**
```javascript
console.time("Add Items");
const list = document.getElementById("list");

for (let i = 0; i < 1000; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

console.timeEnd("Add Items"); // Çıktı: Add Items: xx ms
```

#### **b. Tarayıcı Performans Araçları**
Tarayıcıların performans izleme araçlarını kullanabilirsiniz:
- Chrome DevTools → Performance Sekmesi
- Firefox Performance Profiler

---

### **5. DOM Manipülasyonu ve Frameworkler**

Modern frameworkler (React, Angular, Vue) sanal DOM (virtual DOM) veya reaktif sistemler kullanarak DOM manipülasyonunu optimize eder. Ancak saf JavaScript ile çalışıyorsanız yukarıdaki yöntemleri uygulamak performans sorunlarını büyük ölçüde azaltacaktır.

---

### **Sonuç**

Bu bölümde, DOM manipülasyonu sırasında performansı artırmak için kullanabileceğiniz teknikleri öğrendik:
1. DOM güncellemelerini minimize etmek.
2. Etkinlik delegasyonu kullanmak.
3. Stil değişikliklerini gruplamak.
4. Büyük veri setleriyle verimli çalışmak.

Bir sonraki bölümde, **DOM güvenliği ve XSS (Cross-Site Scripting) gibi sorunlardan nasıl kaçınılacağı** konularını ele alacağız.

Devam edelim mi? 😊