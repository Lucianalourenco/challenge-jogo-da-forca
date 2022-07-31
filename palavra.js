var inputTexto = " ";
var button = document.querySelector("button");

button.onclick = function() {
    inputTexto = document.querySelector("#input-texto");
    alert("A palavra foi salva");  
    self.location.reload();

}
        
     
