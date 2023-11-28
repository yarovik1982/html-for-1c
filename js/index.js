// index.js
import { dropdownEl, dropdown, getDataFromDropdown } from "./modules/useDropdown.js";
import { addRow, setValues} from "./modules/useDocument.js";

const app = () => {
dropdownEl.create('.tools-content', 'div')
dropdown()
getDataFromDropdown(setValues)
addRow()
}
app()
