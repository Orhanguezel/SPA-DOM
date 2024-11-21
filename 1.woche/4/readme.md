### **Lernziele Detayları**

---

#### **1. Was ist `DOM`?**
**DOM** (Document Object Model), bir web sayfasının yapı taşlarını temsil eden, hiyerarşik bir modeldir. Tarayıcı tarafından HTML belgesinin işlenmesi sonucunda oluşur ve JavaScript ile bu model üzerinden web sayfasıyla etkileşim kurarız.

- HTML belgesi → Tarayıcı → DOM modeli.
- DOM, HTML'nin nesne temsili (object representation) olup, düğümler (nodes) içerir.
  - Örnek: Her `<div>`, `<p>` veya `<img>` bir "düğüm" olarak temsil edilir.
- DOM, JavaScript ile okunabilir ve değiştirilebilir.

---

#### **2. Was ist der Unterschied zwischen `HTML`, `DOM`, `document` in Window?**

| **HTML**                        | **DOM**                          | **document**               |
|----------------------------------|-----------------------------------|----------------------------|
| Metin tabanlı markup dili.       | HTML'nin tarayıcıdaki temsilidir. | DOM'nin ana erişim noktası.|
| Statik bir yapı sağlar.          | Dinamik ve interaktif yapılar sağlar. | `document` bir global nesnedir. |
| Örnek: `<h1>Hallo Welt</h1>`    | DOM: Bu `<h1>` bir düğümdür.      | JavaScript koduyla erişilir. |

- `Window`: Tarayıcıdaki global nesnedir.
- `document`: `window.document` ile çağrılır ve HTML içeriğini temsil eder.

---

#### **3. `JS` im Browser?**
- **JavaScript**, tarayıcıda çalışan bir dildir ve **DOM** ile etkileşime geçerek sayfaları dinamikleştirir.
  - **Kullanım Örnekleri:**
    - Buton tıklama olaylarını işlemek.
    - Formları doğrulamak.
    - Sayfa içeriklerini değiştirmek.

---

#### **4. Wie greift man auf `DOM-Elemente` zu?**

DOM öğelerine erişim yöntemleri:
1. **ID ile erişim:**
   ```javascript
   const element = document.getElementById("idName");
   ```
2. **Class ile erişim:**
   ```javascript
   const elements = document.getElementsByClassName("className");
   ```
3. **Tag adı ile erişim:**
   ```javascript
   const elements = document.getElementsByTagName("tagName");
   ```
4. **querySelector ve querySelectorAll:**
   - Daha esnek ve CSS seçicileri gibi çalışır.
   ```javascript
   const element = document.querySelector(".className");
   const elements = document.querySelectorAll(".className");
   ```

---

#### **5. Wie manipuliert man `DOM-Elemente`?**

DOM'u değiştirmek için çeşitli yöntemler vardır:

1. **Metin değiştirme:**
   ```javascript
   const element = document.getElementById("idName");
   element.textContent = "Neue Texte!";
   ```

2. **HTML içeriği değiştirme:**
   ```javascript
   element.innerHTML = "<strong>Starker Text</strong>";
   ```

3. **CSS stilleri değiştirme:**
   ```javascript
   element.style.color = "red";
   element.style.fontSize = "20px";
   ```

4. **Class ekleme veya kaldırma:**
   ```javascript
   element.classList.add("newClass");
   element.classList.remove("oldClass");
   ```

---

#### **6. Wann und warum manipulieren wir den DOM?**

- **Kullanıcı Etkileşimleri:**
  - Buton tıklanınca arka plan rengini değiştirmek.
- **Dinamik İçerik Güncellemeleri:**
  - Ajax çağrıları ile gelen verileri göstermek.
- **Hataları Göstermek:**
  - Form doğrulama sonuçlarını ekranda belirtmek.

---

#### **7. Benutzereingaben und Nachrichten an das Fenster:**
1. **prompt():**
   Kullanıcıdan giriş almak için kullanılır.
   ```javascript
   const userName = prompt("Adınız nedir?");
   alert(`Hoş geldiniz, ${userName}!`);
   ```

2. **alert():**
   Kullanıcıya bilgi verir.
   ```javascript
   alert("Bu bir mesajdır!");
   ```

---

### **Resources**

- **[W3Schools DOM Eğitimi](https://www.w3schools.com/js/js_htmldom.asp):** Temel DOM kavramları.
- **[Bitsrc DOM Selectors](https://blog.bitsrc.io/dom-selectors-explained-70260049aaf0):** DOM seçiciler ve örnekler.
- **[DOM Eğitim Videosu](https://www.youtube.com/watch?v=WbG86sMd3SU):** Pratik video.

---

### **Tasks Detayları**

#### **[spa-dom-guessing-game]:**
- Sayfa üzerindeki DOM elemanlarını kullanarak bir tahmin oyunu.
- **Amaç:**
  - Kullanıcının bir sayı tahmin etmesini sağlamak.
  - Yanlış tahminde mesaj göstermek.
  - Doğru tahminde bir DOM stilini değiştirmek.

#### **[spa-dom-querying-styling]:**
- DOM elemanlarına erişim ve stilleri değiştirerek bir mini proje geliştirme.
- **Örnek:**
  - Bir düğmeye basıldığında arka plan rengi değişir.
  - Bir metin kutusuna yazılan değer başka bir DOM elemanında gösterilir.

Bu konuları pratikle pekiştirmek için örnekler sunabilirim. Hangi alanları daha detaylı çalışmak istersen bana yazabilirsin! 😊