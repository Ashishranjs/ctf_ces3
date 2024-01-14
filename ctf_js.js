var slider_img =document.querySelector('.img1');
var images =['https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf1.jpg','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf2.jpg','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf3.jpg','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf4.jpg','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf5.jpg'];
var i=0;//current page

function prevImg(){
    if(i <=0) i= images.length;
    i--;
    return setImg();
}
function nextImg(){
    if(i >= images.length -1) i= -1;
    i++;
    return setImg();
}
function setImg(){
    return slider_img.setAttribute('src',images[i]);
}