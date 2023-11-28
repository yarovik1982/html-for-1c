// dropdown.js
import { Component } from "./useComponent.js"
import { data } from "./data.js";

export const dropdownEl = new Component({
   cssClasses: ["dropdown", "px-1"],
   template: data.subsystems.map(subsystem => `
     <div class="dropdown px-1" data-metaName="#${subsystem.metaName}">
       <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="${subsystem.metaName}">
         ${subsystem.icon}
         <span class="btn-text">${subsystem.name}</span>
       </button>
       <ul class="dropdown-menu bg-warning">
         ${subsystem.metaData.map(item => `<li><a class="dropdown-item" href="#">${item}</a></li>`).join('')}
       </ul>
     </div>
   `).join(''),
 });

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
   const dropdownItems = document.querySelectorAll('.dropdown-item')
   return [dropdownItems]
}

function openDocument(metaName){
   const documentEl = document.querySelector(metaName)
      if(!documentEl) return
   documentEl.classList.add('openDocument')
}

export const getDataFromDropdown = (callback) => {
   const items = getItems()[0]
   items.forEach(item => {
      item.addEventListener('click', e => {
         const current = e.target
         const parent = current.closest('.dropdown')
         const button = parent.querySelector('button>span').textContent
         const metaName = parent.dataset.metaname
         console.log(metaName);
         openDocument(metaName)
         callback([current.textContent, button, metaName]);


      })
   })
}



