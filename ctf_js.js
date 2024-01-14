var slider_img =document.querySelector('.img1');
var images =['https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf1.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf2.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf3.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces3/blob/main/key:abcdefghijklmnopqrstuvwxyz.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces3/blob/main/ctf5.jpg?raw=true'];
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
