### **JS-Ereignisse (Events)**

JavaScript'te olaylar (events), kullanıcı veya tarayıcı tarafından tetiklenen eylemlerdir. Örneğin, bir düğmeye tıklama, bir form gönderme veya sayfa yüklendiğinde meydana gelen olaylar JavaScript'te işlenebilir.

---

## **1. `User Events` ve `Browser Events`**

**`User Events`:**
- Kullanıcının tarayıcıda gerçekleştirdiği eylemlerden kaynaklanır.
- Örnekler:
  - **Click:** Kullanıcı bir düğmeye tıkladığında tetiklenir.
  - **Input:** Kullanıcı bir metin kutusuna yazı yazdığında tetiklenir.
  - **Mouseover:** Kullanıcı fareyi bir öğenin üzerine getirdiğinde tetiklenir.

**`Browser Events`:**
- Tarayıcı tarafından tetiklenen olaylardır.
- Örnekler:
  - **Load:** Sayfa tamamen yüklendiğinde tetiklenir.
  - **Resize:** Kullanıcı tarayıcı penceresinin boyutunu değiştirdiğinde tetiklenir.
  - **Scroll:** Kullanıcı bir sayfayı kaydırdığında tetiklenir.

---

### **Örnek: `User Events` vs `Browser Events`**
```javascript
// User Event: Button Click
document.querySelector('button').addEventListener('click', () => {
  console.log('Button was clicked!');
});

// Browser Event: Window Resize
window.addEventListener('resize', () => {
  console.log('Window was resized!');
});
```

---

## **2. Zuhören und Reagieren: `EventListener`**

Bir öğeye "dinleyici" (listener) ekleyerek, belirli bir olay tetiklendiğinde bu olaylara tepki verebilirsiniz.

### **addEventListener**
`addEventListener` bir öğeye olay dinleyici eklemek için kullanılır. Söz dizimi:
```javascript
element.addEventListener('event', function, useCapture);
```

#### **Parametreler:**
1. **`event`**: Olay türü (ör. `'click'`, `'mouseover'`).
2. **`function`**: Olay gerçekleştiğinde çağrılacak işlev.
3. **`useCapture` (isteğe bağlı)**: Olayın yakalama veya balonlama aşamasında mı ele alınacağını belirtir (varsayılan: `false`).

---

### **Örnek: `addEventListener` ile Tıklama Olayı**
```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

---

### **Çoklu Dinleyiciler**
Bir öğeye birden fazla dinleyici ekleyebilirsiniz:
```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('First event listener');
});

button.addEventListener('click', () => {
  console.log('Second event listener');
});
```

---

## **3. `Event` Nesnesi**

Her olayla birlikte bir **`event`** nesnesi oluşturulur ve bu nesne olaya ilişkin ayrıntılı bilgiler sağlar.

### **Bazı Önemli `event` Özellikleri:**
1. **`type`**: Olay türünü belirtir (ör. `'click'`, `'mouseover'`).
2. **`target`**: Olayın gerçekleştiği öğeyi temsil eder.
3. **`currentTarget`**: Olayın bağlandığı öğeyi belirtir.
4. **`clientX` ve `clientY`**: Olayın ekrandaki X ve Y koordinatlarını döndürür.

---

### **Örnek: `event` Nesnesi**
```javascript
document.querySelector('button').addEventListener('click', (event) => {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});
```

---

### **Fare Koordinatları**
`mousemove` olayında farenin koordinatlarını almak:
```javascript
document.addEventListener('mousemove', (event) => {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
```

---

## **4. `preventDefault()`**

Bir olayın varsayılan davranışını durdurmak için kullanılır. Örneğin:
- Bir bağlantının başka bir sayfaya yönlendirilmesini engellemek.
- Bir formun otomatik olarak gönderilmesini engellemek.

---

### **Örnek: `preventDefault()`**
```javascript
// Bağlantıyı engellemek
document.querySelector('a').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Link tıklama engellendi!');
});

// Form gönderimini engellemek
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form gönderimi engellendi!');
});
```

---

## **Özet: Önemli Noktalar**
1. **`addEventListener`:**
   - Öğeye olay dinleyici eklemek için kullanılır.
2. **`event` Nesnesi:**
   - Olayla ilgili bilgi sağlar (ör. tür, hedef öğe).
3. **`preventDefault`:**
   - Varsayılan olay davranışını engeller.

Bu temel bilgiler ve örneklerle olayları daha iyi anlayabilir ve uygulayabilirsiniz. Daha fazla örnek veya detaya ihtiyacınız olursa sorabilirsiniz! 😊