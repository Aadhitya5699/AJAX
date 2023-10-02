let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    //initiating an xhr object
    const xhr=new XMLHttpRequest();
    //open the object
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');
    //after response
    xhr.onload=function(){
        console.log(this.responseText)
    }
    //send the request
    params=`{"name":"test","salary":"123","age":"24"}`;
    xhr.send();
}