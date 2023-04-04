const api_url = 'https://fakestoreapi.com/products'

   fetch(api_url)
    .then((res) => (res.json())
    ).then(function (products){
        let out = ""
        for(let product of products){
            
            out += `           
             
                <div class="card mb-4" style = "width: 300px;">           
                
                    <img src="${product.image}" class="card-img-top, img-responsive" alt="${product.image}" width="300" height="236">
                    <div class="card-body">
                        <p class="card-text">${product.category}</p>
                        <p class="card-text" >${product.description}</p>
                        <p class="card-text" >${product.price} $</p>
                        <p class="card-text">Betyg: ${product.rating.rate} (${product.rating.count} recensioner)</p>
                        <a href="order.html" class="btn btn-success">Lägg till i kundvagn</a>
                    
                    </div>
                </div>
           
            </div>`  
            
        }

        let cardDecks = document.querySelectorAll(".card-deck.d-flex.flex-wrap")
        cardDecks.forEach((cardDeck) => cardDeck.innerHTML=out)
    } )



  
   