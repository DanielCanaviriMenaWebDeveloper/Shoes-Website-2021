let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
};

window.onscroll = () => {
    if(window.innerWidth < 1200) {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    }
};

/* PRODUCT PREVIEW MODAL */
let productPreviewContainer = document.querySelector('.products-preview-container');

let productPreview = document.querySelectorAll('.products-preview-container .product-preview');

document.querySelectorAll(".products .swiper .swiper-wrapper .slide .btn").forEach(detailBtn => {
    detailBtn.onclick = () => {
        productPreviewContainer.style.display = 'block';
        let name = detailBtn.getAttribute('data-product');
        console.log(name);
        productPreview.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target) {
                preview.style.display = 'flex';
            }
        });
    }
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close => {
    close.onclick = () => {
        productPreviewContainer.style.display = 'none';
        productPreview.forEach(closePreview => {
            closePreview.style.display = 'none';
        });
    };
});

console.log(productPreviewContainer, productPreview);
/* document.querySelectorAll(.produc) */

/* SWIPER.JS */
var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20, 
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },    
});

var swiper = new Swiper(".reviews-slider", {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".reviews-slider", {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});