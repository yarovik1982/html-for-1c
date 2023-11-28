export class Component {
   constructor(params) {
     this.cssClasses = params.cssClasses;
     this.template = params.template;
   }
 
   create(parent, tag) {
     const container = document.querySelector(parent);
     const child = document.createElement(tag);
     child.classList.add(...this.cssClasses);
     container.insertAdjacentHTML("beforeend", this.template);
    //  container.appendChild(child);
   }
 };
 

//  export const dropdownEl = new Obj({
//   cssClasses: ["dropdown", "px-1"],
//   template: data.subsystems.map(subsystem => `
//     <div class="dropdown px-1">
//       <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="${subsystem.metaName}">
//         <i class="bi bi-file-person"></i>
//         <span class="btn-text">${subsystem.name}</span>
//       </button>
//       <ul class="dropdown-menu bg-warning">
//         ${subsystem.metaData.map(item => `<li><a class="dropdown-item" href="#">${item}</a></li>`).join('')}
//       </ul>
//     </div>
//   `).join(''),
// });

// dropdownEl.create('.tools-content', 'div');

