var vetorum = [];


function fVetorIncluir (){
    
    vetorum.push(numero);
    return "Incluído com sucesso - Nro de valores: "+vetorum.length+"\nSendo"+ vetorum.toString();
}

function fVetorMedia(idResultado) {
    let media = 0;
    let SomaValores = 0;
    const vidResultado = document.querySelector("#"+idResultado);
    vidResultado.innerHTML = "<ol>";
    for(i=0;i<vetorum.length;i++) {
        SomaValores += vetorum[i];
        vidResultado.innerHTML +="<li>"+vetorum[i]+"</li>"
    }
    vidResultado.innerHTML += "</lo>"
    media = SomaValores / vetorum.length;
    vidResultado.innerHTML
}


