const typing_effect_heading = document.getElementById('typing_effect')
// console.log(first)


let text = ['" Xhevdet Doda "'];
let count = 0;
let index = 0;
let currentTxt = "";
let fullTxt = ""
const typingEffect = function(){
    fullTxt = text[count];
    currentTxt = fullTxt.slice(0,++index);
    let element = typing_effect_heading;
    element.innerHTML = currentTxt;
    // element.style.fontStyle = 'italic';
    setTimeout(typingEffect,120);
    setInterval(typingEffect, 2500)
    // if(currentTxt.length === fullTxt.length){
    //     index = 0;-
    //     count++;
    // }
}

typingEffect()


const abot_us_div = document.getElementById('abot_us_div')
const succeses_container = document.getElementById('succeses_container')
const science_image = document.getElementById('science_image')
const science_content = document.getElementById('science_content')
const motivation = document.getElementById('motivation')
const clubs = document.getElementById('clubs')

// scroll function

window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        nav.style.backgroundColor = 'white'
        
        nav.style.paddingTop = '0%'
        nav.style.paddingBottom = '0%'
        heading.style.color = 'black'
        link_one.style.color = 'black'
        link_two.style.color = 'black'
        link_three.style.color = 'black'
        link_four.style.color = 'black'
        // link_five.style.color = 'black'
        // link_six.style.color = 'black'
        link_seven.style.color = 'black'
        // nav.style.backgroundColor = '#212529'
    }
    else{
        nav.style.backgroundColor = 'transparent'
        nav.style.paddingTop = '1%'
        heading.style.color = 'white'
        nav.style.paddingBottom = '3%'
        link_one.style.color = 'white'
        link_two.style.color = 'white'
        link_three.style.color = 'white'
        link_four.style.color = 'white'
        // link_five.style.color = 'white'
        // link_six.style.color = 'white'
        link_seven.style.color = 'white'
    }
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        abot_us_div.style.opacity = '1'
        abot_us_div.style.transform ='translateX(0px)'
    }
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        succeses_container.style.opacity = 1
        succeses_container.style.transform = 'translateY(0px)'
    }
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        science_image.style.opacity = '1'
        science_image.style.transform = 'translateX(0px)'
        science_content.style.opacity = '1'
        science_content.style.transform = 'translateY(0px)'
    }
    if(document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
        motivation.style.opacity = '1'
        // motivation.style.transform = 'translateY(0px)'
    }
    if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
        clubs.style.opacity = '1'
        clubs.style.transform = 'translateY(0px)'
    }
}


