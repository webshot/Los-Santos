//при скролле фиксируется nav-bar и добавляет класс
const nav = document.querySelector(".nav")
const lore = document.querySelectorAll(".menu_nav")

window.addEventListener("scroll", function(){
  let scrolPos = window.scrollY;

 if(scrolPos > 0){
   nav.classList.add('bgcolor');
 }else{
   nav.classList.remove('bgcolor');
 }
})


//появление nav-bar с верху
if(window.innerWidth > 600){
    $("location").ready(
    function(){
        $(".nav").animate({
            "top": "0px"
        }, 500);

        $(".nav").animate({
            "top": "0px"
        }, 200);
    }
)
}

//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
