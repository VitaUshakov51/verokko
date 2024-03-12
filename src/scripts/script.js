(function () {

    const productCategoryOne = [
        {
            title: 'Мармелад жевательный «Фруктово-ягодный микс',
            image: 'marmelad_1-1.png',
            roster: ' сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',

        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ» ',
            image: 'marmelad_1-2.png',
            roster: ' сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',

        },
    ]
    const productCategoryTwo = [
        {
            title: 'Мармелад жевательный «КУБИКИ» ассорти в сахарной обсыпке',
            image: 'marmelad_2_1.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие- клубника, арбуз, дыня, банан, сливки соки концентрированные клубника, арбуз, банан гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',

        },
        {
            title: 'Мармелад жевательный «Червячки» в кислой обсыпке',
            image: 'marmelad_2-2.png',
            roster: 'Cахар, патока, желеобразователь желатин (говяжий), вода питьевая, регулятор кислотности-лимонная кислота, концентрированный соки (абрикос, киви, брусника, малина, лимон, апельсин, яблоко), глазирователь карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',

        },
    ]
    const myTabs = document.querySelectorAll('.catalog__tab');
    const content= document.getElementById('content');
    myTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            clearSlider();
            tab.classList.add('active');
            if (tab.getAttribute('id')=== 'oneCategory') {
                $('.catalog__data-content').slick('unslick');
                content.innerHTML = '';
                productCategoryOne.forEach(product => {
                    const slide = document.createElement('div');
                    slide.className = 'catalog__slider';
                    const catalogSliderMobileHead = document.createElement('div');
                    catalogSliderMobileHead.className = 'catalog__slider-mobile-head';
                    catalogSliderMobileHead.innerHTML = `<div class="catalog__slider-content-title-mobile" id="mobileProductName">${product.title}</div>
                        <div class="catalog__slider-content-text-mobile">Срок хранения мармелада - 6 месяцев</div>`
                    const catalogSliderInner = document.createElement('div');
                    catalogSliderInner.className = 'catalog__slider-inner';
                    catalogSliderInner.innerHTML = `
                                                    <div class="catalog__slider-media">
                                    <div class="catalog__slider-image">
                                        <img id="productImage" src="src/images/products/${product.image}" alt="Мармелад">
                                    </div>
                                    <div class="catalog__slider-image-text">
                                        <div class="catalog__slider-image-roster-title" >Состав:</div>
                                        <div class="catalog__slider-image-roster" id="productRoster">${product.roster}</div>
                                    </div>
                                </div>
                                <div class="catalog__slider-nutrition-small-mobile">
                                    <div class="catalog__slider-content-nutrition-mobile">Пищевая ценность на 100 гр.
                                        продукта:
                                    </div>
                                    <div class="catalog__slider-content-items-mobile">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value">${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                </div>
                                <div class="catalog__slider-content">
                                    <div class="catalog__slider-content-title" id="productTitle">${product.title}</div>
                                    <div class="catalog__slider-content-text">Срок хранения мармелада - 6 месяцев</div>
                                    <div class="catalog__slider-content-nutrition">Пищевая ценность на 100 гр. продукта:
                                    </div>
                                    <div class="catalog__slider-content-items">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value" >${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-button">
                                        <button class=" btn">Запросить оптовый прайс</button>
                                    </div>
                                </div>`
                    const catalogSliderMobileRoster = document.createElement('div');
                    catalogSliderMobileRoster.className = 'catalog__slider-mobile-roster';
                    catalogSliderMobileRoster.innerHTML = `<div class="catalog__slider-image-roster-title-mobile">Состав:</div>
                                <div class="catalog__slider-image-roster-mobile" id="productRosterMobile">${product.roster}</div>
                                <div class="catalog__slider-content-button-mobile">
                                    <button class=" btn">Запросить оптовый прайс</button>
                                </div>`
                    slide.appendChild(catalogSliderMobileHead);
                    slide.appendChild(catalogSliderInner);
                    slide.appendChild(catalogSliderMobileRoster);
                    content.appendChild(slide);
                })
                slickSliderInit();
            }
            if (tab.getAttribute('id')=== 'twoCategory') {
                $('.catalog__data-content').slick('unslick');
                content.innerHTML = '';
                productCategoryTwo.forEach(product => {
                    const slide = document.createElement('div');
                    slide.className = 'catalog__slider';
                    const catalogSliderMobileHead = document.createElement('div');
                    catalogSliderMobileHead.className = 'catalog__slider-mobile-head';
                    catalogSliderMobileHead.innerHTML = `<div class="catalog__slider-content-title-mobile" id="mobileProductName">${product.title}</div>
                        <div class="catalog__slider-content-text-mobile">Срок хранения мармелада - 6 месяцев</div>`
                    const catalogSliderInner = document.createElement('div');
                    catalogSliderInner.className = 'catalog__slider-inner';
                    catalogSliderInner.innerHTML = `
                                                    <div class="catalog__slider-media">
                                    <div class="catalog__slider-image">
                                        <img id="productImage" src="src/images/products/${product.image}" alt="Мармелад">
                                    </div>
                                    <div class="catalog__slider-image-text">
                                        <div class="catalog__slider-image-roster-title" >Состав:</div>
                                        <div class="catalog__slider-image-roster" id="productRoster">${product.roster}</div>
                                    </div>
                                </div>
                                <div class="catalog__slider-nutrition-small-mobile">
                                    <div class="catalog__slider-content-nutrition-mobile">Пищевая ценность на 100 гр.
                                        продукта:
                                    </div>
                                    <div class="catalog__slider-content-items-mobile">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value">${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                </div>
                                <div class="catalog__slider-content">
                                    <div class="catalog__slider-content-title" id="productTitle">${product.title}</div>
                                    <div class="catalog__slider-content-text">Срок хранения мармелада - 6 месяцев</div>
                                    <div class="catalog__slider-content-nutrition">Пищевая ценность на 100 гр. продукта:
                                    </div>
                                    <div class="catalog__slider-content-items">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value" >${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-button">
                                        <button class=" btn">Запросить оптовый прайс</button>
                                    </div>
                                </div>`
                    const catalogSliderMobileRoster = document.createElement('div');
                    catalogSliderMobileRoster.className = 'catalog__slider-mobile-roster';
                    catalogSliderMobileRoster.innerHTML = `<div class="catalog__slider-image-roster-title-mobile">Состав:</div>
                                <div class="catalog__slider-image-roster-mobile" id="productRosterMobile">${product.roster}</div>
                                <div class="catalog__slider-content-button-mobile">
                                    <button class=" btn">Запросить оптовый прайс</button>
                                </div>`
                    slide.appendChild(catalogSliderMobileHead);
                    slide.appendChild(catalogSliderInner);
                    slide.appendChild(catalogSliderMobileRoster);
                    content.appendChild(slide);
                })
                slickSliderInit()
            }

        })
    })

    function slickSliderInit(){
        $('.catalog__data-content').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            focusOnSelect: true,
            arrows: false
        });

        $('.catalog__arrow-prev').on('click', function (e) {
            e.preventDefault()
            $('.catalog__data-content').slick('slickPrev')
        })
        $('.catalog__arrow-next').on('click', function (e) {
            e.preventDefault()
            $('.catalog__data-content').slick('slickNext')
        })
    }
    function clearSlider() {
        myTabs.forEach(tab => {
            tab.classList.remove('active');
        })

    }
    function showFirstSlider(){
        myTabs[0].classList.add('active');
        productCategoryOne.forEach(product => {
            const slide = document.createElement('div');
            slide.className = 'catalog__slider';
            const catalogSliderMobileHead = document.createElement('div');
            catalogSliderMobileHead.className = 'catalog__slider-mobile-head';
            catalogSliderMobileHead.innerHTML = `<div class="catalog__slider-content-title-mobile" id="mobileProductName">${product.title}</div>
                        <div class="catalog__slider-content-text-mobile">Срок хранения мармелада - 6 месяцев</div>`
            const catalogSliderInner = document.createElement('div');
            catalogSliderInner.className = 'catalog__slider-inner';
            catalogSliderInner.innerHTML = `
                                                    <div class="catalog__slider-media">
                                    <div class="catalog__slider-image">
                                        <img id="productImage" src="src/images/products/${product.image}" alt="Мармелад">
                                    </div>
                                    <div class="catalog__slider-image-text">
                                        <div class="catalog__slider-image-roster-title" >Состав:</div>
                                        <div class="catalog__slider-image-roster" id="productRoster">${product.roster}</div>
                                    </div>
                                </div>
                                <div class="catalog__slider-nutrition-small-mobile">
                                    <div class="catalog__slider-content-nutrition-mobile">Пищевая ценность на 100 гр.
                                        продукта:
                                    </div>
                                    <div class="catalog__slider-content-items-mobile">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value">${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                </div>
                                <div class="catalog__slider-content">
                                    <div class="catalog__slider-content-title" id="productTitle">${product.title}</div>
                                    <div class="catalog__slider-content-text">Срок хранения мармелада - 6 месяцев</div>
                                    <div class="catalog__slider-content-nutrition">Пищевая ценность на 100 гр. продукта:
                                    </div>
                                    <div class="catalog__slider-content-items">
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Белки</div>
                                            <div class="catalog__slider-content-item-value" >${product.protein}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Жиры</div>
                                            <div class="catalog__slider-content-item-value">${product.fat}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Углеводы</div>
                                            <div class="catalog__slider-content-item-value">${product.carb}</div>
                                        </div>
                                        <div class="catalog__slider-content-item">
                                            <div class="catalog__slider-content-item-title">Ккал / кДЖ</div>
                                            <div class="catalog__slider-content-item-value">300 / 1270</div>
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-conditionals">
                                        <div class="catalog__slider-content-conditionals-title">Условия хранения:</div>
                                        <div class="catalog__slider-content-conditionals-text">При t = 18 ± 5⁰С и
                                            относительной влажности воздуха 75%
                                        </div>
                                    </div>
                                    <div class="catalog__slider-content-button">
                                        <button class=" btn">Запросить оптовый прайс</button>
                                    </div>
                                </div>`
            const catalogSliderMobileRoster = document.createElement('div');
            catalogSliderMobileRoster.className = 'catalog__slider-mobile-roster';
            catalogSliderMobileRoster.innerHTML = `<div class="catalog__slider-image-roster-title-mobile">Состав:</div>
                                <div class="catalog__slider-image-roster-mobile" id="productRosterMobile">${product.roster}</div>
                                <div class="catalog__slider-content-button-mobile">
                                    <button class=" btn">Запросить оптовый прайс</button>
                                </div>`
            slide.appendChild(catalogSliderMobileHead);
            slide.appendChild(catalogSliderInner);
            slide.appendChild(catalogSliderMobileRoster);
            content.appendChild(slide);
        })
        slickSliderInit();
    }
    showFirstSlider();


    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const shadow = document.getElementById('shadow')
    const body = document.getElementById('body')
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active')
        shadow.classList.toggle('show')
        body.classList.toggle('noScroll')
    })





})()