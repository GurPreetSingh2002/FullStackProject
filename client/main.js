 
v = window.localStorage.getItem("email");
console.log(v);
document.getElementById("myemail").innerHTML = v;

const xhr = new XMLHttpRequest();
let value = `phone`
Request(value);

document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault();
    value = document.getElementById("search").value;
    Request(value);
})




function Request(value){
    xhr.open('GET', `https://ecommerce-product-api1.p.rapidapi.com/data?product=${value}&page=1`);
    xhr.setRequestHeader('X-RapidAPI-Key', '40dcb6e310msh698a6eaffa0270bp1a6be6jsnea30af6fefcf');
    xhr.setRequestHeader('X-RapidAPI-Host', 'ecommerce-product-api1.p.rapidapi.com');

    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            let resp = JSON.parse(xhr.responseText);
            console.log(resp);

            let output=``;
            for(let i = 0 ; i < resp.length ; i++){
                output+= `
                    <a class="elements" href="${resp[i].anchor}" target="_blank">
                        <div>
                            <img src="${resp[i].image}" />
                            <h2>${resp[i].title}</h2>
                            <p>${resp[i].description}</p>
                            <h3>${resp[i].price}</h3>
                        </div>
                    </a>
                `
            }
            document.getElementById('container').innerHTML = output

        }
    }
    xhr.send();

}





 