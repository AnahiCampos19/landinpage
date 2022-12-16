function autor(){alert("Realizado por: Ana Campos. Desarrolladora FrontEnd y Tester QA. email: anahifcampos@gmail.com");}
const btnSwitch= document.querySelector('#switch');
btnSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});