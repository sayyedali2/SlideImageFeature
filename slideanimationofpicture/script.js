const boxes = document.querySelectorAll('.box');
function removeAllProperties(){
  boxes.forEach((e)=>{
    e.style.width='6%'
    e.style.borderRadius='45px'
    e.firstElementChild.style.borderRadius='45px'
  })}

function addPropetie(e){
  e.style.width="70%"
  e.style.borderRadius='0px'
 e.firstElementChild.style.borderRadius='0px'
}

boxes.forEach((e)=>{
  e.addEventListener('click', ()=>{
    removeAllProperties();
    addPropetie(e);
  })
})
