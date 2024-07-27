


function init(){
  document.getElementById("jsworld").innerHTML = "hello world from javascript"
}

var productList = [
  {name : "product-1",discription: "some additional product ",price : "1020"},
  {name : "product-2",discription:"it is a good product ",price:"1000"}
]

function initProduct(){
  document.getElementById("product-menu").innerHTML = `
   <h1>List of Product </h1>
  <table>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>product Name </th>
          <th>details </th>
          <th>price </th>
        </tr>
        <tbody>
        ${getPoductListHTML()}
        </tbody>
      </thead>
    </table>`
}

// ${} -> use java script in `` under 

function getPoductListHTML(){
  var row = "";
  for(let i = 0; i<productList.length; i++){
    row  = row+
    `
          <tr>
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].discription}</td>
            <td>${productList[i].price}</td>
          </tr>`
  }
  return row;
}

initProduct()

init();