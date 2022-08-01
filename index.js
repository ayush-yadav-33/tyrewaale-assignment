const container = document.querySelector("#cards__container");

const carddata = [];
var checktype = '';

for(let i = 0; i < 20; i++) {
    i%2===0? 
    carddata.push({name:"Apolo", rate: "2000"})
    :carddata.push({name:"CEAT", rate: "3000"})
}

function ondatachange(e){  
    value=e.value
    container.innerHTML = carddata.filter(item =>{
        if(value === undefined || e.checked=== false ){
           return item;       
        }
        else{
                if(e.checked===true && item.name.includes(value) || 
                e.checked===true && item.rate.includes(value)){
                    return item
                }          
        } 
    
       }).map((data, i)=>
      ` <div class="cards_container" data-idx="${i}" >
           <div>
               <div class="card__badge"></div>
               <img src="./tyre.png" alt="tyre width="100px" />
               <div class="card__subchild2">
                   <span>&#128736;</span>                
                   <span>&#128737;</span>
                   <span>&#128737;</span>

               </div>
           </div>
           <div class="card_main_container">
               <div class="card2__subchild2">
                   <h3>BRIDGESTONE <span style="color:red;margin-left:30px"><span style="color:#000;margin-right:10px">&#10148;</span>&#9825;</span></h3>
                   <h4>${data.name}</h4>
                   <p>290</p>
                   <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
               </div>
               <div class="card2__subchild3">
                   <h3>
                       Rs. ${data.rate}
                   <div>
                       <input type="text" value="1"  />
                       <button>Buy Now</button>
                       <span style="border:none;border-radius: 5px;" class="cart">&#128722;</span>
                   </div>
               </div>
               <div class="bottom__btn">
                <button>click here</button>
                <button>click here</button>
               </div>
           </div>
       </div>`
   ).join("");   
}

window.addEventListener("DOMContentLoaded", ondatachange    )
