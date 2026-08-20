
const buttons=document.querySelectorAll("#btn");

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        alert("Order placed!");
    })
})



let products=[
    {   

        img:"skfi.jpg",
        name: "Laptop",
        price: 50000,
        category: "Electronics"

    },

    {
        img:"skfi.jpg",
        name: "Mobile",
        price: 30000,
        category:"Electronics"
    },
     {
        img:"skfi.jpg",
        name: "Toy",
        price: 3000,
        category:"Electronics"
    }
]


const productContainer=document.querySelector("#products");

products.forEach(function(product){
    const card=document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML=`

    <img src="https://tse1.mm.bing.net/th/id/OIP.1Yn781JF4tspKbsRPAsVRwHaHa?pid=Api" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>${product.category}</p>
    <button>add</button>`;

    const button=card.querySelector("button");

    button.addEventListener("click", function(){

        alert("order placed");
    });

    productContainer.append(card);



              
})