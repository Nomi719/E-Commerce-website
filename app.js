fetch("https://api.escuelajs.co/api/v1/products/")
    .then((data) => data.json())
    .then(result => {
        // console.log("result", result)
        renderUI(result)
    })
    .catch(error => {
        console.log("error", error)
    })


    const renderUI = (items) => {
            const parent = document.getElementById("parent")
            for(var products of items){
                console.log(products)

                parent.innerHTML +=`<div class="trend">
            <div class="head">
                <h1>Trends <span>Mens wear</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src=${products.images[0]}alt="">
                    <div class="crdtext">
                        <h2> Cutton trending Shirts</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div class="crd">
                    <img src="./img/mahdi-bafande-6f5KtX2GGv4-unsplash.jpg" alt="">
                    <div class="crdtext">
                        <h2> Cutton trending Shirts</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div class="crd">
                    <img src="./img/logan-weaver-lgnwvr-G5RSe8i_Id8-unsplash.jpg" alt="">
                    <div class="crdtext">
                        <h2> Cutton trending Shirts</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button>Add to cart</button>
                    </div>
                </div>



            </div>
        </div>
`
            }
    }
