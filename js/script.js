const FilterBtn=document.querySelectorAll(".filter__btn"),
      openModalBtn = document.querySelector("[data-modal-open]"),
      closeModalBtn = document.querySelector("[data-modal-close]"),
      modal = document.querySelector("[data-modal]"),
      checkboxAgree = document.querySelector(".modal__checkbox"),
      submitModalBtn = document.querySelector(".form__submit-btn")

/*=====Добавляем отступ main от header======================================== */
let hgHeader =document.querySelector(".header").offsetHeight,
    hgPage =document.querySelector(".page").style.paddingTop=`${hgHeader}px`;


addFilterClass();
/*=====Открываем / закрываем модальоне окно на banner section================== */
openModalBtn.addEventListener('click', ()=>{
  modal.classList.remove("_is-hidden")
}, false);

closeModalBtn.addEventListener('click',()=>{
  modal.classList.add("_is-hidden")
  
}, false);
/*=====Убираем  собитие ================== */
document.querySelector(".modal__form").addEventListener("submit", (e) => {
  /* e.preventDefault(); */

  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`)
  );
});
/*=====Подтверждаем условия соглашения /  делаем активной кнопку отправки ================== */
checkboxAgree.addEventListener('click', (event)=>{
  console.log(event.target.checked)
  if(event.target.checked){
    submitModalBtn.removeAttribute("disabled");
  }
  else{
    submitModalBtn.setAttribute("disabled", "disabled");;
  }
}, false)


function addFilterClass(){ 
 FilterBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    removeFilterClass()
      btn.classList.add("active")
    })
  })
}
function removeFilterClass(){
  FilterBtn.forEach((btn)=>{
    btn.classList.remove("active")
  })
}





  


