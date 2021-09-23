// UI 
const plus = document.getElementById('plus');
const expand = document.querySelector('.expand');
const btns = document.querySelector('.btns');



plus.addEventListener('click',()=>{
    plus.classList.toggle('active');
    btns.classList.toggle('actives');
});



const facebook = document.querySelector('.main-container.facebook');
const instagram = document.querySelector('.main-container.instagram');
const linkedin = document.querySelector('.main-container.linkedin');
const twitter = document.querySelector('.main-container.twitter');
const btnall = document.querySelectorAll('.btn');



btnall.forEach(btner=>{
    

    btner.addEventListener('click',(e)=>{
        // console.log(e.target.getAttribute(data));

        const att = e.target.getAttribute("data-target");
        // console.log(att);

        if(att == "facebook"){
            // console.log("facebook");
            facebook.style.display = "flex";
            instagram.style.display = "none";
            twitter.style.display = "none";
            linkedin.style.display = "none";

        }else if(att == "instagram"){
            facebook.style.display = "none";
            instagram.style.display = "flex";
            twitter.style.display = "none";
            linkedin.style.display = "none";
            
        }else if(att == "twitter"){
            facebook.style.display = "none";
            instagram.style.display = "none";
            twitter.style.display = "flex";
            linkedin.style.display = "none";

        }else if(att == "linkedin"){
            facebook.style.display = "none";
            instagram.style.display = "none";
            twitter.style.display = "none";
            linkedin.style.display = "flex";
        }
    });
});


