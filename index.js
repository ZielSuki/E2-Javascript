const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Ejercicio 1");

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 !== 0) {
    console.log(
      `La pizza numero ${pizzas[i].id} es la ${pizzas[i].nombre} de precio $${pizzas[i].precio} e ingredientes ${pizzas[i].ingredientes}`
    );
  }
}

console.log("Ejercicio 2");

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    console.log(
      `La ${pizzas[i].nombre} sale menos que $600 y tiene un precio de $${pizzas[i].precio}`
    );
  }
}

console.log("Ejercicio 3");

for (let i = 0; i < pizzas.length; i++) {
  console.log(`La ${pizzas[i].nombre} tiene un precio de $${pizzas[i].precio}`);
}

console.log("Ejercicio 4");

for (let i = 0; i < pizzas.length; i++) {
  console.log(`La ${pizzas[i].nombre} tiene los ingredientes:`);
  for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
    console.log(pizzas[i].ingredientes[j]);
  }
}
