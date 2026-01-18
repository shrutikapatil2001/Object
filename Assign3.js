var product={
    name: "Laptop",
    price: 1200,
    stock: 30
}
for(var key in product){
    console.log(key + ": " + product[key]);
}