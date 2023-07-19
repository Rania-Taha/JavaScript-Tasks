let table = document.getElementById("table")


async function products() {

    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const data = await response.json();
    for (let i = 0; i < 5; i++) {
        console.log(data[i]);
        var row = `<tr>
                         <td >${data[i].category}</td>
                         <td >${data[i].description}</td>
                         <td >${data[i].id}</td>
                         <td ><img src=${data[i].image} style="width:200px ; height: 150px" ></td>
                         <td >${data[i].price}</td>
                        </tr> 
                       
                        `

        table.innerHTML += row

    }
}
products()


