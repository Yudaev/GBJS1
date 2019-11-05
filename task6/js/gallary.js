// 1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.

let img = [
    {
        big: 'http://oach.ru/gallary/big1.jpg',
        small: 'http://oach.ru/gallary/small1.jpg'
    },
    {
        big: 'http://oach.ru/gallary/big2.jpg',
        small: 'http://oach.ru/gallary/small2.jpg'
    },
    {
        big: 'http://oach.ru/gallary/big3.jpg',
        small: 'http://oach.ru/gallary/small3.jpg'
    }
];

let fullImg = document.getElementsByClassName('fullImg')[0];
fullImg.innerHTML = 'Изображение не выбрано';

function drawGallary() {
    let miniImg = document.querySelectorAll('.small');
    for (let i = 0; i < miniImg.length; i++) {
        miniImg[i].addEventListener('click', chooseFigure);
    }
}

function chooseFigure() {

    this.classList.toggle('selected');
        if(this.classList.contains('selected') && img[this.id].big !== ''){
            fullImg.innerHTML = '<img src="'+img[this.id].big+'"  onerror="f()">';
        }else if (this.classList.contains('selected') && img[this.id].big === ''){
            fullImg.innerHTML = 'Файл отсутствует';
        }else{
            fullImg.innerHTML = 'Изображение не выбрано'
        }
    removeAllClasses('small', 'selected', this.id);
}

function removeAllClasses(baseClassName,classNameForRemove, id){
    let elements = document.querySelectorAll('.'+baseClassName);
    for (let i = 0; i < elements.length; i++) {
        if (id == i) continue;
        elements[i].classList.remove(classNameForRemove);
    }
}

function f(){
    let img = document.getElementsByClassName('fullImg')[0].getElementsByTagName('img')[0];
    console.log(img);
    img.onerror = null;
    img.src = 'https://img.pngio.com/error-404-page-was-not-found-news-http-htm-error-404-png-free-htm-png-820_420.png';
}


drawGallary();
