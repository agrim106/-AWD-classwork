let g_btn = document.getElementById("btn1")
g_btn.addEventListener('click', buttonClickHandler)
function buttonClickHandler(){
    console.log("you have clicked the button");
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "http://dummy.restapiexample.com/api/v1/employees", true)

    xhr.onprogress = function() {
        console.log("on progress......!");
    }
    xhr.onload = function() {
        if (this.status === 200){
            console.log(this.responseText);
        }
        else
        {
            console.error("Some error occured");
        }
    }
        xhr.send();
    
}