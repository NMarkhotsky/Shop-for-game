!function(){var e,t,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),document.querySelector(".js-close-menu"),n=document.querySelector("[data-menu-btn]"),t.addEventListener("click",(function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is__open"),n.classList.toggle("is__open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is__open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));new Swiper(".mySwiper",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}();
//# sourceMappingURL=index.e470bd75.js.map
