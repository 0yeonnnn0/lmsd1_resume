const modal_body = document.querySelector('.modal_body')
const modal_background = document.querySelector('.modal_background')

//Show modal
document.querySelector('.modal_btn').addEventListener('click', () => {
    open()
    })

//Hide modal(close button)
document.querySelector('.modal_close').addEventListener('click', () => {
    close()
})

  //Hide modal
window.addEventListener('click', (e) => {
    e.target === modal_background ?  close() : false
})
  
function close(){
    modal_body.classList.remove('show-modal');
    modal_background.classList.remove('show-modal');
}
function open(){
    modal_body.classList.add('show-modal')
    modal_background.classList.add('show-modal')
}