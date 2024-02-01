/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (() => {

eval("// Función para mostrar una imagen específica\nfunction showImage(imageSrc) {\n  document.getElementById('mainImage').src = imageSrc;\n}\n\n// Función para cambiar la imagen mostrada\nfunction changeImage(direction) {\n  var imagesData = document.querySelector('.selected-product-image').dataset.images;\n  var images = JSON.parse(imagesData);\n  var match = document.getElementById('mainImage').getAttribute('src').match(/(\\d+)(?=\\.[^.]*$)/)[0] - 1;\n  var currentImageIndex = match || 0;\n  currentImageIndex += direction;\n  if (currentImageIndex < 0) {\n    currentImageIndex = images.length - 1;\n  } else if (currentImageIndex >= images.length) {\n    currentImageIndex = 0;\n  }\n  document.getElementById('mainImage').src = images[currentImageIndex];\n}\n\n// Event listener para expandir o contraer las imágenes\nfunction showImages() {\n  var expandBtn = document.querySelector('.expand-images-btn').firstElementChild;\n  var productImages = document.querySelector('.product-images');\n  expandBtn.classList.toggle('expanded');\n  if (expandBtn.classList.contains('expanded')) {\n    productImages.lastElementChild.scrollIntoView({\n      behavior: 'smooth',\n      block: 'end'\n    });\n    expandBtn.classList.remove('fa-chevron-down');\n    expandBtn.classList.add('fa-chevron-up');\n  } else {\n    productImages.firstElementChild.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n    expandBtn.classList.add('fa-chevron-down');\n    expandBtn.classList.remove('fa-chevron-up');\n  }\n}\n\n// Función para marcar/desmarcar como favorito\nfunction setFavorite() {\n  var heartIcon = document.querySelector('.heart-icon');\n  heartIcon.classList.toggle('far');\n  heartIcon.classList.toggle('fas');\n}\n\n// Función para realizar la compra\nfunction comprar() {\n  var thankYouUrl = document.querySelector('.buy-button').dataset.thankYouUrl;\n  window.location.href = thankYouUrl;\n}\n\n// Función para mostrar las opciones de envío y pago\n\nfunction showPaymentOptions() {\n  var paymentOptions = document.querySelector('.payment-options');\n  var showOptionsIcon = document.querySelector('.show-options-icon');\n  showOptionsIcon.classList.toggle('fa-chevron-down');\n  showOptionsIcon.classList.toggle('fa-chevron-up');\n  paymentOptions.style.display = paymentOptions.style.display === 'none' || paymentOptions.style.display === '' ? 'block' : 'none';\n}\n\n//# sourceURL=webpack://bike_ecommerce/./assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/main.js"]();
/******/ 	
/******/ })()
;