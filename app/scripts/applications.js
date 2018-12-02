(function (){

    'use strict';
    let colors;
    const input = document.querySelector('input');
    const list = document.querySelector('.list');
    input.onblur = addColor;
    setTimeout(() => {
        fetch('/api/colors.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        colors = data.map(item => item.value);
        for (let i = 0; i < colors.length; i ++) {
            const li = document.createElement('li');
            li.textContent = colors[i];
            list.appendChild(li);
        }


    })
    .catch((e) => {}) 
    }, 500)

    function addColor() {
        const value = input.value;
        colors.push(value);
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);
    }

})();
