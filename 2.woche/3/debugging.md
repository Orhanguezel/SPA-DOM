### Debugging ve Event Propagation (Bubbling ve Delegation)

---

#### **1. Debugging: `Debugger` Kullanımı**
- **Debugger nedir?**  
  Kodda hataları bulmak ve düzeltmek için kullanılan bir araçtır. Tarayıcı konsolunda veya IDE'lerde (VS Code, Chrome DevTools gibi) kullanılabilir.

- **Nasıl kullanılır?**  
  - `debugger;` ifadesini kodun belirli bir satırına ekleyerek kodun o noktada durmasını sağlayabilirsiniz.
  - DevTools’ta **Sources** sekmesine gidin, kod üzerinde tıklayarak bir **breakpoint** belirleyin.
  - Kodunuzu adım adım inceleyebilir, değişkenlerin değerlerini kontrol edebilirsiniz.

---

#### **2. Event Propagation Nedir?**
- Bir olay (örneğin, bir `click`), DOM'daki elementler arasında bir hiyerarşi izler.
- İki ana türü vardır:
  1. **Capturing Phase (Olay Yakalama):**
     - Olay en dıştaki elementten (örneğin, `document`) başlayarak hedef elemente doğru iner.
  2. **Bubbling Phase (Olay Kabarcıklanması):**
     - Olay, hedef elementten başlayarak yukarı doğru DOM ağacında ilerler.

---

#### **3. Event Delegation Nedir?**
- **Mantık:** Birden fazla alt element için olay dinleyici eklemek yerine, olayları bir üst elementte dinlemek.
- **Avantaj:** Performans artışı, çünkü daha az event listener kullanılır.

**Örnek:**

```javascript
// Tek bir event listener kullanarak birçok butonu dinleme
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.textContent);
    }
});
```

---

#### **4. Event Bubbling Nedir?**
- Hedef elementte gerçekleşen bir olayın, DOM hiyerarşisinde yukarı doğru ilerlemesidir.
- Varsayılan davranış olarak JavaScript, olayları `bubbling` modunda işler.

**Örnek:**
```javascript
// Hem child hem de parent için click olayını dinleme
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
});
```
**Sonuç:**  
- Önce `Child clicked`, ardından `Parent clicked` yazdırılır.

---

#### **5. `event.target` vs `event.currentTarget`**
- **`event.target`:** Olayın başlatıldığı (tıklandığı) element.
- **`event.currentTarget`:** Olayın bağlı olduğu element.

**Örnek:**
```javascript
document.getElementById('parent').addEventListener('click', function(event) {
    console.log('Target:', event.target); // Tıklanan element
    console.log('Current Target:', event.currentTarget); // Dinleyici eklenen element
});
```

---

#### **6. `event.stopPropagation()` Nedir ve Neden Kullanılır?**
- Bir olayın `bubbling` veya `capturing` aşamasında diğer elementlere yayılmasını durdurur.
- **Kullanım:**
  - Eğer sadece belirli bir elementte olayın ele alınmasını istiyorsanız.

**Örnek:**
```javascript
document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});
```
**Sonuç:**  
- Sadece `Child clicked` yazdırılır. Olay `Parent`’a yayılmaz.

---

### Özet:
1. **Debugging:** Hataları bulmak için `debugger` ve DevTools kullanın.
2. **Event Propagation:** Olayların DOM'da nasıl yayıldığını anlama.
3. **Event Delegation:** Performanslı ve temiz kod yazmak için üst elementlere olay dinleyici ekleme.
4. **`event.target` ve `event.currentTarget`:** Tıklanan ve dinleyicinin bağlı olduğu elementleri ayırt edin.
5. **`event.stopPropagation()`:** Olay yayılımını durdurun.

---

### DOM Uygulamaları İçin Basit Bir Görev:
Bir listeye (ör. `<ul>`), yeni öğe eklendiğinde `alert` gösteren ve sadece belirli öğeleri dinleyen bir örnek oluşturabilirsiniz. Örneği ileride beraber geliştirebiliriz!