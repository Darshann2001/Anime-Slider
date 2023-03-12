let main = document.querySelector('main');
let flag = 0;

const controller = (x) => {
    flag = flag + x;
    slideShow(flag);
}

const slideShow = (num) => {
    let articleSlides1 = document.querySelectorAll(".article-parent");
    let quoteslides = document.querySelectorAll('.article-description-section');
    console.log(articleSlides1);

    if (num == articleSlides1.length && num == quoteslides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = articleSlides1.length - 1;
        num = articleSlides1.length - 1;

    }
    console.log(num);

    articleSlides1.forEach(element => {
        element.dataset.status = 'unactive';
    });

    quoteslides.forEach(elem => {
        elem.dataset.quote = 'unactivequote';
    })

    // const quote_num = document.querySelectorAll('.article-description-section');
    quoteslides[num].dataset.quote = 'activequote';
    articleSlides1[num].dataset.status = 'active';

    const shurikener = document.querySelectorAll('.shuriken');

    shurikener.forEach(shur => {
        shur.dataset.shuriken = 'unactiveshuriken';

    })
    shurikener[num].dataset.shuriken = 'activeshuriken';
}
let cutomStyle = document.querySelectorAll('main> .article')
let x = document.body.offsetWidth;
let y = document.body.clientHeight;

cutomStyle.forEach(element => {
    element.style.height = 'y';
});
cutomStyle.forEach(element => {
    element.style.width = 'x';
});

console.log(x)
console.log(y)


const hamburgerBtn = document.getElementById('hamburgerId');
var overlay = document.getElementById('navbarId');
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle("close");
    overlay.classList.toggle("overlay");
})