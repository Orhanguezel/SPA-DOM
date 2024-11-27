### Görev: Dinamik Kategori Menüsü

Bir kategori ağacı oluşturman gerekiyor. HTML dosyasında hazır bir kategori listesi bulunmakta. Bu listeyi JavaScript kullanarak dinamik hale getir. İstenilen davranışları aşağıda bulabilirsin:

### İstenilen Davranışlar:
1. Sayfa yüklendiğinde:
   - Tüm alt kategoriler (`<ul>`) gizlenmelidir.
2. Bir kategori (`<li>`) tıklandığında:
   - Alt kategorisi gizliyse gösterilmeli.
   - Alt kategorisi görünüyorsa gizlenmelidir.
3. Kategorilerin üzerine fare ile gelindiğinde (`hover`):
   - Yazı kalın (`font-weight: bold`) olmalıdır.
4. Menü dışında herhangi bir yere tıklandığında:
   - Menü ile ilgili hiçbir şey olmamalıdır.
5. Sadece bir adet `event listener` kullan (olay delegasyonu).

### HTML Dosyası:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kategori Menüsü</title>
  <style>
    .hidden {
      display: none;
    }
    ul {
      list-style-type: none;
    }
    li {
      cursor: pointer;
    }
  </style>
</head>
<body>
  <ul class="menu">
    <li>
      Elektronik
      <ul>
        <li>
          Telefonlar
          <ul>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
          </ul>
        </li>
        <li>Bilgisayarlar</li>
        <li>Tabletler</li>
      </ul>
    </li>
    <li>
      Mobilya
      <ul>
        <li>Koltuklar</li>
        <li>Masa ve Sandalyeler</li>
        <li>Dolaplar</li>
      </ul>
    </li>
    <li>
      Giyim
      <ul>
        <li>Kadın</li>
        <li>Erkek</li>
        <li>Çocuk</li>
      </ul>
    </li>
  </ul>

  <script src="menu.js"></script>
</body>
</html>
```

### Çözüm Talimatı:
- Tüm JavaScript kodlarını `menu.js` dosyasına yaz.
- Bu görev için sadece **JavaScript** kullan. HTML ve CSS dosyalarını değiştirme.

Başarılar! 😊