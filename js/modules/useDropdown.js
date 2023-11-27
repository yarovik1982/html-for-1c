// dropdown.js
export const dropdown = () => {
   const isOpen = () => {
      const dropdowns = document.querySelectorAll('.dropdown-menu')
      return Array.from(dropdowns).some(dropdown => dropdown.classList.contains('show'))
   }
   
   const showHeader = (coordY) => {
      const header = document.querySelector('.header')
      const condition = isOpen()
      if(coordY < 30 || condition){
         header.classList.add('visible')
      }else if(header.classList.contains('visible') && coordY > 100){
         header.classList.remove('visible')
      }
   }
   
   document.addEventListener('mousemove', function(e) {
      showHeader(e.clientY)
   });
}
const getItems = () => {
   return document.querySelectorAll('.dropdown-item')
}
export const getDataFromDropdown = (callback) => {
   const items = getItems()
   items.forEach(item => {
      item.addEventListener('click', e => {
         const current = e.target
         const parent = current.closest('.dropdown')
         const button = parent.querySelector('button>span').textContent
         callback([current.textContent, button]);
      })
   })
}



