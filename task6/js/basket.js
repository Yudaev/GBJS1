// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить»,
// при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать
// общую сумму заказа.

let goods = [
    {
        name: 'Наушники Sony WH-1000XM3',
        price: '24990',
        img: 'Sony-WH-1000XM3.webp',
        description: 'Bluetooth-наушники с микрофоном, полноразмерные, закрытые, время работы 38 ч',
        url: 'https://market.yandex.ru/product--naushniki-sony-wh-1000xm3/225699326'
    },
    {
        name: 'Процессор AMD Ryzen 7 3700X',
        price: '26147',
        img: 'AMD-Ryzen 7-3700X.webp',
        description: 'Socket: AM4, Объем кэша L3: 32768 КБ, Количество ядер: 8, Частота процессора: 3600 МГц',
        url: 'https://market.yandex.ru/product--protsessor-amd-ryzen-7-3700x/508252153'
    },
    {
        name: 'Монитор Eizo FlexScan EV2750',
        price: '62691',
        img: 'Eizo-Fle-Scan-EV2750.webp',
        description: 'ЖК-монитор с диагональю 27", тип матрицы экрана TFT IPS, разрешение 2560x1440 (16:9)',
        url: 'https://market.yandex.ru/product--monitor-eizo-flexscan-ev2750/12906504'
    },
    {
        name: 'Смартфон Apple iPhone Xs Max 256GB',
        price: '93990',
        img: 'Apple-iPhone-Xs-Max-256GB.webp',
        description: 'смартфон с iOS 12, поддержка двух SIM-карт (nano SIM+eSIM), экран 6.5", разрешение 2688x1242',
        url: 'https://market.yandex.ru/product--smartfon-apple-iphone-xs-max-256gb/175941400'
    }
],
    basket = [],
    goodsBlock = document.getElementsByClassName('goods')[0];

for (let i = 0; i < goods.length; i++){
    let good = document.createElement('div');
    good.setAttribute('class', 'good');
    good.innerHTML = '<h3>'+goods[i].name+'</h3>';
    good.innerHTML += '<img src="img/basket/'+goods[i].img+'">';
    good.innerHTML += '<span><b>Цена:</b> '+goods[i].price+'</span>';
    good.innerHTML += '<span><b>Описание:</b> '+goods[i].description+'</span>';
    good.innerHTML += '<a id="'+i+'" href="#" class="add">Добавить в корзину</a>';
    goodsBlock.appendChild(good);
    document.getElementById(i).addEventListener('click', addInBasket);
}

function addInBasket() {
    if(checkBasket(this.id)){
        let newOrder = {
            id: this.id,
            count: 1
        };
        basket.push(newOrder);
    }else{
        for (let key in basket){
            if(basket[key].id == this.id) ++basket[key].count;
        }
    }
    drawBasket();
    console.log(basket);
}

function checkBasket(id){
    if(basket.length > 0){
        for(let i = 0; i < basket.length; i++){
            if (basket[i].id == id) return false;
        }
    }
    return true;
}

function drawBasket() {
    let basketBlock = document.getElementsByClassName('basket')[0];
    basketBlock.innerHTML = '<table class="basketTable">' +
                                '<tr>' +
                                    '<td>Наименование товара</td>' +
                                    '<td>Цена за 1 штуку</td>' +
                                    '<td>Количество штук</td>' +
                                    '<td>Итого</td>' +
                                '</tr>' +
                            '</table>';

    let basketTable = document.getElementsByClassName('basketTable')[0],
        fullOrderPrice = 0;

    for(let i = 0; i < basket.length+1; i++){
        let rowOrder = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdPrice = document.createElement('td'),
            tdHowMuch = document.createElement('td'),
            tdSumPrice = document.createElement('td');

        if (i < basket.length) {
            tdName.innerText = goods[basket[i].id].name;
            tdPrice.innerText = goods[basket[i].id].price;
            tdHowMuch.innerText = basket[i].count;
            tdSumPrice.innerText = basket[i].count * goods[basket[i].id].price;
            fullOrderPrice += basket[i].count * goods[basket[i].id].price;
        }else{
            tdName.innerText = 'Итого';
            tdPrice.innerText = '';
            tdHowMuch.innerText = '';
            tdSumPrice.innerText = fullOrderPrice;
        }

        rowOrder.appendChild(tdName);
        rowOrder.appendChild(tdPrice);
        rowOrder.appendChild(tdHowMuch);
        rowOrder.appendChild(tdSumPrice);
        basketTable.appendChild(rowOrder);
    }
    console.log(basketBlock);
}