const books = [
    {
        'id': 1,
        'title': 'Moby Dick',
        'price': 15.20,
        'year': 1851,
        'image': 'book.jpeg'
    },
    {
        'id': 2,
        'title': 'The Terrible Privacy of Maxwell Sim',
        'price': 13.14,
        'year': 2010,
        'image': 'book.jpeg'
    },
    {
        'id': 3,
        'title': 'Still Life With Woodpecker',
        'price': 11.05,
        'year': 1980,
        'image': 'book.jpeg'
    },
    {
        'id': 4,
        'title': 'Sleeping Murder',
        'price': 10.24,
        'year': 1976,
        'image': 'book.jpeg'
    },
    {
        'id': 5,
        'title': 'Three Men in a Boat',
        'price': 12.87,
        'year': 1889,
        'image': 'book.jpeg'
    },
    {
        'id': 6,
        'title': 'The Time Machine',
        'price': 10.43,
        'year': 1895,
        'image': 'book.jpeg'
    },
    {
        'id': 7,
        'title': 'The Caves of Steel',
        'price': 8.12,
        'year': 1954,
        'image': 'book.jpeg'
    },
    {
        'id': 8,
        'title': 'Idle Thoughts of an Idle Fellow',
        'price': 7.32,
        'year': 1886,
        'image': 'book.jpeg'
    },
    {
        'id': 9,
        'title': 'A Christmas Carol',
        'price': 4.23,
        'year': 1843,
        'image': 'book.jpeg'
    },
    {
        'id': 10,
        'title': 'A Tale of Two Cities',
        'price': 6.32,
        'year': 1859,
        'image': 'book.jpeg'
    },
    {
        'id': 11,
        'title': 'Great Expectations',
        'price': 13.21,
        'year': 1861,
        'image': 'book.jpeg'
    }
];



const categories = [...new Set(books.map((item)=>
    {return item}
    )
    )]
    let i = 0;
    
    document.getElementById('root').innerHTML = books.map((item) => {
    var {title, price, year, image} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <p>${year}</p>
        <h2>£ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

let cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "£"+0+".00";
        document.getElementById("discount").innerHTML = "No discount";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "£"+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>£ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}

// const discount = (total) => {
//     let disc = 0;
//     if (year >= 2000) {
//         return disc += disc + () ;
//     }
// }








