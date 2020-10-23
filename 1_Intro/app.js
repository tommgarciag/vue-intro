// con Vue.js

new Vue ({
    el: '#app',
    data: {
        nuevaTarea: '',     // v-model= nuevaTarea en el html
        tareas: [],
    },
    methods: {
        guardarTarea() {
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }

});




// con Vanilla JS

/*

const $form = document.querySelector('form');
const $ul = document.querySelector('ul');
const $input = document.querySelector('input[type="text"');
const tareas = [];

$form.onsubmit = event => {
    event.preventDefault();

    tareas.push($input.value);
    
    var $li = document.createElement('li');
    $li.textContent = $input.value;
    $ul.appendChild($li);
    $input.value = null;  

    console.log(tareas);
}

*/
