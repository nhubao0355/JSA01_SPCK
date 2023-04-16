let products = {
    data: [
        {
            name: "Grey Casual Short",
            price: "180.000đ",
            image: "https://slyclothing.vn/images/ess_grey5-1229x1536.webp"
        },
    
        {
            name: "Grey Solid Corduroy Short",
            price: "280.000đ",
            image: "https://slyclothing.vn/images/grey_short-1228x1536.webp"
        },
    
        {
            name: "Brown Casual Short",
            price: "190.000đ",
            image: "https://slyclothing.vn/images/ess_brown-1229x1536.webp"
        },
    
        {
            name: "Black Solid Corduroy Short",
            price: "200.000đ",
            image: "https://slyclothing.vn/images/black_short-1228x1536.webp"
        },
    
        {
            name: "Olive Badge Kaki Short",
            price: "390.000đ",
            image: "https://slyclothing.vn/images/Green-Badge-Short-Front-1229x1536.jpg"
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
        name: "Grey Casual Short",
        price: "180.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/ess_grey5-1229x1536.webp"
    },

    {
        name: "Grey Solid Corduroy Short",
        price: "280.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/grey_short-1228x1536.webp"
    },

    {
        name: "Brown Casual Short",
        price: "190.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/ess_brown-1229x1536.webp"
    },

    {
        name: "Black Solid Corduroy Short",
        price: "200.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/black_short-1228x1536.webp"
    },

    {
        name: "Olive Badge Kaki Short",
        price: "390.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/Green-Badge-Short-Front-1229x1536.jpg"
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