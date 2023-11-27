// index.js
import { dropdown, getDataFromDropdown } from "./modules/useDropdown.js";
import { addRow, setValues} from "./modules/useDocument.js";
import { dropdownEl } from "./modules/test.js";

dropdownEl.create('.tools-content', 'div')
dropdown()
getDataFromDropdown(setValues)
addRow()
