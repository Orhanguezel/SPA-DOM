/*console.log("Externel JS");

const age =prompt("Yasinizi giriniz"); // prompt fonksiyonu ile kullanıcıdan veri alınır.
console.log(age);
alert("Yasiniz: "+age); // alert fonksiyonu ile kullanıcıya bilgi verilir.
console.log("test"); // console ekranına yazdırma işlemi yapılır.
*/

//console.log(window.alert); 
/*
const age =prompt("Yasinizi giriniz"); // prompt fonksiyonu ile kullanıcıdan veri alınır.
console.log(typeof age);
if(Number(age)>=18){
    alert("Ehliyet alabilirsiniz.");
}
else{
    alert("Ehliyet alamazsınız." +age );
}

*/
// console.log(window.document);
/*
const header = document.querySelector("h1");
console.log(header);

const allparagraph = document.querySelectorAll("p");
console.log(allparagraph);// NodeList döner

const classParagraph = document.querySelector(".text");
const idParagraph = document.querySelector("#text2");
const idParagraph2 = document.getElementById("text2");

classParagraph.style.color = "red";
idParagraph.style.color = "blue";
idParagraph2.style.color = "green";

allparagraph.forEach((item) => {
    item.style.color = "purple";
}
);
header.classList.add("highlight");

// innerText, innerHTML, textContent
header.innerText = "Merhaba"; // sadece text içeriğini değiştirir.
console.log(header.innerText);

header.innerHTML = "<h2>Merhaba Orhan</h2>"; // html içeriğini değiştirir.
console.log(header.innerHTML);

header.textContent = "Hello"; // sadece text içeriğini değiştirir.
console.log(header.textContent);



document.querySelector(".hide").innerText; // text içeriğini alır.
console.log(document.querySelector(".hide").innerText);

document.querySelector(".hide").textContent; // text içeriğini alır.
console.log(document.querySelector(".hide").textContent);

*/

// Element erstellen

const newParagraph = document.createElement("p");
newParagraph.innerText = "Bu bir paragraf";

//document.querySelector("div").append(newParagraph, "Hello"); // div içerisine ekler.
//document.querySelector("div").appendChild("Hello");// hata verir.
//document.querySelector("div").appendChild("<p>Hello</p>");// hata verir.
//document.body.append(newParagraph);// div içerisine ekler.

// document.body.append(newParagraph);