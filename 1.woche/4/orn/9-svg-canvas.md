## **Bölüm 9: SVG ve Canvas ile DOM Manipülasyonu**

Bu bölümde, DOM manipülasyonunun görsel bir boyutunu ele alacağız: **SVG (Scalable Vector Graphics)** ve **Canvas** ile çalışma. Her ikisi de web projelerinde dinamik grafikler oluşturmak için kullanılır, ancak kullanım alanları ve manipülasyon yöntemleri farklıdır.

---

### **1. SVG (Scalable Vector Graphics)**

#### **SVG Nedir?**
- SVG, XML tabanlı bir vektör grafik formatıdır.
- Çizgiler, şekiller, metin ve diğer vektör tabanlı öğeleri destekler.
- Tarayıcıda ölçeklenebilirliği sayesinde yüksek çözünürlüklü grafikler için idealdir.

#### **SVG'nin Avantajları**
- Yüksek çözünürlük.
- CSS ve JavaScript ile kolayca manipüle edilebilir.
- DOM içinde diğer HTML öğeleri gibi davranır.

---

### **2. SVG ile Çalışma**

#### **a. Statik SVG**
Bir SVG'yi HTML içinde tanımlayabilirsiniz.

**Örnek:**
HTML:
```html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

- **`cx`, `cy`:** Çemberin merkezi.
- **`r`:** Çemberin yarıçapı.
- **`fill`:** Çemberin doldurma rengi.

---

#### **b. JavaScript ile Dinamik SVG Oluşturma**
DOM API kullanarak SVG öğeleri oluşturabilir ve ekleyebilirsiniz.

**Örnek:**
```javascript
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "200");

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "100");
circle.setAttribute("cy", "100");
circle.setAttribute("r", "50");
circle.setAttribute("fill", "red");

svg.appendChild(circle);
document.body.appendChild(svg);
```

- **`createElementNS`:** SVG elemanları için gereklidir, çünkü SVG özel bir ad alanına sahiptir.

---

#### **c. SVG'yi Manipüle Etmek**
SVG öğeleri DOM öğeleri gibi manipüle edilebilir.

**Örnek:**
```javascript
circle.setAttribute("fill", "green"); // Rengi yeşil yap
circle.setAttribute("r", "70"); // Yarıçapı büyüt
```

---

#### **d. Animasyon Ekleme**
SVG ile animasyon yapmak için `animate` etiketi veya JavaScript kullanılabilir.

**Örnek:**
HTML:
```html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue">
    <animate attributeName="r" from="50" to="100" dur="2s" repeatCount="indefinite" />
  </circle>
</svg>
```

---

### **3. Canvas API**

#### **Canvas Nedir?**
- **Canvas**, tarayıcıda piksel tabanlı grafikler çizmek için kullanılan bir HTML5 öğesidir.
- Dinamik çizimler, grafikler ve oyunlar için idealdir.

#### **Canvas'ın Avantajları**
- Daha karmaşık grafikler ve oyun mekanikleri için uygundur.
- Piksel tabanlı grafikler sağlar (SVG'nin aksine).

#### **Canvas'ın Dezavantajları**
- CSS veya DOM API ile doğrudan manipüle edilemez.
- Piksel tabanlı olduğu için ölçeklenebilirlik sınırlıdır.

---

### **4. Canvas ile Çalışma**

#### **a. Statik Canvas**
HTML:
```html
<canvas id="myCanvas" width="400" height="400"></canvas>
```

---

#### **b. JavaScript ile Canvas'a Çizim Yapma**
Canvas üzerinde çalışmak için önce bir **çizim bağlamı (context)** oluşturmanız gerekir.

**Örnek:**
```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Dikdörtgen çiz
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 100);

// Çizgi çiz
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 300);
ctx.stroke();
```

---

#### **c. Canvas Şekilleri**
Canvas, temel şekilleri çizmek için çeşitli yöntemler sunar.

| **Şekil**      | **Yöntem**              | **Açıklama**                          |
|-----------------|-------------------------|----------------------------------------|
| Dikdörtgen     | `fillRect(x, y, w, h)`  | Dolgulu bir dikdörtgen çizer.         |
| Çember         | `arc(x, y, r, sAngle, eAngle)` | Çember veya yay çizer.               |
| Çizgi          | `lineTo(x, y)`          | Bir noktadan diğerine çizgi çizer.    |

**Örnek:**
```javascript
// Çember çiz
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
```

---

#### **d. Metin Çizimi**
Canvas üzerine metin yazabilirsiniz.

**Örnek:**
```javascript
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello, Canvas!", 100, 100);
```

---

#### **e. Resim Çizimi**
Canvas, bir resmi çizim yüzeyine eklemek için kullanılabilir.

**Örnek:**
HTML:
```html
<img id="myImage" src="example.jpg" style="display:none;">
```

JavaScript:
```javascript
const img = document.getElementById("myImage");
img.onload = () => {
  ctx.drawImage(img, 50, 50, 200, 200); // Resmi canvas'a çizer
};
```

---

### **5. SVG ve Canvas Karşılaştırması**

| **Özellik**            | **SVG**                               | **Canvas**                            |
|-------------------------|---------------------------------------|---------------------------------------|
| **Grafik Türü**         | Vektör tabanlı (çizgi, şekil)         | Piksel tabanlı                        |
| **Manipülasyon**        | DOM API ile                         | Çizim bağlamı (context) kullanılır   |
| **Performans**          | Daha yavaş (karmaşık grafiklerde)    | Yüksek performanslı                  |
| **Ölçeklenebilirlik**   | Sonsuz ölçeklenebilir                | Piksel çözünürlüğüyle sınırlıdır      |
| **Kullanım Alanları**   | Logolar, grafikler, animasyonlar      | Oyunlar, görselleştirme, simülasyon  |

---

### **6. Kullanım Alanlarına Göre Seçim**

1. **SVG Kullanımı:**
   - Vektör tabanlı grafikler, ikonlar, logolar.
   - Tarayıcıda dinamik olarak manipüle edilebilir grafikler.
   - CSS ile stil eklemek ve animasyon yapmak gerektiğinde.

2. **Canvas Kullanımı:**
   - Yoğun grafik hesaplamaları gerektiren durumlar (örneğin oyunlar).
   - Karmaşık grafik işlemleri (örneğin 2D fizik simülasyonları).
   - Büyük miktarda dinamik veri işleme gerektiğinde.

---

### **Sonuç**

Bu bölümde, **SVG** ve **Canvas** ile DOM manipülasyonu arasındaki farkları, kullanım yöntemlerini ve ne zaman hangisinin tercih edilmesi gerektiğini öğrendik. Bu iki teknoloji, görsel olarak zengin web uygulamaları geliştirmek için çok önemlidir.

Bir sonraki bölümde, **modern frameworkler (React, Angular, Vue) ile DOM manipülasyonu** konusunu ele alacağız.

Devam edelim mi? 😊