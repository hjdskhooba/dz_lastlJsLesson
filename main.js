const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');

button.addEventListener ('click',(e)=> {
    e.preventDefault()
    if (input.value === '') return
    createElement (input.value);
    input.value = ''
})

function createElement (valu) {
const button = document.createElement('button')
const li = document.createElement('li');
button.style.cssText = `
padding: 5px;
font-size: 13px;
width: 60px;
border-radius: 10px;
`
li.textContent = valu
button.textContent = "delete"
li.className = 'li'
button.className = 'btn'
result.appendChild (li);
li.appendChild(button);

button.addEventListener('click',function() {
result.removeChild(li)
});
li.addEventListener('click', ()=> {
});
}