class shopList {
  constructor() {
    this.searchId = document.getElementById("searchId");
    this.h2Id = document.getElementById("h2Id");
    this.tableId = document.getElementById("tableId");
    this.containetId = document.getElementById("containerId");
    fetch("https://fakestoreapi.com/products")
      .then((e) => e.json())
      .then((data) => this.createHeader(data));
  }

createHeader(getDate) {
const tr=document.createElement('tr');
if(getDate){
    Object.keys(getDate[0]).forEach(headerTitle=>{
    const th=document.createElement('th');
    th.innerText=headerTitle;
    tr.appendChild(th);
    })
    this.tableId.appendChild(tr)
    this.creatBody(getDate);
}
}

creatBody(dateBody){
    dateBody.forEach(t=>{
        const tr=document.createElement('tr');
        const x=Object.values(t);
        x.forEach((data,index)=>{
            if(index==5){
             const td=document.createElement('td')
             const image=document.createElement('img');
             image.classList.add('img');
             image.src=data;
             td.appendChild(image)
             tr.appendChild(td)
            }

            if(index==6){
                const td=document.createElement('td');
                td.textContent=data.rate;
                tr.appendChild(td)
                }

if(index==0||index==1||index==2||index==3||index==4){
    const td=document.createElement('td');
    td.textContent=data;
    tr.appendChild(td);
}})
    this.tableId.appendChild(tr)
    })
}}

const myListShow = new shopList();


