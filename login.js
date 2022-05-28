function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    validate(username, password);
  }
  function validate(uname, pass) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "login.Json", true);
    xhr.onprogress = function () {
      console.log("On Progress wait for some time");
    };
    xhr.onload = function () {
      if (this.status === 200) {
        let obj1 = JSON.parse(this.responseText);
        // console.log(obj1);
  
        var user = obj1.users[0];
        if (uname == user.username && pass == user.password) {
          console.log(obj1);
          document.getElementById("output").innerHTML = "Login Sucessful";
        } else {
          console.log("Invalid Credentials");
          document.getElementById("output").innerHTML = "Invalid Credentials";
        }
      } else {
        console.log("Some Error Occured");
      }
    };
  
    xhr.send();
  }