
let menu = {
    "burger": [
        {
            "name": "Hamburger",
            "ingrediens": "Brötchen,Salat,Patty, Zwiebeln,Tomaten,Gürkchen,Burger-sauce",
            "price": 9.99,
        },
        {
            "name": "Cheeseburger",
            "ingrediens": "Brötchen,Salat,Patty, Zwiebeln,Tomaten,Gürkchen,Burger-sauce,Käse",
            "price": 15.99,
        }, {
            "name": "Loong-chicken",
            "ingrediens": "Brötchen,Salat,chicken-filet, avocado,Tomaten,Gürkchen,Burger-sauce",
            "price": 7.99,
        }, {
            "name": "Vegi-Burger",
            "ingrediens": "Brötchen,Salat,Vegi-Patty, Zwiebeln,Tomaten,Gürkchen,BBQ-Sauce",
            "price": 20.99,
        },
    ],
    "pommes": [
        {
            "name": "Pommes",
            "price": 3.99,
        },
        {
            "name": "Curly Fries",
            "price": 2.50,
        },
        {
            "name": "Zwiebel Ring",
            "price": 4.50,
        },
    ],
    "drinks": [
        {
            "name": "Cola",
            "price": 7.99,
        },
        {
            "name": "Sprite",
            "price": 8.95,
        }, {
            "name": "Wasser",
            "price": 3.99,
        }, {
            "name": "Fanta",
            "price": 6.99,
        },
    ],

}

   function init() {
    burgerRender();
    pommesRender();   
    drinksRender();
}


function burgerRender() {
    let contentRef = document.getElementById("burger-content");
    contentRef.innerHTML = "";

    for (let index = 0; index < menu.burger.length; index++) {
      let price = menu.burger[index].price.toFixed(2).replace(".",",") + "€";
        contentRef.innerHTML +=  burgerTemplate(index, price);
       

    }

}



function pommesRender() {
    let contentRef = document.getElementById("pommes-content");
    contentRef.innerHTML = "";

    for (let index = 0; index < menu.pommes.length; index++) {
        let price = menu.pommes[index].price.toFixed(2).replace(".",",") + "€";
        contentRef.innerHTML +=  pommesTemplate(index, price);

    }

}



function drinksRender() {
    let contentRef = document.getElementById("drinks-content");
    contentRef.innerHTML = "";

    for (let index = 0; index < menu.drinks.length; index++) {
        let price = menu.drinks[index].price.toFixed(2).replace(".",",") + "€";
        contentRef.innerHTML +=  drinksTemplate(index, price);

    }

}

