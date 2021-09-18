gsap.from('.navbar', { duration:0.6, ease:"power2. out", y:-60});

gsap.from('.catalogue', { duration:0.9, ease:"power2. out", y:-60, delay:0.1});

function myFunction(){
    var img = document.getElementsByClassName('badi_img')[0];
    img.src = 'Untitled-2.png';
    gsap.to('.badi_img',{ duration: 2.5, ease: "expo.out", x:-50 });
}

function myFunction1(){
    var img = document.getElementsByClassName('badi_img')[0];
    img.src = 'img2.jpeg';
    gsap.to('.badi_img',{ duration: 2.5, ease: "expo.out", x:-50 });
}

function myFunction2(){
    var img = document.getElementsByClassName('badi_img')[0];
    img.src = 'img3.jpeg';
    gsap.to('.badi_img',{ duration: 2.5, ease: "expo.out", x:-50 });
}

document.querySelectorAll(".badi_img").forEach((dot, i) => {
	gsap.to(dot,{ duration: 2.5, ease: "expo.out", x:-50 });
})

var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
var img3 = document.getElementsByClassName('img3')[0];

// img1.addEventListener("click", function(){
// 	var img = document.getElementsByClassName('badi_img')[0];
// 	img.src = 'Untitled-2.png';
//     gsap.to('.badi_img',{ duration: 2.5, ease: "expo.out", x:-50 });
// })



document.getElementsByClassName("img1")[0].click(function() {
  $('.animate__fadeInRight').classList.toggle(".animate__fadeInRight-active");
});