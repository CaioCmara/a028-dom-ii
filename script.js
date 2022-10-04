function adicionaItem(){
    const container = document.getElementById("container")
    const texto = document.createElement("article")
    texto.innerHTML = "teste"
    container.insertAdjacentElement("beforeend", texto)
    texto.classList.add("item")  
    
    texto.onclick = (event) => removeItem(event)
 }


 function removeItem(event){
    event.target.remove()
   // event.target.style.visibility = "hidden"
  }
 
