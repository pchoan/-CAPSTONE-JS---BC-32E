window.onload = async function() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('productid');
        console.log('params', myParam)

        //call api load lên giao diện
        // Call api get product by id
        const data = await (await fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`)).json()
        const product = data.content


        console.log(product.relatedProducts)

        const app_home = document.querySelector(".app_home")

        app_home.innerHTML = /*html*/ `
        <div class="container">
            <div class="detail_product">
                <div class="img_product col-4">
                    <img src="${product.image}" width="100%" alt="">
                </div>
                <div class="info_product col-8">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <p>Available size:</p>
                    <div class="size">
                        ${product.size.map(item => {
                            return /*html*/`
                                <button>${item}</button>
                            `
                        }).join("")}
                    </div>
                    <b class="price">${product.price}$</b>
                    <div class="count">
                        <button>+</button>
                        <input type="text" value="1" min="0">
                        <button>-</button>
                    </div>
                    <button class="add_cart">Add to cart</button>
                </div>
            </div>
            <h5>- Realate products -</h5>
            <div class="realate_products">
                ${product.relatedProducts.map(item => {
                    return /*html*/`
                        <div class="product col-3">
                                    <div class="img_product">
                                        <img src="${item.image}" width="100%" alt="">
                                    </div>
                                    <div class="info_product">
                                        <div class="name_product">
                                            <p class="name"><a href="/detail.html?productid=${item.id}">${item.name}</a></p>
                                            <div class="desc_sort">
                                                <p class="desc">${item.description}</p>
                                            </div>
                                        </div>
                                        <div class="buy_now">
                                            <button class="col-6 btn_buy">Buy Now</button>
                                            <button class="col-6 price">${item.price}$</button>
                                        </div>
                                    </div>
                                </div>
                            `
                        }).join("")}
            </div>
        </div>
    `
}