

function burgerTemplate(index, price) {
    return `

            <div class="site_padding top_bottom_padding">

                <div class="menu site_padding top_bottom_padding">

                    <div>
                        <h2>${menu.burger[index].name}</h2>
                        <p>${menu.burger[index].ingrediens} </p>
                        <span>${price}</span>
                    </div>
                    <button class="btn ">X</button>
                </div>

            </div>`
}



function pommesTemplate(index, price) {
    return `

            <div class="site_padding top_bottom_padding">

                <div class="menu site_padding top_bottom_padding">

                    <div>
                        <h2>${menu.pommes[index].name}</h2>
                         <span>${price}</span>
                    </div>
                    <button class="btn ">X</button>
                </div>

            </div>`
}


function drinksTemplate(index, price) {
    return `

            <div class="site_padding top_bottom_padding">

                <div class="menu site_padding top_bottom_padding">

                    <div>
                         <h2>${menu.drinks[index].name}</h2>
                        <span>${price}</span>
                    </div>
                    <button class="btn ">X</button>
                </div>

            </div>`
}