cargarProductos();


function cargarProductos(){
  fetch("./js/data.json")
    .then(response => response.json())
    .then(json => mostrarProductos(json));
}

function mostrarProductos(datos){
  const div = document.querySelector(".items");
  div.innerText = "";

  datos.forEach(productoBody =>{
    const {img, title, body, precio} = productoBody;

      const card = document.createElement("div");
      card.setAttribute("class","card text-white item");
      card.innerHTML = ` <img src="${img}" class="card-img-top item-image" alt="Uniposca">
                        <div class="card-body">
                          <h5 class="card-title p-1 item-title">${title}</h5>
                          <p class="card-text">${body}</p>
                          <div class="item-details">
                            <h6 class="item-price valor">$ ${precio}</h6>
                            <button class="boton btn agregarACarrito">Agregar</button>
                          </div>
                        </div>`;

      div.appendChild(card);
    let agregarArticuloACarrito = document.querySelectorAll('.boton');
    agregarArticuloACarrito.forEach((agregarACarrito) => {
        agregarACarrito.addEventListener('click', agregarACarritoClicked);
});
  })
}