(function (){

    'use strict';

    setTimeout(() => {
        fetch('/api/colors.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const colors = data;
        const list = document.querySelector('.list');
        for (let i = 0; i < colors.length; i ++) {
            const li = document.createElement('li');
            li.textContent = colors[i].value;
            list.appendChild(li);
        }
    })
    .catch((e) => {}) 
    }, 500)

})();
