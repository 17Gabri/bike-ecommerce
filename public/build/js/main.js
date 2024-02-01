"use strict";

//Función para enviar evento al ir a página de producto
function goToProductPage(productId) {
  var eventData = {
    clickedElement: 'product-card',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    productId: productId
  };
  sendEvent(eventData);
}

// Función para mostrar una imagen específica
function showImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
  var eventData = {
    clickedElement: 'show-image',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    imageSrc: imageSrc
  };
  sendEvent(eventData);
}

// Función para cambiar la imagen mostrada
function changeImage(direction) {
  var imagesData = document.querySelector('.selected-product-image').dataset.images;
  var images = JSON.parse(imagesData);
  var match = document.getElementById('mainImage').getAttribute('src').match(/(\d+)(?=\.[^.]*$)/)[0] - 1;
  var currentImageIndex = match || 0;
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById('mainImage').src = images[currentImageIndex];
  var eventData = {
    clickedElement: 'show-image',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    imageSrc: images[currentImageIndex]
  };
  sendEvent(eventData);
}

// Event listener para expandir o contraer las imágenes
function showImages() {
  var expandBtn = document.querySelector('.expand-images-btn').firstElementChild;
  var productImages = document.querySelector('.product-images');
  expandBtn.classList.toggle('expanded');
  if (expandBtn.classList.contains('expanded')) {
    productImages.lastElementChild.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
    expandBtn.classList.remove('fa-chevron-down');
    expandBtn.classList.add('fa-chevron-up');
  } else {
    productImages.firstElementChild.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    expandBtn.classList.add('fa-chevron-down');
    expandBtn.classList.remove('fa-chevron-up');
  }
}

// Función para marcar/desmarcar como favorito
function setFavorite() {
  var heartIcon = document.querySelector('.heart-icon');
  heartIcon.classList.toggle('far');
  heartIcon.classList.toggle('fas');
}

// Función para realizar la compra
function comprar(productId) {
  console.log('hola');
  var thankYouUrl = document.querySelector('.buy-button').dataset.thankYouUrl;
  window.location.href = thankYouUrl;
  var eventData = {
    clickedElement: 'buy-button',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    productId: productId
  };
  sendEvent(eventData);
}

// Función para mostrar las opciones de envío y pago

function showPaymentOptions() {
  var paymentOptions = document.querySelector('.payment-options');
  var showOptionsIcon = document.querySelector('.show-options-icon');
  showOptionsIcon.classList.toggle('fa-chevron-down');
  showOptionsIcon.classList.toggle('fa-chevron-up');
  paymentOptions.style.display = paymentOptions.style.display === 'none' || paymentOptions.style.display === '' ? 'block' : 'none';
}

// Función para enviar evento de producto relacionado
function sendRelatedProductEvent(relatedProductId) {
  var eventData = {
    clickedElement: 'related-product',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    productId: relatedProductId
  };
  sendEvent(eventData);
}

// Función para enviar evento de usuario a RequestBin
function sendEvent(eventData) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  var options = {
    method: "POST",
    headers: headers,
    mode: "cors",
    body: JSON.stringify(eventData)
  };
  fetch("https://eojnwodq8wn2u1w.m.pipedream.net", options);
}