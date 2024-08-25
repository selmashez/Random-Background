let r_range=document.querySelector("#red");
let g_range=document.querySelector("#green");
let b_range=document.querySelector("#blue");
let random_btn=document.querySelector("#btn")
let bodytag=document.querySelector('body')

function change_color(){
    bodytag.style.backgroundColor="rgb("+r_range.value+","+g_range.value+","+b_range.value+")";
}


r_range.addEventListener('input',function(){
    change_color();
});

g_range.addEventListener('input',function(){
    change_color();
});

b_range.addEventListener('input',function(){
    change_color();
});

random_btn.addEventListener('click',function(){
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    let r_rand=randomIntFromInterval(0, 250);
    r_range.value=r_rand
    let g_rand=randomIntFromInterval(0, 250);
    g_range.value=g_rand
    let b_rand=randomIntFromInterval(0, 250);
    b_range.value=b_rand

    bodytag.style.backgroundColor="rgb("+r_rand+","+g_rand+","+b_rand+")";
});




