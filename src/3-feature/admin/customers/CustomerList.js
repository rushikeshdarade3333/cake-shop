import React, { useEffect, useState } from "react";
import MuiDatatable from "mui-datatables";
import Button from "@mui/material/Button";
import UserService from "../../../6-services/UserService";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import AddEditCustomer from "./AddEditCustomer";
import CustomerContext from "./CustomerContext";

const CustomerList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const loadUsers = () => {
    UserService.fetchAllUser()
      .then((responce) => {
        setUsers(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setInitialUser({});
    setOperation("add");
    setOpenDialog(true);
  }; //Addusers

  const editUser = (user) => {
    setInitialUser(user);
    setOperation("edit");
    setOpenDialog(true);
  }; //editUsers
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  }; //deleteUsers

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
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
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
      label: "Gender",
      name: "gender",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Role",
      name: "role",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user.status == 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user._id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
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
      >
        <AddEditCustomer />
      </CustomerContext.Provider>
      <>
        <Button variant="contained" color="primary" onClick={addUser}>
          New +
        </Button>
        <MuiDatatable title="Customer List" data={users} columns={columns} />
      </>
    </React.Fragment>
  );
};

export default CustomerList;
