(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.dataset.num) {
                let value = e.target.dataset.num;
                screen.value += value;
            }
        })

    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            screen = document.querySelector('.screen');
            let answer = eval(screen.value);
            screen.value = answer;
            console.log('screen', screen.value)

        }


    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();