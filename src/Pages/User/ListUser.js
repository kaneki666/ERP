import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import RiseLoader from "react-spinners/RiseLoader";
import { useDispatch } from "react-redux";

import { Edit_user_api, Delete_user_api, Get_user_api } from "../../Api_calls";
import AddNotification from "../../actions/AddNotification";

const ListUser = () => {
  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    {
      title: "Employee Id",
      field: "employee_id",
      type: "numeric",
    },

    {
      title: "Role Id",
      field: "role_id",
      type: "numeric",
    },
  ]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Get_user_api().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  if (loading === false) {
    return (
      <MaterialTable
        title="LIST OF USERS"
        columns={columns}
        data={data}
        options={{
          filtering: true,
          exportButton: true,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                Edit_user_api(newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                Delete_user_api(oldData.id);
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <RiseLoader size={40} color={"#3f4d67"} loading={loading} />
      </div>
    );
  }
};

export default ListUser;
