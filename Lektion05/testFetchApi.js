const api_url = 'https://fakestoreapi.com/products'

   fetch(api_url)
    .then((res) => (res.json())
    ).then(function (products){
        let placeholder = document.querySelector("#data-output")
        let out = ""
        for(let product of products){

            out += `
            <tr>
                <td> <img src = '${product.image}'> </td>
                <td> ${product.category}> </td>
                <td> ${product.price}> </td>
                <td> ${product.rating.count} ${product.rating.rate}> </td>
                <td> ${product.description}> </td>
            </tr>`

        }  

        placeholder.innerHTML = out
    } )
