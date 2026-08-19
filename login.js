const button=document.querySelector("button");

const message=document.querySelector("#message");


button.addEventListener("click", function(){
    const name=document.querySelector("#name").value;
    const password=document.querySelector("#password").value;

    let valid=true;

    if(name===""){
        alert("Name is Required");
        valid=false;
    }

    if(password==="") {
        alert("Password required");
        valid=false;
    }else if(password.length<8){
        alert("password must be of length 8");
        valid=false;
    }

    if(valid){

        message.textContent="Succesfull";
        message.style.color="Green"
        
    }else{
        message.textContent="Error";
        message.style.color="Red"
    }
})