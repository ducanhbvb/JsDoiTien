function doiTien() {
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let amount = document.getElementById("amount").value;
    if(select1==="USD")
        {
        if(select2==="VND")
            {
                document.getElementById("result").innerHTML="Result: "+amount*23000+"VND";
            }
        else {document.getElementById("result").innerHTML="Result: "+amount+"USD";}
        }
    else {
         if(select1==="VND")
            {
            if(select2==="USD")
             {
             document.getElementById("result").innerHTML="Result: "+amount/23000+"USD";
             }
         else {document.getElementById("result").innerHTML="Result: "+amount+"VND";}
            }
        }
}

/*function doiTien() {
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let amount = document.getElementById("amount").value;
    if(select1==="USD")
        {
        if(select2==="VND")
            {
                document.getElementById("result").innerHTML="Result: "+amount*23000+"VND";
            }
        };
    if(select1==="VND")
        {
        if(select2==="USD")
            {
            document.getElementById("result").innerHTML="Result: "+amount/23000+"USD";
            }
        };
}*/
/*function doiTien() {
        let select1 =document.getElementById("select1").value;
        let select2 =document.getElementById("select2").value;
        let amount =document.getElementById("amount").value;
        if(select1==="VND" && select2 ==="USD"){
            document.getElementById("result").innerHTML="Result: "+amount/23000+"USD";
        }else if(select1 === "USD" && select2 === "VND" ){
            document.getElementById("result").innerHTML="Result: "+amount*23000+"VND";
        }
    }*/