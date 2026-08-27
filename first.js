
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
    },
    {
        img:"skfi.jpg",
        name: "Toy",
        price: 3000,
        category:"Electronics"
    }
]


const productContainer=document.querySelector("#products");

// products.forEach(function(product){
//     const card=document.createElement("div");
//     const child=document.createElement("div");

//     card.classList.add("product-card");
//      child.classList.add("card-img");

     


//      child.innerHTML=`<img src="https://tse1.mm.bing.net/th/id/OIP.1Yn781JF4tspKbsRPAsVRwHaHa?pid=Api" alt="${product.name}" />`
//     card.append(child);
    
//      card.innerHTML+=`

    
//     <h2>${product.name}</h2>
//     <p>${product.price}</p>
//     <p>${product.category}</p>
//     <button>add</button>`;

//     const button=card.querySelector("button");

//     button.addEventListener("click", function(){

//         alert("order placed");
//     });

//     productContainer.append(card);



              
// })



products.forEach(function(product) {

    const card = document.createElement("div");
    card.classList.add("product-card");

    // Child div for image
    const imageBox = document.createElement("div");
    imageBox.classList.add("card-image");

    // Image
    const image = document.createElement("img");
    image.src = "https://tse1.mm.bing.net/th/id/OIP.1Yn781JF4tspKbsRPAsVRwHaHa?pid=Api" ;
    image.alt = product.name;

    // Put image inside imageBox
    imageBox.append(image);

    // Put imageBox inside card
    card.append(imageBox);


    // Product information
    const info = document.createElement("div");
    info.classList.add("product-info");

    info.innerHTML = `
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
        <button>Add</button>
    `;

    card.append(info);

    const button=card.querySelector("button");

    button.addEventListener("click", function(){

        alert("order placed");
    });

    productContainer.append(card);
});