### **HTML Dosyası**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Events Practice</title>
</head>
<body>
  <header>
    <h1 id="main-title">Welcome to Event Practice</h1>
    <p class="subtitle">Learn how to handle DOM events effectively!</p>
  </header>

  <main>
    <section class="content">
      <button id="change-title">Change Title</button>
      <button id="toggle-color">Toggle Color</button>
      <input type="text" id="name-input" placeholder="Enter your name">
      <p id="name-display">Your name will appear here.</p>
    </section>

    <section class="list-section">
      <ul id="dynamic-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button id="add-item">Add Item</button>
    </section>
  </main>

  <footer>
    <a href="https://example.com" id="external-link">Visit Example</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

### **10 Örnek Soru**

#### **Soru 1:**
- `change-title` ID'sine sahip düğmeye bir `click` olayı ekleyin.
- Tıklandığında, `main-title` ID'sine sahip `<h1>` öğesinin içeriğini `"Title Changed!"` olarak değiştirin.

---

#### **Soru 2:**
- `toggle-color` ID'sine sahip düğmeye bir `click` olayı ekleyin.
- Her tıklamada, `main-title` öğesinin arka plan rengini `"yellow"` veya `"transparent"` arasında değiştirin.

---

#### **Soru 3:**
- `name-input` ID'sine sahip giriş alanına bir `input` olayı ekleyin.
- Kullanıcı bir şeyler yazdığında, yazılan metni `name-display` ID'sine sahip paragrafta görüntüleyin.

---

#### **Soru 4:**
- `dynamic-list` ID'sine sahip `<ul>` öğesinin tüm `<li>` öğelerine bir `click` olayı ekleyin.
- Tıklanan öğenin içeriğini konsola yazdırın.

---

#### **Soru 5:**
- `add-item` ID'sine sahip düğmeye bir `click` olayı ekleyin.
- Tıklandığında, `dynamic-list` öğesine yeni bir `<li>` öğesi ekleyin. Yeni öğenin içeriği `"New Item"` olacak.

---

#### **Soru 6:**
- `external-link` ID'sine sahip `<a>` öğesine bir `click` olayı ekleyin.
- Tıklanmayı engelleyin (`preventDefault`) ve konsola `"Link tıklanması engellendi!"` yazdırın.

---

#### **Soru 7:**
- Tüm `<button>` öğelerine bir `mouseover` olayı ekleyin.
- Fare bir düğmenin üzerine geldiğinde, düğmenin metnini `"Hovered!"` olarak değiştirin.

---

#### **Soru 8:**
- `dynamic-list` ID'sine sahip `<ul>` öğesine bir olay delegasyonu ekleyin.
- Sadece `<li>` öğelerine tıklandığında, tıklanan öğenin içeriğini `"Clicked!"` olarak değiştirin.

---

#### **Soru 9:**
- `name-input` öğesine bir `focus` olayı ekleyin.
- Giriş alanı odaklandığında, `name-display` paragrafının yazı rengini `"blue"` yapın.

---

#### **Soru 10:**
- `name-input` öğesine bir `blur` olayı ekleyin.
- Giriş alanından odak kaldırıldığında, `name-display` paragrafının yazı rengini tekrar `"black"` yapın.

---

Bu sorular, **DOM olay yönetimi** konusundaki yeteneklerinizi geliştirecek. Sorular, fare, klavye ve form olaylarını kapsayacak şekilde düzenlenmiştir. Kodlarınızı `script.js` dosyasına yazabilirsiniz. 😊