let g_btn = document.getElementById("btn1");

g_btn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the get button");
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"ajaxServer.txt",true);
    xhr.onprogress = ()=>{
        console.log("on progres... !");
    }
}