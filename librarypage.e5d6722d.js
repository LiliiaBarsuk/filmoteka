var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired76b;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired76b=n);var i=n("25RCP"),r=n("amyG6");const a=document.querySelector("#logout-lib"),l=((0,i.initializeApp)({apiKey:"AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",authDomain:"filmoteka-bdb19.firebaseapp.com",projectId:"filmoteka-bdb19",storageBucket:"filmoteka-bdb19.appspot.com",messagingSenderId:"1051248700372",appId:"1:1051248700372:web:2dc6796345cd1c6fa94441"}),(0,r.getAuth)());a.addEventListener("click",(function(){(0,r.signOut)(l).then((()=>{location.href="../index.html"})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=librarypage.e5d6722d.js.map
