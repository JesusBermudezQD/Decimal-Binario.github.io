document.getElementById("convertir").addEventListener("click",(e)=>{
    e.preventDefault();

    const numero=document.getElementById("numero").value;
    
    if(numero===""){
        alerta("vacio");
    }else{
        const res=numero.split("");
        let bool = res.some(letra => {
            return letra!=="1" && letra!=="0";
        });   
        
        if(bool){
            alerta("Agrega el numero sin espacios y deben ser 1 y 0 nada mas"); 
        }else{
            let dato=convertir(numero);
                document.getElementById("resultado").innerHTML=dato;
                console.log(dato);
        }
        
    }
    
})
function alerta(mensaje){
    const div=document.createElement("div");
    div.classList.add("alert","alert-danger","text-center","mt-5");
    div.innerHTML=mensaje;
    const padre=document.getElementById("col");
    const n=document.getElementById("resultado");
    padre.insertBefore(div,n);

    setTimeout(() => {
        div.remove();
    }, 3000);
}

function convertir(numero){
    let res= parseInt(numero,2);
    return res;
}