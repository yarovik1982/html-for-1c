// addRow.js
export const addRow = () => {
   const add = document.getElementById('addRow');
   let rowNum = 1;
   
   const createRow = () => {
      const parent = document.querySelector('.tabular-body');
      const row = document.createElement('div');
      row.classList.add('tabular-row', 'tabular-body-row', 'd-flex', 'w-100', 'justify-content-between');
      row.innerHTML = `<div class="tabular-col w-25">${rowNum}</div>
      <div class="tabular-col w-100 flex-grow-1 flex-shrink-1"><input type="text"></div>
      <div class="tabular-col w-100 flex-grow-1 flex-shrink-1"><input type="text"></div>
      <div class="tabular-col w-100 flex-grow-1 flex-shrink-1"><input type="text"></div>
      <div class="tabular-col w-100 flex-grow-1 flex-shrink-1"><input type="text"></div>
      <div class="tabular-col w-100 flex-grow-1 flex-shrink-1"><input type="text"></div>
      <div class="tabular-col w-75 flex-grow-1 flex-shrink-1">
      <i class="bi bi-trash3"></i>
      </div>`;
      parent.append(row);
      rowNum++;

      row.querySelector('.bi-trash3').addEventListener('click', () => deleteRow(row));
  }
  
  const deleteRow = (row) => {
      row.parentNode.removeChild(row);
      updateRowNum();
  }
  
  const updateRowNum = () => {
      const rows = document.querySelectorAll('.tabular-body-row');
      rowNum = 1;
      rows.forEach(row => {
          row.querySelector('.tabular-col').textContent = rowNum;
          rowNum++;
      });
  }
  
  add.addEventListener('click', createRow);
}

export const setValues = (arr) => {
   const element = document.querySelector('.docName')
   element.textContent = `${arr[1]} (${arr[0]})`
   
}
