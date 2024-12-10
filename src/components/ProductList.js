import React from 'react';

// Información del JSON
const products = [
{
"id": 1,
"name": "Pizza Margherita",
"description": "Pizza clásica con salsa de tomate, mozzarella y albahaca fresca.",
"price": 151,
"image": "https://via.placeholder.com/150?text=Pizza+Margherita"
},
{
"id": 2,
"name": "Pizza Pepperoni",
"description": "Pizza con salsa de tomate, mozzarella y rodajas de pepperoni.",
"price": 185,
"image": "https://via.placeholder.com/150?text=Pizza+Pepperoni"
},
{
"id": 3,
"name": "Pizza Cuatro Quesos",
"description": "Una deliciosa mezcla de mozzarella, cheddar, gorgonzola y parmesano.",
"price": 200,
"image": "https://via.placeholder.com/150?text=Pizza+Cuatro+Quesos"
},
{
"id": 4,
"name": "Pizza Vegetariana",
"description": "Pizza con salsa de tomate, mozzarella y una variedad de vegetales frescos.",
"price": 160,
"image": "https://via.placeholder.com/150?text=Pizza+Vegetariana"
},
{
"id": 5,
"name": "Pizza Hawaiana",
"description": "Pizza con salsa de tomate, mozzarella, jamón y piña.",
"price": 170,
"image": "https://via.placeholder.com/150?text=Pizza+Hawaiana"
},
{
"id": 6,
"name": "Pizza Carbonara",
"description": "Pizza con salsa blanca, mozzarella, bacon y huevo.",
"price": 190,
"image": "https://via.placeholder.com/150?text=Pizza+Carbonara"
},
{
"id": 7,
"name": "Pizza BBQ",
"description": "Pizza con salsa barbacoa, pollo a la parrilla, cebolla morada y mozzarella.",
"price": 210,
"image": "https://via.placeholder.com/150?text=Pizza+BBQ"
},
{
"id": 8,
"name": "Pizza Calzone",
"description": "Pizza en forma de empanada rellena de mozzarella, jamón, tomate y especias.",
"price": 220,
"image": "https://via.placeholder.com/150?text=Pizza+Calzone"
},
{
"id": 9,
"name": "Pizza Mexicana",
"description": "Pizza con salsa de tomate, mozzarella, carne molida, jalapeños y cebolla.",
"price": 233,
"image": "https://via.placeholder.com/150?text=Pizza+Mexicana"
}
];

const ProductList = () => {
return (
<div className="container">
  <div className="row">
    <div class="text-center mt-5">
      <h1 class="bb2">Listado de Productos</h1>
    </div>
    {products.map((product) => (
    <div key={product.id} className="col-md-4 mb-4">
      <div className="card s1 p-1">
        <img src={product.image} alt={product.name} className="card-img-top cp2" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Precio: ${product.price}</strong>
            {product.price < 200 && ( <span
              className="badge bg-success ms-2 animate__animated animate__flash animate__infinite infinite">
              ¡Oferta!</span>
              )}
          </p>
        </div>
      </div>
    </div>
    ))}
  </div>
</div>
);
};

export default ProductList;