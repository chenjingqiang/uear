document.onscroll=function(){
    var back=document.getElementById('back')
    var scr_T=document.documentElement.scrollTop;
    if(scr_T>0){
       back.style.display='block'
    }else{
       back.style.display='none'
    };
    back.onclick=function(){
        document.documentElement.scrollTop=0;
    };
}