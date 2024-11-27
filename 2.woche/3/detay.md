### Tarayıcı: **Document, Events, Interfaces** - **Eventlere Giriş**  
---

#### **Event Bubbling (Olay Kabarcıklanması) ve Capturing (Yakalama)**

---

### **Örnek: Basit bir Event Bubbling Örneği**
Aşağıdaki örneği inceleyelim: 

HTML'de bir `<div>` elementine bir olay (event) bağlanmış. Eğer içindeki `<em>` veya `<code>` elementine tıklarsak bile bu olay tetikleniyor:

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

**Soru:** Neden `<div>` üzerindeki olay, `<em>` veya `<code>` elementine tıklanınca da çalışıyor?  
**Cevap:** İşte bu, **bubbling (kabarcıklanma)** prensibinin bir sonucudur.

---

### **Event Bubbling Nedir?**
Bir olay (örneğin, `click`), DOM hiyerarşisinde aşağıdaki şekilde yayılır:

1. Olay önce tıklanan (veya tetiklenen) elementte çalışır.
2. Daha sonra, elementin ebeveynine geçer ve onun üzerinde çalışır.
3. Bu süreç, en dıştaki `document` elementine kadar devam eder.

#### Örnek:
```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

Yukarıdaki yapıyı düşündüğümüzde:  
- `<p>` elementine tıkladığımızda şu sıralamayı göreceğiz:  
  **p → div → form**

Bu sürece **bubbling** denir, çünkü olaylar, suyun içindeki bir kabarcık gibi içten dışa doğru hareket eder.

---

### **Bubbling Hangi Olaylarda Çalışır?**
Çoğu olay bubbling ile işler. Ancak bazı istisnalar vardır:
- **Focus (odaklanma) olayları bubbling yapmaz.**

---

### **`event.target` ve `event.currentTarget` Farkı**
Bir elementin üzerine olay bağlandığında, olayın nerede başladığını ve nerede çalıştığını ayırt etmek için iki önemli özellik vardır:

- **`event.target`:** Olayın başlatıldığı (tetiklendiği) elementtir. Bu, DOM ağacındaki en derin elementtir.
- **`event.currentTarget` (veya `this`):** Olayın bağlı olduğu (dinlendiği) elementtir.

#### Örnek:
```javascript
document.querySelector('form').onclick = function(event) {
  console.log('Target:', event.target); // Tıklanan gerçek element
  console.log('Current Target:', event.currentTarget); // Olayın bağlandığı element
};
```

---

### **Bubbling'i Durdurma: `event.stopPropagation()`**
Olaylar varsayılan olarak bubbling yapar. Ancak bu davranışı durdurmak isterseniz, `event.stopPropagation()` kullanabilirsiniz.

#### Örnek:
```html
<body onclick="alert('Body clicked')">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

Bu durumda:
- Butona tıkladığınızda sadece "Click me" yazdırılır.
- **Body üzerindeki olay tetiklenmez.**

> **Not:** Bubbling'i durdurmak genellikle tavsiye edilmez. Çünkü olayların yukarıdaki elementlere ulaşmasına gerek duyulabilir.

---

### **Capturing (Olay Yakalama)**

Bubbling'in tersi olarak **capturing**, olayın yukarıdan aşağı doğru DOM ağacında ilerlediği süreçtir.  

**DOM Event'lerinde Üç Aşama Vardır:**
1. **Capturing Phase:** Olay, kökten (`document`) başlayarak hedef elemente iner.
2. **Target Phase:** Olay hedef elemente ulaşır.
3. **Bubbling Phase:** Olay hedef elementten başlayarak yukarı doğru hareket eder.

#### Capturing'in Aktif Edilmesi:
Varsayılan olarak olaylar bubbling aşamasında çalışır. Eğer capturing aşamasında bir olay bağlamak isterseniz, `addEventListener`'ın üçüncü parametresine `true` eklemeniz gerekir:

```javascript
element.addEventListener('click', handler, true);
```

---

### **Hem Capturing Hem Bubbling'in Kullanımı**

Aşağıdaki kod, hem capturing hem de bubbling aşamasını gösterir:

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

**Sonuç:**  
- `<p>`'ye tıklarsanız şu sırayı görürsünüz:  
  **HTML → BODY → FORM → DIV → P (Capturing)**  
  **P → DIV → FORM → BODY → HTML (Bubbling)**

> **Not:** Bir element hem capturing hem de bubbling aşamasında tetiklenir.

---

### **`event.stopPropagation()` ve Capturing**
Eğer bir olay, capturing aşamasında `event.stopPropagation()` ile durdurulursa, bubbling aşamasına geçiş olmaz.

---

### **Sonuç**
1. Olaylar genellikle bubbling ile işler.
2. **`event.target`:** Olayın başladığı element.
   **`event.currentTarget`:** Olayın bağlı olduğu element.
3. **Capturing ve Bubbling:** Bir olay önce yukarıdan hedef elemente iner (capturing), sonra hedef elementten yukarı doğru hareket eder (bubbling).
4. **`event.stopPropagation()`:** Bubbling veya capturing'i durdurur. Ancak bu yöntem dikkatli kullanılmalıdır.  
5. **Event Delegation:** Bubbling mekanizmasını kullanarak dinleyiciyi bir ebeveyn elemente bağlayabilirsiniz.

Bubbling ve capturing, DOM'da esnek ve performanslı bir şekilde olayları yönetmek için kullanılır.