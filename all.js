let products = {
    data: [
        {
            name: "Shooting Star Varsity",
            price: "480.000đ",
            image: "https://slyclothing.vn/images/var_4th2-1229x1536.webp"
        },
    
        {
            name: "Black Grey Coconut Varsity",
            price: "480.000đ",
            image: "https://slyclothing.vn/images/Black_corduroy.webp"
        },
    
        {
            name: "VARSITY CORDUROY COLD",
            price: "500.000đ",
            image: "https://slyclothing.vn/images/varsity_cold_truoc.webp"
        },
    
        {
            name: "VARSITY CORDUROY HOT",
            price: "400.000đ",
            image: "https://slyclothing.vn/images/chapstick_web-1-1229x1536.webp"
        },    
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
        name: "Shooting Star Varsity",
        price: "480.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/var_4th2-1229x1536.webp"
    },

    {
        name: "Black Grey Coconut Varsity",
        price: "480.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/Black_corduroy.webp"
    },

    {
        name: "VARSITY CORDUROY COLD",
        price: "500.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/varsity_cold_truoc.webp"
    },

    {
        name: "VARSITY CORDUROY HOT",
        price: "400.000đ",
        quantity: 0,
        image: "https://slyclothing.vn/images/chapstick_web-1-1229x1536.webp"
    },        
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