Product{
	id: Number,
	Name: String,
	Price: Number,
	Stock: Number,
	Image: String[] 
}

GET	/products

	Obtiene todos los productos.

Retorna:
		200 en caso de éxito.

GET	/products/:id

	
	Obtiene un producto en base a su id.

Retorna:
		200 en caso de éxito
		404 si :id no existe	
