


fetch('https://fakestoreapi.com/products')
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
                <h1>Trends <span>${products.category}</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src=${products.image}alt="loading">
                    <div class="crdtext">
                        <h2> ${products.title}</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div class="crd">
                    <img src=${products.image} alt="">
                    <div class="crdtext">
                        <h2>${products.title}</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div class="crd">
                    <img src=${products.image} alt="">
                    <div class="crdtext">
                        <h2> ${products.title}</h2>
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
