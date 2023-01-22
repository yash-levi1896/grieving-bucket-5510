let res=[];
let resm=[];
let cart=JSON.parse(localStorage.getItem("buy"))||[];
let fil=document.getElementById("categ");
let btns=document.querySelector("#child1>button");
let btnr=document.getElementById("rat");
let sear=document.getElementById("searchbook")
fetch("./fiction.json")
.then((response)=>{
    
    return response.json()
    
})
.then((data)=>{
    console.log(data);
    res=data;
    for(let i=0;i<21;i++){
        resm.push(data[i]);
    }
    display(resm);
    soting(resm);
    soting2(resm);
    fil.addEventListener("change",()=>{
        if(fil.value==""){
            display(resm);
            soting(resm);
            soting2(resm);
            
        }
        else{
        let filt=data.filter((element)=>{
           return fil.value==element.Category;
        });
        display(filt);
        soting(filt);
        soting2(filt);
    }
    });
    function soting(datas){
    btns.addEventListener("click",()=>{
      datas.sort((a, b) => {
        const nameA = a.Price // ignore upper and lowercase
        const nameB = b.Price // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      display(datas);
    });
  }
  function soting2(datar){
    btnr.addEventListener("click",()=>{
      datar.sort((a, b) => {
        const nameA = a.Rating // ignore upper and lowercase
        const nameB = b.Rating // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      display(datar);
    });
  }
  sear.addEventListener("submit",(e)=>{
    e.preventDefault();
    let seachparam=sear.search.value;
    let filtered=data.filter((element)=>{
        if(element.Name.toUpperCase().includes(seachparam.toUpperCase())==true){
            return true;
        }else{
            return false;
        }
    });
    display(filtered)
})
})
    





function display(data){
    container.innerHTML="";
    data.forEach((element) => {
        let card=document.createElement("div");
        let div2=document.createElement("div");
        let im=document.createElement("img");
        im.src=element.Image;
        let title=document.createElement("h2");
        title.innerText=element.Name;
        let author=document.createElement("h4");
        author.innerText=`Author: ${element.Author}`;
        let price=document.createElement("p");
        price.innerText=`Price: $${element.Price}`;
        let rating=document.createElement("p");
        rating.innerText=`Rating: ${element.Rating}`;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.addEventListener("click",()=>{
            if(checkduplicate(element)){
                alert("product Already in the cart")
              }
              else{
                element.quantity=1;
              cart.push(element);
              localStorage.setItem("buy",JSON.stringify(cart));
              
              alert("product added into the cart")
    
            }
        });
         div2.append(title,author,price,rating,btn)
        card.append(im,div2);
        container.append(card)
    });
}
function checkduplicate(x){
    for(let i=0;i<cart.length;i++){
      if(cart[i].id==x.id){
        return true;
      }
    }
    return false;
  }

