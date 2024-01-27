class show {
  constructor() {
    this.searchBox = document.getElementById("searchBox");
    this.container = document.getElementById("container");
    this.tableId=document.getElementById('tableId');
    this.getDate=fetch('https://fakestoreapi.com/products')
    .then(e=>e.json()).then(t=>this.createHeader(t));
  }

  createHeader(date){
    const tr=document.createElement('tr');
    if(date){
      const myThTitles=Object.keys(date[0]);
      myThTitles.map(title=>{
        const th=document.createElement('th');
        th.innerText=title;
        th.classList.add('ths')
        tr.appendChild(th);
      })
    }
    this.tableId.appendChild(tr);
    this.makeDateTable(date);
  }

  makeDateTable(getDate){
    console.log(getDate)
if(getDate){
  getDate.map((date)=>{
    const tr=document.createElement('tr');
   Object.values(date).map((f,index)=>{
    if(index==5){
      const image=document.createElement('img');
      image.src=f;
      image.classList.add('imgShow');
      tr.appendChild(image);
    }

    else if(index==6){
      const td=document.createElement('td');
      td.innerText=Object.values(f).join("");
      tr.appendChild(td)
    }
else{
  const td=document.createElement('td');
  td.innerText=f;
  tr.appendChild(td);
}
   });
   this.tableId.appendChild(tr);
  })
}
  }
}

const myShow = new show();
myShow.createHeader()