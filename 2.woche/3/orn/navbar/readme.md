### Görev: Modern Dinamik Navbar

Bir modern ve dinamik navigasyon bar (navbar) oluşturman gerekiyor. Aşağıdaki talimatlara uygun olarak çalış:

### Gereksinimler:
1. Sayfa yüklendiğinde:
   - Navbar tamamen yatay olacak şekilde CSS ile düzenlenmiş olmalı.
   - Menü elemanlarının bazıları bir alt menüye sahip olacak. Alt menüler başlangıçta gizlenmeli.
2. Alt menü davranışı:
   - Kullanıcı bir menü öğesinin üzerine geldiğinde (`hover`), alt menü açılmalı.
   - Fare alt menüden ayrıldığında, alt menü tekrar gizlenmeli.
3. Mobil cihazlar için:
   - Ekran genişliği `768px` altına düştüğünde navbar bir "Hamburger Menü" haline dönüşmeli.
   - Hamburger menüye tıklandığında tüm menü genişleyerek görünür olmalı.
4. JavaScript kullanarak:
   - Alt menü ve hamburger menü işlevselliğini yönet.

---

### HTML Dosyası:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Navbar</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">MyWebsite</div>
    <button class="hamburger">
      ☰
    </button>
    <nav class="nav-menu">
      <ul>
        <li>Home</li>
        <li>
          Services
          <ul class="dropdown">
            <li>Web Development</li>
            <li>SEO</li>
            <li>Marketing</li>
          </ul>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>

  <script src="script.js"></script>
</body>
</html>
```

---

### CSS Dosyası (`styles.css`):
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.nav-menu {
  display: flex;
}

.nav-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-menu ul li {
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
}

.nav-menu ul li:hover {
  background-color: #444;
}

.nav-menu .dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  display: none;
  flex-direction: column;
}

.nav-menu ul li:hover .dropdown {
  display: flex;
}

.dropdown li {
  padding: 10px 20px;
}

.hamburger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #333;
  }

  .nav-menu.active {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
```

---

### JavaScript Dosyası (`script.js`):
```javascript
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Hamburger menüye tıklandığında menüyü göster/gizle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
```

---

### Açıklama:
- **HTML:** Temel bir navbar yapısı sağlar. Alt menüler ve hamburger menü elemanları oluşturulur.
- **CSS:** Navbar tasarımı, alt menülerin gizlenmesi ve hamburger menünün görünümü için kullanılır.
- **JavaScript:** Hamburger menüye tıklanarak menünün açılıp kapanmasını sağlar.

Bu görevde hem masaüstü hem de mobil cihazlar için bir navbar oluşturacaksın. Başarılar! 😊