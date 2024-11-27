import GestionTable from "./components/GestionTable";


import {columnsDataCheck} from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";


const Management = () => {
  return (
    <div>
      
        <GestionTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      
        
    </div>
  );
};

export default Management;
