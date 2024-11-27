### **Hazırlık: `index.html` Dosyası**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversal</title>
</head>
<body>
    <header id="main-header">
        <h1>Welcome to DOM Traversal</h1>
    </header>
    <main id="main-content">
        <section id="info-section">
            <h2>Information</h2>
            <p class="info-paragraph">This is the first paragraph in the information section.</p>
            <p class="info-paragraph">This is the second paragraph in the information section.</p>
        </section>
        <section id="list-section">
            <ul id="item-list">
                <li class="list-item">Item 1</li>
                <li class="list-item">Item 2</li>
                <li class="list-item">Item 3</li>
            </ul>
        </section>
    </main>
    <footer id="main-footer">
        <p>Footer content here</p>
    </footer>
</body>
</html>
```

---

### **20 Soru**

1. `main-header` ID'sine sahip öğenin ebeveynini `console.log()` ile yazdırın.

2. `main-content` ID'sine sahip öğenin tüm çocuklarını bir döngüde yazdırın.

3. `info-section` ID'sine sahip öğenin ilk çocuk öğesini bulun ve yazdırın.

4. `item-list` ID'sine sahip `<ul>` öğesinin son çocuk öğesini yazdırın.

5. `info-paragraph` sınıfına sahip öğelerin bir önceki ve bir sonraki kardeş öğelerini yazdırın.

6. `main-content` ID'sine sahip öğenin tüm element çocuklarını bir HTMLCollection olarak yazdırın.

7. `item-list` ID'sine sahip `<ul>` öğesindeki tüm `<li>` öğelerinin içeriğini bir döngü kullanarak yazdırın.

8. `main-footer` ID'sine sahip öğenin `parentNode` ve `parentElement` özelliklerini yazdırın. Aralarındaki farkı açıklayın.

9. `list-item` sınıfına sahip öğelerin sadece ilkini seçin ve içeriğini güncelleyin.

10. `info-section` öğesindeki ikinci paragrafın kardeş ilişkilerini kullanarak içeriğini "Updated Paragraph" olarak değiştirin.

11. `item-list` öğesine yeni bir `<li>` ekleyin. İçeriği "Item 4" olsun.

12. `item-list` öğesinin ilk çocuk öğesini kaldırın.

13. `info-section` içindeki tüm metin düğümlerini ve element düğümlerini ayrı ayrı yazdırın.

14. `main-header` ID'sine sahip öğenin altına yeni bir `<h2>` öğesi ekleyin ve içeriğini "Subheading" olarak ayarlayın.

15. `item-list` öğesindeki son öğeyi yeni bir `<li>` öğesiyle değiştirin. İçeriği "Replaced Item" olsun.

16. `main-content` ID'sine sahip öğenin `children` ve `childNodes` özelliklerini ayrı ayrı yazdırın. Aralarındaki farkları not edin.

17. `info-section` içindeki tüm paragraf öğelerinin sınıfını "highlighted" olarak değiştirin.

18. `item-list` içindeki öğeler arasında bir döngü yaparak sadece çift indeksli öğelerin içeriğini büyük harfe çevirin.

19. `main-footer` öğesinin içeriğini tamamen silin ve yerine "New Footer Content" yazdırın.

20. `list-item` sınıfına sahip öğelere bir CSS stili ekleyin: `color: red;`. Sadece ikinci öğeyi `color: blue;` olarak ayarlayın.

---

Bu soruları çözerek DOM navigasyonunu ve manipülasyonunu pekiştirebilirsiniz. Eğer takılırsanız, her zaman yardım isteyebilirsiniz! 😊