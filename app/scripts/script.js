(function (){

    'use strict';
    const list = document.querySelector('.list');
    const input = document.querySelector('input');
    let colors = [];
    input.onblur = addColor;
    
    fetch('/api/colors.json')
    .then(function(response) {
        throw new Error();
        return response.json();
    })
    .then(function(data) {
        colors = data.map(item => item.value);
        for (let i = 0; i < colors.length; i ++) {
            addItem(i, colors[i]);
        }
    })
    .catch((e) => {
        const errorBlock = document.createElement('div');
        errorBlock.classList = "error";
        errorBlock.textContent = 'Не удалось получить даные :(';
        const parent = document.body;
        parent.insertBefore(errorBlock, list);
        parent.removeChild(list);
        const buttonBlock = document.querySelector('.add-color-wrapper');
        parent.removeChild(buttonBlock);
    })
    function addItem(index, value) {
        const li = document.createElement('li');
        li.textContent = (index + 1) + ' ' + value;
        list.appendChild(li);
    }
    function addColor() {
        const value = input.value;
        colors.push(value);
        addItem(value);
    }

})();
