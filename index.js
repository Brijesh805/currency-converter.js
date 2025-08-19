// Api call 

const URL ="https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button =document.querySelector("#btn");
// fetch() used 
// synyax: promise = fetch(url,[option])

//  let promise = fetch(URL);
//  console.log(promise);

const getFacts = async() => {
    let response = await fetch(URL);
    console.log(response);// yeah json format mai ata  hai hame covert karna hoga
    let data = await response.json();
    factPara.innerText = data[0].text;
};

button.addEventListener("click",getFacts);

// same thing with prommise chain but async() is more better  

// function getFacts(){
//     fetch(URL).then((response) =>{
//       return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[4].text;
//     })
// }



