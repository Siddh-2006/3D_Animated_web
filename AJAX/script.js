console.log("Ajax in one video")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickhandler)

function buttonClickhandler(){
    console.log('you have clicked the fetchBtn')

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    //Use this for POST request
    xhr.open('GET','https://dummyjson.com/posts',true);//(what type of request,from where data is taken,Aschronyous(true) || synchronous )
    xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');

    //What to do on progress(optional)
    xhr.onprogress = function(){
        console.log('on progress');
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }else {
            console.error("some error occured");
        }
    }

    //send the request
    params = 
    xhr.send(Params);

    console.log('WE ARE DONE');
}