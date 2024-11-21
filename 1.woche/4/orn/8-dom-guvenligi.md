## **Bölüm 8: DOM Güvenliği ve XSS (Cross-Site Scripting)**

Bu bölümde, DOM manipülasyonu sırasında güvenliği nasıl sağlayabileceğimizi ve yaygın bir güvenlik açığı olan XSS (Cross-Site Scripting) saldırılarından nasıl korunacağımızı inceleyeceğiz.

---

### **1. DOM Güvenliği Nedir?**

DOM manipülasyonu sırasında kullanıcıdan alınan veriler veya dinamik olarak oluşturulan içerik, tarayıcıda çalıştırıldığında güvenlik sorunlarına yol açabilir. Bu, özellikle **XSS saldırıları** gibi tehditlerle ilgilidir.

#### **XSS (Cross-Site Scripting) Nedir?**
- XSS, bir saldırganın kötü niyetli kodu (genellikle JavaScript) bir web sayfasına enjekte ettiği bir güvenlik açığıdır.
- Bu kod, kullanıcının tarayıcısında çalıştırılarak çerezlerin çalınması, kimlik bilgilerinin ele geçirilmesi veya kötü amaçlı yazılım yayılması gibi sorunlara neden olabilir.

**Örnek:**
Bir kullanıcının yorum olarak aşağıdaki gibi bir kod gönderdiğini düşünelim:
```html
<script>alert('Hacked!');</script>
```
Bu kod bir web sayfasında çalıştırılırsa, bir saldırganın kodu kullanıcı tarayıcısında çalışmış olur.

---

### **2. Güvensiz DOM Manipülasyon Örnekleri**

#### **a. `innerHTML` ile Dinamik İçerik Ekleme**
`innerHTML`, güvenlik açığına açıktır çünkü kullanıcıdan alınan veri doğrudan HTML olarak işlenir.

**Kötü Örnek:**
```javascript
const userInput = "<img src='x' onerror='alert(\"Hacked!\")'>";
document.getElementById("output").innerHTML = userInput;
```
Bu kod, kötü niyetli JavaScript'in çalıştırılmasına olanak tanır.

#### **b. URL Tabanlı Güvenlik Açıkları**
Kullanıcı girdisini kontrol etmeden URL'leri oluşturmak da tehlikelidir.

**Kötü Örnek:**
```javascript
const userInput = "javascript:alert('Hacked!')";
const link = document.createElement("a");
link.href = userInput; // Güvenli olmayan URL
link.textContent = "Click Me";
document.body.appendChild(link);
```

---

### **3. Güvenli DOM Manipülasyonu Teknikleri**

#### **a. `textContent` veya `createTextNode` Kullanın**
`textContent` ve `createTextNode`, bir öğeye yalnızca düz metin ekler ve HTML etiketlerini işlemez. Bu, XSS riskini önler.

**Güvenli Örnek:**
```javascript
const userInput = "<script>alert('Hacked!');</script>";
const output = document.getElementById("output");
output.textContent = userInput; // Güvenli: Kod düz metin olarak işlenir
```

---

#### **b. HTML Özelliklerini Dinamik Olarak Ayarlarken `setAttribute` Kullanın**
HTML özelliklerini ayarlarken `setAttribute` kullanmak, XSS riskini azaltabilir.

**Güvenli Örnek:**
```javascript
const userInput = "safe-image.jpg";
const img = document.createElement("img");
img.setAttribute("src", userInput); // Güvenli: Yalnızca özellik değeri ayarlanır
document.body.appendChild(img);
```

---

#### **c. Güvenli URL Kontrolü**
Kullanıcı girdisini URL olarak kullanmadan önce doğrulayın.

**Güvenli Örnek:**
```javascript
const userInput = "https://example.com";
try {
  const url = new URL(userInput); // URL'in geçerliliğini kontrol eder
  const link = document.createElement("a");
  link.href = url.href;
  link.textContent = "Visit Site";
  document.body.appendChild(link);
} catch (e) {
  console.error("Invalid URL");
}
```

---

#### **d. DOMPurify Kullanımı**
[DOMPurify](https://github.com/cure53/DOMPurify), XSS saldırılarına karşı bir JavaScript kütüphanesidir. Dinamik HTML içeriğini filtreler.

**Örnek:**
```javascript
const userInput = "<img src=x onerror=alert(1)>";
const safeHTML = DOMPurify.sanitize(userInput); // Güvenli HTML
document.getElementById("output").innerHTML = safeHTML;
```

---

### **4. Güvenlik Kontrolleri ve En İyi Uygulamalar**

#### **a. Kullanıcı Girdisini Doğrulayın**
- Kullanıcıdan gelen her veriyi kontrol edin ve yalnızca izin verilen formatlarda olmasına dikkat edin.
- Örneğin, e-posta doğrulama:
  ```javascript
  const email = userInput.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
  ```

---

#### **b. `CSP (Content Security Policy)` Kullanın**
CSP, yalnızca güvenilir kaynaklardan gelen içeriğin çalıştırılmasına izin vererek XSS saldırılarını önler.

**CSP Örneği:**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
```

---

#### **c. Güvenli Çerez Yönetimi**
Çerezlerdeki hassas veriler (örneğin, oturum kimlik bilgileri) `HttpOnly` ve `Secure` bayraklarıyla korunmalıdır.

---

#### **d. XSS Korumasını Etkinleştirin**
Modern tarayıcılar genellikle XSS korumalarıyla gelir. Ancak bazı durumlarda bunu manuel olarak etkinleştirmeniz gerekebilir.

---

### **5. Örnek: Güvenli Bir Dinamik Liste**

#### **Kötü Örnek:**
```javascript
const userInput = "<li onclick='alert(\"Hacked!\")'>Click Me</li>";
document.getElementById("list").innerHTML += userInput;
```

#### **Güvenli Örnek:**
```javascript
const userInput = "Item 1";
const listItem = document.createElement("li");
listItem.textContent = userInput; // Güvenli: Metin olarak işlenir
document.getElementById("list").appendChild(listItem);
```

---

### **6. XSS Testi Yapma**

#### **XSS Test Girdisi:**
Kendi web uygulamanızda XSS testleri yapmak için şu tür girişleri deneyebilirsiniz:
```html
<script>alert('XSS');</script>
<img src=x onerror=alert('XSS')>
```

Bu girdiler uygulamanızda çalışıyorsa, güvenlik önlemlerini gözden geçirmelisiniz.

---

### **Sonuç**

Bu bölümde, DOM manipülasyonu sırasında güvenlik önlemlerinin nasıl alınacağını ve XSS gibi saldırılardan nasıl korunacağınızı öğrendik. Özetle:
1. Kullanıcı girdisini asla doğrudan HTML olarak kullanmayın.
2. `textContent` ve `setAttribute` gibi güvenli yöntemleri tercih edin.
3. DOMPurify gibi kütüphanelerle dinamik HTML içeriğini filtreleyin.

Bir sonraki bölümde, **SVG ve Canvas ile DOM manipülasyonu** konusunu ele alacağız.

Devam edelim mi? 😊