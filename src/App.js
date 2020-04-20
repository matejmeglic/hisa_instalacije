import './App.css'

// //
// LoadDefaults();

// //
// var rd_pritlicje = document.getElementById("pritlicje").addEventListener("click", function() {LoadPritlicje();});
// var rd_nadstropje = document.getElementById("nadstropje").addEventListener("click", function() {LoadNadstropje();});

// //
// var switchStikala = document.getElementById("stikala");
// switchStikala.checked=false;
// switchStikala.addEventListener("click", function(){CheckStikala();})

// var switchVticnice = document.getElementById("vticnice");
// switchVticnice.checked=false;
// switchVticnice.addEventListener("click", function(){CheckVticnice();})

// var switchVticnice = document.getElementById("lan");
// switchVticnice.checked=false;
// switchVticnice.addEventListener("click", function(){CheckLAN();})

// var switchVticnice = document.getElementById("luci");
// switchVticnice.checked=false;
// switchVticnice.addEventListener("click", function(){CheckLuci();})

// var switchVticnice = document.getElementById("napisi");
// switchVticnice.checked=false;
// switchVticnice.addEventListener("click", function(){CheckNapisi();})

// var switchVticnice = document.getElementById("kanaleta");
// switchVticnice.checked=false;
// switchVticnice.addEventListener("click", function(){CheckKanaleta();})

// //
// function LoadPritlicje() {
//   var galerija = document.getElementById("gallery");
//   galerija.innerHTML="";
//   var tloris_pritlicje = document.createElement("img");
//   tloris_pritlicje.src = "./static/img/tloris_pritlicje.jpg";
//   galerija.appendChild(tloris_pritlicje);
//   CheckStikala();
//   CheckVticnice();
//   CheckLAN();
//   CheckLuci();
//   CheckNapisi();
//   CheckKanaleta();
// }  

// function LoadNadstropje() {
//   galerija = document.getElementById("gallery");
//   galerija.innerHTML="";
//   tloris_nadstropje = document.createElement("img");
//   tloris_nadstropje.src = "./static/img/tloris_nad.jpg";
//   galerija.appendChild(tloris_nadstropje);
//   CheckStikala();
//   CheckVticnice();
//   CheckLAN();
//   CheckLuci();
//   CheckNapisi();
//   CheckKanaleta();
// }

// //
// function LoadDefaults() { //cleanup function on refresh
  
//       var removeImage = document.getElementById("check-vticnice");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       var removeImage = document.getElementById("check-stikala");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       var removeImage = document.getElementById("check-napisi");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       var removeImage = document.getElementById("check-lan");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       var removeImage = document.getElementById("check-luci");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       var removeImage = document.getElementById("check-kanaleta");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
    
//       document.getElementById("pritlicje").checked = true;
//       document.getElementById("vticnice").checked = false;
//       document.getElementById("stikala").checked = false;
//       document.getElementById("napisi").checked = false;
//       document.getElementById("lan").checked = false;
//       document.getElementById("luci").checked = false;
//       document.getElementById("kanaleta").checked = false;

//     LoadPritlicje();
// }

// //
// /* function Diff() {
//     if (document.getElementById("pritlicje").checked) { 
//     var imgA = document.createElement("img");
//     imgA.src = "./static/img/prit_stikala.png";
//     imgA.id = "check-stikala";
//     galerija.appendChild(imgA);
//   } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//     var imgA = document.createElement("img");
//     imgA.src = "./static/img/nad_stikala.png";
//     imgA.id = "check-stikala";
//     galerija.appendChild(imgA);
//   }
//   } 
//   }
// } */


// //
//   function CheckStikala() {
// //
// /* var napisi = document.getElementById("napisi");
// console.log(napisi.checked);
// if (napisi.checked===false) {      
//   document.getElementById("napisi").checked=true;
//   console.log(napisi.checked); 
//      // CheckNapisi();
//       }*/

//     var switchA = document.getElementById("stikala");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_stikala.png";
//       imgA.id = "check-stikala";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_stikala.png";
//       imgA.id = "check-stikala";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-stikala");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//       }
//     }


//   function CheckVticnice() {
//     var switchA = document.getElementById("vticnice");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_vticnice.png";
//       imgA.id = "check-vticnice";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_vticnice.png";
//       imgA.id = "check-vticnice";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-vticnice");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//     }
//   }

//   function CheckLAN() {
//     var switchA = document.getElementById("lan");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_lan.png";
//       imgA.id = "check-lan";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_lan.png";
//       imgA.id = "check-lan";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-lan");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//     }
//   }

//   function CheckLuci() {
//     var switchA = document.getElementById("luci");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_luci.png";
//       imgA.id = "check-luci";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_luci.png";
//       imgA.id = "check-luci";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-luci");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//     }
//   }

//   function CheckNapisi() {
//     var switchA = document.getElementById("napisi");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_napisi.png";
//       imgA.id = "check-napisi";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_napisi.png";
//       imgA.id = "check-napisi";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-napisi");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//     }
//   }

//   function CheckKanaleta() {
//     var switchA = document.getElementById("kanaleta");
//     if (switchA.checked) {
//     var galerija = document.getElementById("gallery");
//     if (switchA.checked === true && document.getElementById("pritlicje").checked) { 
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/prit_kanaleta.png";
//       imgA.id = "check-kanaleta";
//       galerija.appendChild(imgA);
//     } else if (switchA.checked === true && document.getElementById("nadstropje").checked){
//       var imgA = document.createElement("img");
//       imgA.src = "./static/img/nad_kanaleta.png";
//       imgA.id = "check-kanaleta";
//       galerija.appendChild(imgA);
//     }
//     } else {
//       var removeImage = document.getElementById("check-kanaleta");
//       if (removeImage !== null) {
//       removeImage.parentNode.removeChild(removeImage);
//       }
//     }
//   }

export default function App() {
  return 'Moj app'
}