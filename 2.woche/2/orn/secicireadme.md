### **HTML Dosyası**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Selectors Practice</title>
</head>
<body>
  <header id="main-header">
    <h1>DOM Selectors Practice</h1>
  </header>
  <nav>
    <ul class="menu">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </nav>
  <main>
    <section class="intro">
      <h2>Welcome to DOM Practice</h2>
      <p>This is a paragraph in the introduction section.</p>
    </section>
    <section class="content">
      <h2>Content Section</h2>
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </section>
    <footer class="main-footer">
      <p>&copy; 2024 DOM Practice. All rights reserved.</p>
    </footer>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

---

### **10 Örnek Soru**

#### **Soru 1:**
- `main-header` ID'sine sahip `<header>` öğesini seçin.
- Yazı rengini `"blue"` yapın.

---

#### **Soru 2:**
- `menu` sınıfına sahip `<ul>` öğesini seçin.
- Tüm `<li>` öğelerini seçin ve yazılarını büyük harfe çevirin.

---

#### **Soru 3:**
- `intro` sınıfına sahip `<section>` içindeki `<p>` öğesini seçin.
- Metin içeriğini `"Introduction text has been changed!"` olarak güncelleyin.

---

#### **Soru 4:**
- `content` sınıfına sahip `<section>` içindeki tüm `<div>` öğelerini seçin.
- Her birine bir çerçeve ekleyin: `"2px solid black"`.

---

#### **Soru 5:**
- `box` sınıfına sahip öğelerden ilkini seçin ve arka plan rengini `"lightgray"` yapın.

---

#### **Soru 6:**
- `content` sınıfına sahip `<section>` içinde bir `<h2>` etiketi olduğunu varsayarak bu etiketi seçin.
- Yazı boyutunu `"2rem"` yapın.

---

#### **Soru 7:**
- `main-footer` sınıfına sahip `<footer>` içindeki `<p>` öğesini seçin.
- İçeriğini `"All rights reserved - Updated"` olarak değiştirin.

---

#### **Soru 8:**
- `menu` sınıfına sahip `<ul>` öğesindeki son `<li>` öğesini seçin.
- Yazı rengini `"red"` yapın.

---

#### **Soru 9:**
- `box` sınıfına sahip tüm öğeleri seçin.
- Sadece ikinci öğenin (`box[1]`) yazı rengini `"green"` yapın.

---

#### **Soru 10:**
- `menu` sınıfına sahip `<ul>` öğesini seçin.
- Yeni bir `<li>` öğesi oluşturun ve `textContent` olarak `"Blog"` ekleyin.
- Bu yeni `<li>` öğesini listeye ekleyin.

---

### **Sonuç**
Bu sorular, DOM seçicilerini (ID, class, tag, querySelector, querySelectorAll gibi) kullanmayı öğrenmenizi sağlayacak. Kodlarınızı `script.js` dosyasına yazabilirsiniz. Her soru için farklı DOM seçici yöntemlerini kullanarak pratik yapabilirsiniz. 😊