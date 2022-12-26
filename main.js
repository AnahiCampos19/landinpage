const body= document.querySelector("body");
function autor(){alert("Realizado por: Ana Campos. Desarrolladora FrontEnd y Tester QA. email: anahifcampos@gmail.com");}
//const btnDark= document.querySelector('#dark');
//btnSwitch.addEventListener('click', ()=> {
//    document.body.classList.toggle('dark');
//    btnSwitch.classList.toggle('active');
//});
        toggle = document.querySelector(".toggle");

      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
      }

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (!body.classList.contains("dark")) {
          return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark");
      });

      toggle.addEventListener("click", () => toggle.classList.toggle("active"));

