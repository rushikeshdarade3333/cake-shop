import React, { useState, useEffect } from "react";
import MuiDatatable from "mui-datatables";
import CheckoutService from "../../../6-services/CheckoutService";
import CustomerContext from "../customers/CustomerContext";

const CheckoutList = () => {
  const [users, setUsers] = useState([]);
  const [operation] = useState("add");
  const [initialUser] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const loadUsers = () => {
    CheckoutService.fetchAllUser()
      .then((response) => {
        setUsers(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  const columns = [
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },

    {
      label: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Full Address",
      name: "flatno",
      options: {
        sort: false,
        filter: true,
      },
    },

    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
  ];

  return (
    <React.Fragment>
      <CustomerContext.Provider
        value={{
          operation,
          initialUser,
          handleDialogClose,
          openDialog,
          loadUsers,
        }}
      ></CustomerContext.Provider>
      <>
        <MuiDatatable
          title="Dilevery Cake List"
          data={users}
          columns={columns}
        />
      </>
    </React.Fragment>
  );
};

export default CheckoutList;
