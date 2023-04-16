let products = {
    data: [
        {
            name: "Mocha S Hoodie",
            price: "780.000đ",
            image: "https://slyclothing.vn/images/mocha-1229x1536.webp"
        },
    
        {
            name: "Mocha Eminence Hoodie Zip",
            price: "480.000đ",
            image: "https://slyclothing.vn/images/mocha_em-1229x1536.webp"
        },
    
        {
            name: "Solid Fullzip Hoodie",
            price: "500.000đ",
            image: "https://slyclothing.vn/images/solid_zipblack-1229x1536.webp"
        },
    
        {
            name: "Momentum Washed Boxy Hoodie",
            price: "400.000đ",
            image: "https://slyclothing.vn/images/wash_hoodie-1229x1536.webp"
        },
    
        {
            name: "Green S Hoodie",
            price: "490.000đ",
            image: "https://slyclothing.vn/images/green-1229x1536.webp"
        },
       
        {
            name: "Grey Eminence Hoodie Zip",
            price: "490.000đ",
            image: "https://slyclothing.vn/images/grey_em-1229x1536.webp"
        },
        {
            name: "Black Eminence Hoodie Zip",
            price: "490.000đ",
            image: "https://slyclothing.vn/images/black_em-1229x1536.webp"
        },
    ]
};
for (let product of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("img-container");
    img.setAttribute("src", product.image);
    card.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b>" + product.price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `addToCart("${product.name}")`);
    btn.innerText = "Thêm vào giỏ hàng";
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

let carts = [
    {
        name: "Mocha S Hoodie",
        price: "780.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/mocha-1229x1536.webp"
    },

    {
        name: "Mocha Eminence Hoodie Zip",
        price: "480.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/mocha_em-1229x1536.webp"
    },

    {
        name: "Solid Fullzip Hoodie",
        price: "500.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/solid_zipblack-1229x1536.webp"
    },

    {
        name: "Momentum Washed Boxy Hoodie",
        price: "400.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/wash_hoodie-1229x1536.webp"
    },

    {
        name: "Green S Hoodie",
        price: "490.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/green-1229x1536.webp"
    },
   
    {
        name: "Grey Eminence Hoodie Zip",
        price: "490.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/grey_em-1229x1536.webp"
    },
    {
        name: "Black Eminence Hoodie Zip",
        price: "490.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/black_em-1229x1536.webp"
    },

];

function addToCart(name) {
    for (let cart of carts) {
        if(name == cart.name) {
            cart.quantity += 1;
        }
    }
    localStorage.setItem("carts", JSON.stringify(carts));
}