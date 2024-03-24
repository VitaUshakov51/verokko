(function () {

    // Товары
    const productCategoryOne = [
        {
            title: 'Мармелад жевательный «ПИТОН»',
            image: 'marmelad_1-3.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизатор «Бабл-Гам» концентрированные соки (малина, клубника, банан, черника, лимон, яблоко), гидрализованный молочный белок, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный Червячки «КОЛА»',
            image: 'marmelad_1-6.jpg',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота,  ароматизатор сокосодержащий кола.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ» ',
            image: 'marmelad_1-2.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },

        {
            title: 'Мармелад жевательный «МИШКИ»',
            image: 'marmelad_1-4.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, концентрированный виноградный сок, ароматизаторы (дюшес, киви, ежевика, арбуз, малина, лимон, апельсин, яблоко), краситель пищевой',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «МОРЕ»',
            image: 'marmelad_1-5.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «Фруктово-ягодный микс',
            image: 'marmelad_1-1.png',
            roster: ' сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },

    ]
    const productCategoryTwo = [

        {
            title: 'Мармелад жевательный «Червячки» в кислой обсыпке',
            image: 'marmelad_2-2.png',
            roster: 'Cахар, патока, желеобразователь желатин (говяжий), вода питьевая, регулятор кислотности-лимонная кислота, концентрированный соки (абрикос, киви, брусника, малина, лимон, апельсин, яблоко), глазирователь карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
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
            title: 'Мармелад жевательный «Ягодный микс» в сахаре',
            image: 'marmelad_2-3.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (ежевика, морожка, малина ), соки концентрированные, гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
    ]
    const productCategoryThree = [

        {
            title: ' Мармелад жевательный «ЧЕРВЯЧКИ» сливочно-фруктовые',
            image: 'marmelad_3-2.png',
            roster: 'Сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, концентрированные соки (малина, клубника, банан, черника, лимон, яблоко, абрикос, персик ), гидрализованный молочный белок, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «МОРЕ» сливочно-фруктовый',
            image: 'marmelad_3-1.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (малина, клубника, банан, черника, лимон, яблоко, абрикос, дыня, персик ), гидрализованый молочный белок, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ-БОЛЬШИЕ»',
            image: 'marmelad_3-3.png',
            roster: 'Сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие, соки концентрированные (абрикос, вишня, клубника, малина, лимон, апельсин, яблоко), краситель пищевой Е171, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
    ]
    const productCategoryFour = [
        {
            title: 'Мармелад жевательный «ЛЕНТОЧКИ КОЛА кислые»',
            image: 'marmelad_4-1.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, яблочная кислота, ароматизатор сокосодержащий кола.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «Сливочно-фруктовые ленточки»',
            image: 'marmelad_4-2.png',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы (абрикос, киви, брусника, малина, лимон, апельсин, яблоко, лайм, банан, черника, голубика), комплексные пищевые добавки «Esco» (абрикос, киви, брусника, малина, лимон, апельсин, яблоко, лайм, банан, черника, клубника), пищевой краситель E171, йогурт сухой обезжиренный.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: ' Мармелад жевательный «Фруктово-ягодные ленточки»',
            image: 'marmelad_4-3.png',
            roster: 'Cахар, патока, желеобразователь желатин (говяжий), вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (брусника, малина, лимон, апельсин, яблоко), комплексные пищевые добавки «Esco» (брусника, малина, лимон, апельсин, яблоко).',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
    ]
    const productCategoryFive = [
        {
            title: 'Мармелад жевательный «МИШКИ» 175 гр/20 шт. шоу-бокс',
            image: 'marmelad_5-1.jpg',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, концентрированный виноградный сок, ароматизаторы (дюшес, киви, ежевика, арбуз, малина, лимон, апельсин, яблоко), краситель пищевой.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «КУБИКИ» ассорти в сахарной обсыпке 180 гр/20 шт. шоу-бокс',
            image: 'marmelad_5-2.jpg',
            roster: 'Cироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие- клубника, арбуз, дыня, банан, сливки соки концентрированные клубника, арбуз, банан гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «Фруктово-ягодный микс» 175 гр/20 шт. шоу-бокс',
            image: 'marmelad_5-3.jpg',
            roster: 'Сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ» 175 гр/20 шт. шоу-бокс',
            image: 'marmelad_5-4.png',
            roster: 'Сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «Ягодный микс» в сахаре 175 гр/20 шт. шоу-бокс',
            image: 'marmelad_5-5.png',
            roster: 'Сироп глюкозный, сахар, патока, желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (ежевика, морожка, малина ), соки концентрированные, гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЛЕНТОЧКИ АССОРТИ» кислые 250гр/12 шт',
            image: 'marmelad_5-6.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (ежевика, яблоко, арбуз)',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЛЕНТОЧКИ КОЛА» кислые 250гр/12 шт',
            image: 'marmelad_5-7.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизатор сокосодержащий кола.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЛЕНТОЧКИ СЛИВОЧНО-ФРУКТОВЫЕ» 250гр/12 шт',
            image: 'marmelad_5-8.png',
            roster: 'Сироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (абрикос, брусника, малина, яблоко, лайм, банан, дыня, клубника), гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЛЕНТОЧКИ фруктово-ягодные» 250гр/12 шт',
            image: 'marmelad_5-9.png',
            roster: 'Сироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (брусника, малина, лимон, апельсин, клубника, черника, яблоко)',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «МИШКИ» 250гр/12 шт',
            image: 'marmelad_5-10.png',
            roster: 'Сироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, концентрированный виноградный сок, ароматизаторы (дюшес, киви, ежевика, арбуз, малина, лимон, апельсин, яблоко), краситель пищевой',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ СЛИВОЧНО-ФРУКТОВЫЕ КИСЛЫЕ» 250гр/12 шт',
            image: 'marmelad_5-11.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, яблочная кислота, ароматизаторы сокосодержащие (абрикос, брусника, малина, яблоко, лайм, банан, дыня, клубника), гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «КУБИКИ» ассорти в сахарной обсыпке 257гр/12 шт',
            image: 'marmelad_5-12.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие- клубника, арбуз, дыня, банан, сливки соки концентрированные клубника, арбуз, банан гидрализованный молочный белок.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «МОРЕ» 250гр/12 шт',
            image: 'marmelad_5-13.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «Фруктово-ягодный микс» 250гр/12шт',
            image: 'marmelad_5-14.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
        {
            title: 'Мармелад жевательный «ЧЕРВЯЧКИ» 250гр/12 шт',
            image: 'marmelad_5-15.png',
            roster: 'Cироп глюкозный, сахар, патока,  желеобразователь желатин (говяжий),вода питьевая, регулятор кислотности-лимонная кислота, ароматизаторы сокосодержащие (груша, ежевика, клубника, малина, лимон, апельсин, яблоко), соки концентрированные, глазирователи карнаубский воск, растительное масло.',
            protein: 0.4,
            fat: 0.1,
            carb: 73,
            kkal: '300 ккал / 1270 кДЖ',
        },
    ]


    const myTabs = document.querySelectorAll('.catalog__tab');
    const content = document.getElementById('content');
    myTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            clearSlider();
            tab.classList.add('active');
            if (tab.getAttribute('id') === 'oneCategory') {
                getProducts(productCategoryOne);
            }
            if (tab.getAttribute('id') === 'twoCategory') {
                getProducts(productCategoryTwo);
            }
            if (tab.getAttribute('id') === 'threeCategory') {
                getProducts(productCategoryThree);
            }
            if (tab.getAttribute('id') === 'fourCategory') {
                getProducts(productCategoryFour);
            }
            if (tab.getAttribute('id') === 'fiveCategory') {
                getProducts(productCategoryFive);
            }

        })
    })

    function getProducts(categoryList) {
        $('.catalog__data-content').slick('unslick');
        content.innerHTML = '';
        categoryList.forEach(product => {
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
                                        <a href="#send" class=" btn">Запросить оптовый прайс</a>
                                    </div>
                                </div>`
            const catalogSliderMobileRoster = document.createElement('div');
            catalogSliderMobileRoster.className = 'catalog__slider-mobile-roster';
            catalogSliderMobileRoster.innerHTML = `<div class="catalog__slider-image-roster-title-mobile">Состав:</div>
                                <div class="catalog__slider-image-roster-mobile" id="productRosterMobile">${product.roster}</div>
                                <div class="catalog__slider-content-button-mobile">
                                    <a href="#send" class="btn">Запросить оптовый прайс</a>
                                </div>`
            slide.appendChild(catalogSliderMobileHead);
            slide.appendChild(catalogSliderInner);
            slide.appendChild(catalogSliderMobileRoster);
            content.appendChild(slide);
        })
        slickSliderInit()
    }

    function slickSliderInit() {
        $('.catalog__data-content').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            focusOnSelect: true,
            arrows: false,
            adaptiveHeight: true
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

    function showFirstSlider() {
        myTabs[0].classList.add('active');
        productCategoryFive.forEach(product => {
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
                                        <a href="#send" class=" btn">Запросить оптовый прайс</a>
                                    </div>
                                </div>`
            const catalogSliderMobileRoster = document.createElement('div');
            catalogSliderMobileRoster.className = 'catalog__slider-mobile-roster';
            catalogSliderMobileRoster.innerHTML = `<div class="catalog__slider-image-roster-title-mobile">Состав:</div>
                                <div class="catalog__slider-image-roster-mobile" id="productRosterMobile">${product.roster}</div>
                                <div class="catalog__slider-content-button-mobile">
                                    <a href="#send" class=" btn">Запросить оптовый прайс</a>
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
        clickLinks();
    })

    const links = document.querySelectorAll('.header__nav-link');

    function clickLinks() {
        links.forEach(item => {
            item.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active')
                shadow.classList.remove('show')
                body.classList.remove('noScroll')
            })
        })
    }

    const miniFormButton = document.getElementById('miniFormButton');
    miniFormButton.addEventListener('click', () => {
        const form = $(this).closest('form');
        const actUrl = form.attr('action');
        $.ajax({
            url: actUrl,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function (data) {
                // sessionStorage.setItem('sendForm', 'true');
                // message.style.opacity = '1';
                // inputElements.forEach(input => {
                //     input.value = '';
                //     submitButton.disabled = true;
                // })
                alert('Сообщение отправлено')

            },
            error: function () {
                alert('Ошибка, обновите страницу')
                // message.style.opacity = '1';
                // message.style.background = 'rgba(255,0,6,0.58)'
                // message.innerText = 'Ошибка( Обновите страницу и попробуйте еще раз';
            }
        });

    })

    const sendFormBtn = document.getElementById('sendFormBtn')
    sendFormBtn.addEventListener('click', () => {
        const form = $(this).closest('form');
        const actUrl = form.attr('action');
        $.ajax({
            url: actUrl,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function (data) {
                // sessionStorage.setItem('sendForm', 'true');
                // message.style.opacity = '1';
                // inputElements.forEach(input => {
                //     input.value = '';
                //     submitButton.disabled = true;
                // })
                alert('Сообщение отправлено')

            },
            error: function () {
                alert('Ошибка, обновите страницу')
                // message.style.opacity = '1';
                // message.style.background = 'rgba(255,0,6,0.58)'
                // message.innerText = 'Ошибка( Обновите страницу и попробуйте еще раз';
            }
        });

    })



})()