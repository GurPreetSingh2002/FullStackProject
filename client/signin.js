console.log("hello");

document.getElementById('btn').addEventListener('click' , (e) => {
    e.preventDefault();
    let user_email = document.getElementById('email').value;
    let user_password = document.getElementById('password').value;
    if(user_email == "" || user_password == ""){
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "All Fields are mandatory";
    }

    else{
        window.localStorage.setItem("email" , user_email);
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:8080/users"
        xhr.open('GET',url)
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                let res = JSON.parse(xhr.responseText);
                console.log(res);
                let flag = true;
                let count = 0 ;
                for(let i = 0 ; i < res.length ; i++){
                    count++;
                    if(res[i].email === user_email && res[i].password === user_password){
                        flag=false;
                        // console.log('verified');
                        document.getElementById("message").style.color= "green";
                        document.getElementById("message").textContent = "Logged In Successfully"

                        setTimeout(() => {
                            window.location.href="http://localhost:5500/main.html";
                        }, 2 * 1000);
                        // setTimeout(window.location.href="http://localhost:5500/main.html" , 10000);
                        // window.location.href="http://localhost:5500/main.html"
                        break;
                    }
                }
                if(flag == true){
                    document.getElementById("message").style.color="red";
                    document.getElementById("message").textContent = "Invalid Email or Password";
                }

                if(count == res.length){
                    document.getElementById("message").style.color = "red";
                    document.getElementById("message").textContent = "Details not found. Kindly Register first";
                }
            }
        }
        xhr.send();

    }

    
})