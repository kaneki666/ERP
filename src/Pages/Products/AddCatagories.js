import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import RiseLoader from "react-spinners/RiseLoader";
import { useDispatch } from "react-redux";

import {
  Get_catagories,
  Edit_catagories,
  Add_catagories,
  Delete_catagories,
} from "../../Api_calls";
import AddNotification from "../../actions/AddNotification";

const AddCatagories = () => {
  const [columns, setColumns] = useState([
    { title: "Id", field: "id", editable: "never" },
    { title: "Brand Name", field: "name" },
    {
      title: "Date",
      field: "created_at",
      editable: "never",
    },
  ]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Get_catagories().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  if (loading === false) {
    return (
      <MaterialTable
        title="LIST OF CATEGORIES"
        columns={columns}
        data={data}
        options={{
          filtering: true,
          exportButton: true,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                console.log(newData);
                Add_catagories(newData.name);
                var d = new Date(); // for now
                let h = d.getHours(); // => 9
                let m = d.getMinutes(); // =
                let t = `${h}: ${m}`;
                const notification = {
                  time: t,
                  message: "New Catagories Added",
                };
                dispatch(AddNotification(notification));
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                Edit_catagories(newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                Delete_catagories(oldData.id);
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

export default AddCatagories;
