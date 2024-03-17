// Archivo: models/libro.js

const libros = [
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        description: "A famous novel that tells the story of the Buendía family over seven generations in the fictional town of Macondo.",
        image: "https://m.media-amazon.com/images/I/A1lNJP8sC6L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        description: "A classic piece of literature on the importance of friendship, love, and the search for the meaning of life.",
        image: "https://sarasvatilibreria.com/cdn/shop/products/el-principito-portada-blanca-antoine-de-saint-exupery-205894.jpg?v=1698902528"
    }
];

module.exports = class Libro {
    constructor(titulo, autor, descripcion, imagen) {
        this.title = titulo;
        this.author = autor;
        this.description = descripcion;
        this.image = imagen;
    }

    save() {
        libros.push(this); // Aquí se está agregando el libro actual al arreglo de libros
    }

    static fetchAll() {
        return libros; // Retorna todos los libros
    }
}
