let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    //initiating an xhr object
    const xhr=new XMLHttpRequest();
    //open the object
    xhr.open('GET','demo.txt',true);
    //after response
    xhr.onload=function(){
        console.log(this.responseText)
    }
    //send the request
    xhr.send();
}