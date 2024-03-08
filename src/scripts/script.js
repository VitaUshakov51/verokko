(function () {

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