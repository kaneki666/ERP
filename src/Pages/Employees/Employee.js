import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";

import AddNotification from "../../actions/AddNotification";
import Add_list_sale from "../../actions/Add_list_sale";
import {
  Edit_employee_api,
  Delete_employee_api,
  Get_employee_api,
} from "../../Api_calls";

const ListSale = () => {
  const [date, setDate] = useState("");
  const [state, setState] = React.useState({
    columns: [
      { title: "Id", field: "id", editable: "never" },
      { title: "Full Name", field: "name" },
      { title: "Address", field: "address" },
      { title: "Designation", field: "designation" },
      {
        title: "Joining Date",
        field: "joining_date",
      },
      { title: "NID", field: "nid" },
      { title: "Phone", field: "phone" },
    ],
    data: [],
  });

  useEffect(() => {
    Get_employee_api().then((res) => {
      setState((prevState) => {
        const data = res.data;
        return { ...prevState, data };
      });
    });
  }, []);

  return (
    <div>
      <MaterialTable
        style={{ marginTop: "20px" }}
        title="Employee List"
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    Edit_employee_api(newData);
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  Delete_employee_api(oldData.id);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
};

export default ListSale;
