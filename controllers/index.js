const app_home = document.querySelector(".app_home")


async function render() {
    // const data = await (await fetch("https://shop.cyberlearn.vn/api/Product/getpaging?pageIndex=1&pageSize=6")).json()
    const data = await (await fetch("https://shop.cyberlearn.vn/api/Product")).json()
    console.log(data)

    const list_products = data.content
    console.log(list_products)

    app_home.innerHTML = /*html*/ `
            ${list_products.map(item => {
                return /*html*/`
                    <div class="product col-3">
                        <div class="img_product">
                            <img src="../publics/image/image_product.png" alt="">
                        </div>
                        <div class="info_product">
                            <div class="name_product">
                                <p class="name"><a href="/detail.html?productid=${item.id}">${item.name}</a></p>
                                <div class="desc_sort">
                                    <p class="desc">${item.description}</p>
                                </div>
                            </div>
                            <div class="buy_now">
                                <button class="col-6 btn_buy" onclick="window.location.href='/detail.html?productid=${item.id}'" >Buy Now</button>
                                <button class="col-6 price">${item.price}$</button>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
        `
    }

    //Call function Render
render()