
let products = [
    {
        id: 201,
        name: "Wireless Mouse",
        price: 599,
        category: "Electronics"
    }
];

let form = document.getElementById("productForm");
let productList = document.getElementById("productList");

function showProducts() {
    productList.innerHTML = "";

    products.forEach(function(product) {
        productList.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let id = document.getElementById("productId").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    if (id == "") {
        let newProduct = {
            id: products.length == 0 ? 201 : products[products.length - 1].id + 1,
            name: name,
            price: price,
            category: category
        };

        products.push(newProduct);
        alert("Product Added Successfully");
    } else {
        products.forEach(function(product) {
            if (product.id == id) {
                product.name = name;
                product.price = price;
                product.category = category;
            }
        });

        alert("Product Updated Successfully");
    }

    form.reset();
    document.getElementById("productId").value = "";
    showProducts();
});

function editProduct(id) {
    let product = products.find(function(p) {
        return p.id == id;
    });

    document.getElementById("productId").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("category").value = product.category;
}

function deleteProduct(id) {
    let choice = confirm("Do you want to delete this product?");

    if (choice) {
        products = products.filter(function(product) {
            return product.id != id;
        });

        alert("Product Deleted Successfully");
        showProducts();
    }
}

showProducts();
