let increas=document.querySelectorAll(".increase");
let decrease=document.querySelectorAll(".decrease");
let counts=document.querySelectorAll(".count");


increas.forEach((button, index) => {
    button.addEventListener("click", ()=> {

        // let count=Number(counts[index].textContent);

        // count++;
        // counts[index].textContent=count;
        counts[index].textContent++;
        
    });
});


decrease.forEach((button, index) =>{
    button.addEventListener("click", ()=>{
        if(counts[index].textContent>1){
        counts[index].textContent--;
        }else{
            alert("want to remove the product form cart")
        }

       
    })
})

