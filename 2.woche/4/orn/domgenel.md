### **HTML'deki DOM Manipülasyonu ile İlgili 10 Detaylı Soru**

1. **Görev:**  
   - Kullanıcı `Bir Todo Girin` alanına bir todo eklediğinde, bu todo otomatik olarak `ul` listesine eklensin.
   - Listeye eklenen todo'nun yanında bir silme düğmesi (`<i class="fa fa-remove"></i>`) otomatik olarak oluşturulsun.
   - Kullanıcı yeni bir todo eklediğinde, listeye eklenen toplam öğe sayısını konsola yazdırın.

2. **Görev:**  
   - Kullanıcı, `Bir Todo Arayın` alanına bir kelime yazdığında, yazdığı kelime ile uyuşmayan todo'lar gizlensin.
   - Eğer hiç todo bulunmazsa, `Aramanızla eşleşen bir todo bulunamadı.` şeklinde bir uyarı gösterin.

3. **Görev:**  
   - `Tüm Taskları Temizleyin` düğmesine tıklanıldığında, listedeki tüm öğeler silinsin.
   - Kullanıcıya bir onay penceresi (`confirm`) gösterin ve sadece onay verildiğinde işlemi gerçekleştirin.

4. **Görev:**  
   - Kullanıcı bir todo öğesindeki silme düğmesine (`<a class="delete-item">`) tıkladığında, sadece o todo öğesi silinsin.
   - Silme işlemi tamamlandığında konsola `"Todo silindi"` yazdırın.

5. **Görev:**  
   - `Todo Ekleyin` butonuna her tıklanıldığında, kullanıcının `Bir Todo Girin` alanına yazdığı metin boş mu kontrol edin.
   - Eğer boş ise, kullanıcıya bir uyarı (`alert`) gösterin ve `"Lütfen bir todo girin!"` mesajını yazdırın.

6. **Görev:**  
   - `Bir Todo Girin` alanına bir metin yazıldığında, `keydown` olayını dinleyin ve her bir tuş basımında girilen metni konsola yazdırın.
   - Eğer kullanıcı `Enter` tuşuna basarsa, todo liste otomatik olarak eklensin.

7. **Görev:**  
   - `Bir Todo Arayın` alanı `focus` olduğunda, bu alanın arka plan rengi `"lightblue"` olarak değişsin.
   - Odak (`blur`) kaldırıldığında, arka plan rengi eski haline geri dönsün.

8. **Görev:**  
   - Kullanıcı `Bir Todo Girin` alanına metin yazarken, girdiği metnin uzunluğu `20` karakteri geçtiğinde bir uyarı (`alert`) gösterin ve `"En fazla 20 karakter girebilirsiniz!"` mesajını yazdırın.
   - Kullanıcının daha fazla karakter yazmasını engelleyin.

9. **Görev:**  
   - `Todo Ekleyin` butonuna her tıklanıldığında, listeye eklenen todo öğesinin üstüne bir `CSS animation` ekleyin. 
   - Bu animasyon ile öğe listeye eklenirken 0.5 saniyelik bir `fade-in` efekti verin.

10. **Görev:**  
    - Kullanıcı, bir todo öğesinin üzerine fareyi getirdiğinde (`mouseover`), öğenin arka plan rengi `"lightgray"` olarak değişsin.
    - Fare öğeden ayrıldığında (`mouseout`), arka plan rengi varsayılan renge geri dönsün.

---

İlk 10 soruluk bölüm tamamlandı. Diğer 10 soru için devam edelim mi? 😊

### **HTML'deki DOM Manipülasyonu ile İlgili 10 Detaylı Soru (Devam)**

11. **Görev:**  
    - Kullanıcı bir todo öğesinin yanındaki silme düğmesine (`<a class="delete-item">`) tıkladığında, bu öğenin kaldırılması işlemi bir `fade-out` animasyonu ile gerçekleştirilsin. 
    - Animasyon 0.5 saniye sürsün ve ardından öğe DOM'dan kaldırılsın.

12. **Görev:**  
    - Kullanıcı `Tüm Taskları Temizleyin` düğmesine tıklayarak listeyi temizlediğinde, listenin altına `"Liste başarıyla temizlendi"` mesajını içeren bir `<p>` etiketi ekleyin.
    - Yeni eklenen mesaj 3 saniye sonra otomatik olarak kaybolsun.

13. **Görev:**  
    - Listeye eklenen her bir todo öğesi için bir `data-id` özelliği oluşturun.
    - Bu `data-id` değeri her eklenen öğe için 1 artan benzersiz bir sayı olsun. Örneğin: `"data-id="1"`, `"data-id="2"`.

14. **Görev:**  
    - Kullanıcı bir todo öğesine çift tıkladığında (`dblclick`), bu öğenin içeriği düzenlenebilir hale gelsin (`contenteditable="true"`).
    - Kullanıcı düzenlemeyi bitirdiğinde (`blur`), düzenlenmiş içerik kaydedilsin ve `"Değişiklik kaydedildi!"` mesajı konsola yazdırılsın.

15. **Görev:**  
    - Kullanıcı bir todo öğesini tutup sürükleyerek (`drag`) listenin başka bir yerine taşıyabilsin.
    - Taşıma tamamlandığında `"Todo taşıma işlemi tamamlandı"` mesajını konsola yazdırın.

16. **Görev:**  
    - `Bir Todo Girin` alanına yazılan her harfi küçük harfe çevirerek otomatik olarak konsola yazdırın. 
    - Örneğin, kullanıcı `"TEST"` yazarsa konsola `"test"` yazdırılsın.

17. **Görev:**  
    - Kullanıcı `Bir Todo Arayın` alanına yazdığı kelimeyi temizlemek için bir `X` simgesine sahip bir buton oluşturun.
    - Kullanıcı butona tıkladığında arama alanı temizlensin ve tüm todo'lar yeniden görünür hale gelsin.

18. **Görev:**  
    - Listeye bir todo eklenirken, eğer eklenen todo öğesi zaten listede varsa (`innerText` ile kontrol edin), `"Bu todo zaten mevcut!"` mesajını kullanıcıya gösterin.
    - Aynı todo listeye eklenmesin.

19. **Görev:**  
    - `Todo Ekleyin` düğmesine tıklamadan önce listeye toplamda en fazla 10 öğe eklenebilmesini sağlayın.
    - Eğer kullanıcı 10'dan fazla öğe eklemeye çalışırsa, `"Maksimum sınır: 10 todo"` mesajını gösterin ve yeni öğe eklemeyi engelleyin.

20. **Görev:**  
    - Listeye eklenen her bir todo öğesine bir `tamamlandı` seçeneği ekleyin (örneğin, bir `checkbox`).
    - Kullanıcı bir öğeyi tamamlandığına işaret ettiğinde (checkbox seçildiğinde), öğenin metni üstü çizili (`line-through`) olacak şekilde güncellensin.

---

Bu 20 soruluk görev seti, HTML dosyasını etkili bir şekilde manipüle etmek ve DOM ile çalışmayı öğrenmek için size güçlü bir temel sağlayacaktır. Soruların tamamını çözmeyi bitirdikten sonra çözümler üzerinde tartışabiliriz! 😊