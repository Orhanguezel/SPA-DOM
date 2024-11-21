// a- getElementById() 
// metodu ile bir elementin içeriğini alabiliriz.
// Bu metot, belirtilen id'ye sahip bir HTML elemanını döndürür.
// Döndürülen elemanın textContent özelliği, belirtilen elemanın içeriğini döndürür.

const element = document.getElementById("myDiv");
console.log(element.textContent);

// b- getElementsByClassName()
// metodu, belirtilen sınıfa sahip tüm HTML elemanlarını döndürür.
// Döndürülen elemanlar, bir diziye benzer bir nesnedir ve bu nesne üzerinde döngü yapılabilir.

const elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].textContent);
}
console.log(elements[0].textContent); // Çıktı: First
console.log(elements[1].textContent); // Çıktı: Second

// c- getElementsByTagName()
// metodu, belirtilen etikete sahip tüm HTML elemanlarını döndürür.
// Döndürülen elemanlar, bir diziye benzer bir nesnedir ve bu nesne üzerinde döngü yapılabilir.

const elements2 = document.getElementsByTagName("p");
for (let i = 0; i < elements2.length; i++) {
  console.log(elements2[i].textContent);
  //elements2[i].textContent = "New text";

}
console.log(elements2[0].textContent); // Çıktı: First paragraph
console.log(elements2[1].textContent); // Çıktı: Second paragraph

// d- querySelector()
// metodu, belirtilen CSS seçicisine göre eşleşen ilk HTML elemanını döndürür.
// Eğer eşleşen eleman yoksa null döner.

const element3 = document.querySelector("#first");
console.log(element3.textContent); // Çıktı: First

// .className, #idName, tagName gibi CSS seçicileri kullanılabilir.
const element4 = document.querySelector(".myClass");

const element5 = document.querySelector("#myDiv"); // id ile seçim
const element6 = document.querySelector(".myClass"); // class ile seçim
const element7 = document.querySelector("div > p"); // ilişki seçici

// e- querySelectorAll()
// metodu, belirtilen CSS seçicisine göre eşleşen tüm HTML elemanlarını döndürür.
// Eğer eşleşen eleman yoksa boş bir dizi döner.
// Döndürülen elemanlar, bir diziye benzer bir nesnedir ve bu nesne üzerinde döngü yapılabilir. 
// forEach() metodu ile döngü yapılabilir.

const elements3 = document.querySelectorAll(".myClass");
elements3.forEach((element) => {
  console.log(element.textContent);
});

const boxes = document.querySelectorAll(".box"); // Tüm ".box" class'lı elemanları seç
boxes.forEach((box) => {
  console.log(box.textContent);
});

// f- getAttribute()
// metodu, belirtilen özelliğin değerini döndürür.
// Eğer belirtilen özellik yoksa null döner.

const element8 = document.querySelector("#myDiv");
console.log(element8.getAttribute("id")); // Çıktı: myDiv
console.log(element8.getAttribute("class")); // Çıktı: myClass

// g- setAttribute()
// metodu, belirtilen özelliğe yeni bir değer atar.
// Eğer belirtilen özellik yoksa yeni bir özellik oluşturur.

const element9 = document.querySelector("#myDiv");
//element9.setAttribute("id", "newId");
//element9.setAttribute("class", "newClass");

// h- removeAttribute()
// metodu, belirtilen özelliği kaldırır.

const element10 = document.querySelector("#myDiv");
//element10.removeAttribute("id");


// i- style
// özelliği, belirtilen HTML elemanının stil özelliklerine erişmek için kullanılır.
// Bu özellik, bir nesne döndürür ve bu nesne üzerinde stil özelliklerine erişilebilir.

const element11 = document.querySelector("#myDiv");
element11.style.color = "red";
element11.style.backgroundColor = "yellow";
element11.style.fontSize = "24px";

const element12 = document.querySelectorAll(".box");

element12.forEach((box) => {
    box.style.display="Flex";

  box.style.color = "blue";
  box.style.backgroundColor = "green";
  box.style.fontSize = "24px";
  box.style.border = "1px solid red";
  box.style.height= "70px";
    box.style.width= "70px";
    box.style.margin= "10px";
});

// j- classList
// özelliği, belirtilen HTML elemanının sınıf listesine erişmek için kullanılır.
// Bu özellik, bir DOMTokenList nesnesi döndürür ve bu nesne üzerinde sınıf listesine erişilebilir.

const element13 = document.querySelector("#myDiv");
element13.classList.add("newClass");
element13.classList.remove("myClass");
element13.classList.toggle("myClass");

console.log(element13.classList.contains("myClass")); // Çıktı: true
console.log(element13.classList.contains("newClass")); // Çıktı: true

// k- innerHTML
// özelliği, belirtilen HTML elemanının içeriğini alır veya değiştirir.
// innerHTML özelliği, HTML içeriği alır ve döndürür.
// innerHTML özelliğine atanan değer, HTML içeriği olarak elemanın içeriğini değiştirir.

const element14 = document.querySelector("#myDiv");
console.log(element14.innerHTML);// Hello, World!
element14.innerHTML = "<h1>Hello, World! Orhan</h1>";

// l- textContent
// özelliği, belirtilen HTML elemanının içeriğini alır veya değiştirir.
// textContent özelliği, metin içeriği alır ve döndürür.

const element15 = document.querySelector("#myDiv");
console.log(element15.textContent); // Hello, World! Orhan
element15.textContent = "Hello, World!";
console.log(element15.textContent); // Hello, World!

// **3. Seçicilerle Çalışma Örnekleri**
// **Örnek 1: Bir Elemanın Stilini Değiştirme**

const text = document.getElementById("text");
text.style.color = "red"; // Yazı rengini kırmızı yap
text.style.backgroundColor = "yellow"; // Arka plan rengini sarı yap
text.style.fontSize = "24px"; // Yazı boyutunu 24px yap
text.style.textAlign = "center"; // Yazıyı ortala

// **Örnek 2: Birden Fazla Elemanın Stilini Değiştirme**

const boxes2 = document.querySelectorAll(".box"); // Tüm ".box" class'lı elemanları seç
boxes2.forEach((box) => {
  box.style.color = "red"; // Yazı rengini mavi yap
  box.style.backgroundColor = "grey"; // Arka plan rengini yeşil yap
  box.style.fontSize = "24px"; // Yazı boyutunu 24px yap
    box.style.border = "1px solid red"; // Kenarlık rengini kırmızı yap
    box.style.height= "70px"; // Yüksekliği 70px yap
    box.style.width= "70px"; // Genişliği 70px yap
    box.style.margin= "10px"; // Kenar boşluğu 10px yap
}
);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.style.fontWeight = "bold"; // Her elemanın yazı tipi kalın olacak
});

//**Örnek 3: Bir Etiketi Dinamik Olarak Seçme**

const header = document.querySelector("div > h1"); // div'in içindeki ilk h1 etiketini seç
console.log(header.textContent); // Çıktı: Hello

const element16 = document.getElementById("missingId");
   if (element16) {
       console.log("Element bulundu");
   } else {
       console.log("Element bulunamadı");
   }

//  **1. Olay (Event) Nedir?**
//  Olaylar (Events), HTML sayfalarında gerçekleşen etkileşimlerdir.
//  Kullanıcı bir butona tıkladığında, bir metin kutusuna yazı yazdığında veya fareyi bir öğenin üzerine getirdiğinde bir olay gerçekleşir.
//  JavaScript, HTML sayfalarındaki olayları algılayabilir ve bu olaylara tepki verebilir.
//  Olaylar, bir HTML öğesine atanabilen JavaScript işlevleridir.
//  JavaScript, bir olay gerçekleştiğinde belirli bir işlevi çalıştırabilir.
//  Olaylar, bir HTML öğesine atanabilen JavaScript işlevleridir.
//  JavaScript, bir olay gerçekleştiğinde belirli bir işlevi çalıştırabilir.
//  Olaylar, bir HTML öğesine atanabilen JavaScript işlevleridir.
//  JavaScript, bir olay gerçekleştiğinde belirli bir işlevi çalıştırabilir.
//  Olaylar, bir HTML öğesine atanabilen JavaScript işlevleridir.

//  **2. Bir Olayın Eklenmesi**
//  Olaylar, bir HTML öğesine atanabilen JavaScript işlevleridir.
//  JavaScript, bir olay gerçekleştiğinde belirli bir işlevi çalıştırabilir.
//**a. `addEventListener` ile Olay Ekleme**
//  `addEventListener()` metodu, bir HTML öğesine bir olay dinleyicisi eklemek için kullanılır.

const button = document.getElementById("myButton");

//button.addEventListener("click", function () {
  //console.log("Button clicked!");
//});

//**b. Inline Olay İşleyicileri**
// <button onclick="alert('Button clicked!')" id="myButton">Click Me</button>

// **3. Yaygın Kullanılan Olay Türleri**
// **a. click**
//  Belirtilen öğeye tıklandığında gerçekleşir.

const button2 = document.getElementById("myButton");
button2.addEventListener("click", function () {
  console.log("Button clicked! 2.");
});


// **b. mouseover**
//  Belirtilen öğenin üzerine fare geldiğinde gerçekleşir.

const button3 = document.getElementById("myButton");
button3.addEventListener("mouseover", function () {
  console.log("Mouse over!");
});


// **c. mouseout**
//  Belirtilen öğenin üzerinden fare çekildiğinde gerçekleşir.

const button4 = document.getElementById("myButton");
button4.addEventListener("mouseout", function () {
  console.log("Mouse out!");
});

// **d. keydown**
//  Belirtilen öğeye bir tuşa basıldığında gerçekleşir.
const input = document.getElementById("textInput");

input.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// **e. keyup**
//  Belirtilen öğeden bir tuşa basıldığında ve basılı tutulduğunda gerçekleşir.

const input2 = document.getElementById("textInput");

input2.addEventListener("keyup", (event) => {
    console.log("Key released:", event.key);
    }
);

// **f. change**
//  Belirtilen öğenin değeri değiştiğinde gerçekleşir.
/*

const select = document.getElementById("mySelect");

select.addEventListener("change", (event) => {
    console.log("Selected value:", event.target.value);
    }
);

*/

// **c. Form Olayları**
// **a. submit**
//  Bir form gönderildiğinde gerçekleşir.

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Formun varsayılan gönderim davranışını engeller
  console.log("Form submitted!");
});

// **b. reset**
// **c. focus**

const input3 = document.getElementById("textInput");

input3.addEventListener("focus", (event) => {
    console.log("Input focused!");
    }
);
// **d. blur**
// **e. input**
// **f. change**
// **g. select**
// **h. invalid**
// **i. reset**
// **j. submit
// **k. keydown
// **l. keyup
// **m. keypress
// **n. click
// **o. dblclick
// **p. mouseup
// **q. mousedown
// **r. mouseover
// **s. mouseout
// **t. mousemove
// **u. mouseenter

// **d. Yükleme ve Pencere Olayları**
// **a. load** 
// **b. resize**
window.addEventListener("resize", () => {
    console.log("Window resized!");
  });

// **c. scroll** 

//**4. Olay Nesnesi (`event`)**
document.addEventListener("click", (event) => {
    console.log("Olay tipi:", event.type); // click
    console.log("Tıklanan öğe:", event.target); // Tıklanan öğeyi döndürür
  });

  









