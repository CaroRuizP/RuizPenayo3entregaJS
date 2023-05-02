let carrito = [];

const productos = [new Producto(1,"ZapatillasDC", 30000, 1,"DC",38,"Negra"),new Producto(2,"ZapatillasDC2", 25000, 1,"DC",37,"Rosa"),new Producto(3,"ZapatillaConverse", 10000, 1,"Converse",39,"Negra"),new Producto(4,"ZapatillaDC3", 50000, 1,"DC",40,"Blanca")]

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");



boton1.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton1.dataset.id
  });
  carrito.push(producto);
  mostrarCarrito();
});

boton2.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton2.dataset.id
  });
  carrito.push(producto);
  mostrarCarrito();
});

boton3.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton3.dataset.id 
  });
  carrito.push(producto);
  mostrarCarrito();
});

boton4.addEventListener('click', () => {
    const producto = productos.find((item)=> {
      return item.id === +boton4.dataset.id 
    });
    carrito.push(producto);
    mostrarCarrito();
  });


function mostrarCarrito() {
  const tabla = document.getElementById('producto');
  tabla.innerHTML = ``;
  let counter = 1;

  carrito.forEach((producto) => {
    tabla.innerHTML += `
      <tr>
        <th>${counter}<th>
        <td>${producto.nombre}<td>
        <td>${producto.marca}<td>
        <td>${producto.talle}<td>
        <td>${producto.color}<td>
        <td>${producto.cantidad}<td>
        <td>${producto.precio}<td>
      <tr>
    `;
    counter++;
  })
  tr = document.createElement('tr');
  tr.innerHTML = `<th><th>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td>${carrito.reduce((total,item) => total + item.precio,0)}<td>
                    `;
    tabla.appendChild(tr);
}


