let btn=document.querySelector(".toggle");
        let icon=document.querySelector(".toggle i");
        let body=document.querySelector(".hero-section");

        btn.onclick=function myfuntion() {
            body.classList.toggle("light-theme");
            if (body.classList.contains("light-theme")) {

                icon.classList.add("fa-moon");
                icon.classList.remove("fa-sun");
            }
            else{
                icon.classList.add("fa-sun");
                icon.classList.remove("fa-moon");
            }
        }
