import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import {
  Get_supplier_api,
  Add_supplier_api,
  Edit_supplier_api,
  Delete_supplier_api,
} from "../../Api_calls";

const AddSupplier = () => {
  const [columns, setColumns] = useState([
    { title: "Id", field: "id", editable: "never" },
    { title: "Supplier Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "NID", field: "nid" },
    { title: "Company name", field: "company_name" },
    { title: "Phone", field: "phone" },
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    Get_supplier_api().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <MaterialTable
      title="LIST OF SUPPLIER"
      columns={columns}
      data={data}
      options={{
        filtering: true,
        exportButton: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            Add_supplier_api(newData);
            setTimeout(() => {
              setData([...data, newData]);
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            Edit_supplier_api(newData);
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            Delete_supplier_api(oldData.id);
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
};

export default AddSupplier;
