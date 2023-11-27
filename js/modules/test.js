class Obj {
   constructor(params){
      this.cssClasses = params.cssClasses
      this.template   = params.template
      this.inner      = params.template
   }
  create(parent, tag) {
    const container = document.querySelector(parent);
    const child = document.createElement(tag);
    child.classList.add(...this.cssClasses);
    child.insertAdjacentHTML("beforeend", this.template);
    container.appendChild(child);
  }
};

export const dropdownEl = new Obj({
  cssClasses: ["dropdown", "px-1"],
  template: `
  <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"              title="Подсистема 2">
      <i class="bi bi-file-earmark"></i>
      <span class="btn-text">Бухгалтерия</span>
  </button>
   <ul class="dropdown-menu bg-warning">
      <li><a class="dropdown-item" href="#">Операции</a></li>
      <li><a class="dropdown-item" href="#">Ввод остатков</a></li>
      <li><a class="dropdown-item" href="#">бухгалтерияЗаглушка</a></li>
   </ul>`,
});
