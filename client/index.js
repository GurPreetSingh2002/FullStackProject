console.log("hello");



document.getElementById('btn').addEventListener('click' , (e) => {
    e.preventDefault();

    user_name = document.getElementById('name').value;
    user_email = document.getElementById('email').value;
    user_dob = document.getElementById('dob').value;
    user_password = document.getElementById('password').value;


    if(user_name == "" || user_email == "" || user_dob == "" || user_password == ""){
        document.getElementById("message").style.color = "red";
        document.getElementById('message').textContent = "All Fields are necessary";
        // window.location.href="http://localhost:5500/index.html";
        window.stop();
    }
    else{
        let data = {
            name : user_name,
            email : user_email,
            dob : user_dob,
            password : user_password
        }
        
        
        console.log(data);
        
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:8080/users";
        xhr.open('POST' , url)
        xhr.setRequestHeader('Access-Control-Allow-Origin','*')
        xhr.setRequestHeader('Content-Type', 'application/json')
        
        xhr.onreadystatechange = () => {
                
            if(xhr.status == 200 && xhr.readyState == 4){
                console.log(xhr.responseText);
                document.getElementById("message").style.color ="green";
                document.getElementById('message').textContent = "Signed Up Successfully!"
                setTimeout(() => {
                    window.location.href="http://localhost:5500/signin.html"
                }, 2 * 1000);

                // setTimeout(window.location.href="http://localhost:5500/signin.html" , 10000);
                
            }
        }

        xhr.send(JSON.stringify(data));
    }


})
 
  


   
