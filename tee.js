let products = {
    data: [
        {
            name: "MOMENTUM WASHED TEE",
            price: "780.000đ",
            image: "https://slyclothing.vn/images/tee_wash-1000x1250.webp"
        },
    
        {
            name: "Mocha Slogan Tee",
            price: "480.000đ",
            image: "https://slyclothing.vn/images/mocha_slogan_web-1229x1536.webp"
        },
    
        {
            name: "Cream Iconic Tee",
            price: "500.000đ",
            image: "https://slyclothing.vn/images/iconic-1229x1536.webp"
        },
    
        {
            name: "Black Chapstick Boxy Tee",
            price: "400.000đ",
            image: "https://slyclothing.vn/images/chapstick_web-1-1229x1536.webp"
        },
    
        {
            name: "Cream Bounty Hunter",
            price: "390.000đ",
            image: "https://slyclothing.vn/images/bt_hunter3-1229x1536.webp"
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
        name: "MOMENTUM WASHED TEE",
        price: "780.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/tee_wash-1000x1250.webp"
    },

    {
        name: "Mocha Slogan Tee",
        price: "480.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/mocha_slogan_web-1229x1536.webp"
    },

    {
        name: "Cream Iconic Tee",
        price: "500.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/iconic-1229x1536.webp"
    },

    {
        name: "Black Chapstick Boxy Tee",
        price: "400.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/chapstick_web-1-1229x1536.webp"
    },

    {
        name: "Cream Bounty Hunter",
        price: "390.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/bt_hunter3-1229x1536.webp"
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