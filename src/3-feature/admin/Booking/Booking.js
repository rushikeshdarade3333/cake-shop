import React, { useEffect, useState } from "react";
import MuiDatatable from "mui-datatables";
import BookingService from "../../../6-services/BookingService";
import UserService from "../../../6-services/UserService";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import BookContext from "./BookContext";

const Booking = () => {
  const [users, setusers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialcake, setInitialCake] = useState();

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const loadbooking = () => {
    BookingService.fetchAllBooking()
      .then((responce) => {
        setusers(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    loadbooking();
  }, []);

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
        BookingService.deleteBooking(id)
          .then((response) => {
            loadbooking();

            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  }; //deleteusers

  const columns = [
    {
      label: "ID",
      name: "bookingId",
      options: {
        sort: true,
        filter: false,
      },
    },

    {
      label: "Booking Date",
      name: "datebook",
      options: {
        sort: true,
        filter: false,
      },
    },

    {
      label: "PaidAmount",
      name: "paidAmount",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "paymentMode",
      name: "paymentMode",
      options: {
        sort: false,
        filter: true,
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
      <MuiDatatable title="Cake Book List" data={users} columns={columns} />

      <BookContext.Provider
        value={{
          operation,
          initialcake,
          handleDialogClose,
          openDialog,
          loadbooking,
        }}
      ></BookContext.Provider>
    </React.Fragment>
  );
};

export default Booking;
