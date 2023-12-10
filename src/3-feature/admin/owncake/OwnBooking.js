import React, { useEffect, useState } from "react";
import axios from "axios";
import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";
import OwncakeService from "../../../6-services/OwncakeService";

const OwnBooking = () => {
  const [OwnBooking, setOwnBooking] = useState([]);

  const loadOwnBooking = () => {
    OwncakeService.fetchAllcakes()
      .then((responce) => {
        setOwnBooking(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadOwnBooking();
  }, []);

  const deleteOwnBooking = (id) => {
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
        OwncakeService.deletecakes(id)
          .then((response) => {
            loadOwnBooking();
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Not Deleted!",
              "Your reocrd has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "mobile",
      label: "Mobile No.",
    },
    {
      name: "flavour",
      label: "Flavour",
    },
    {
      name: "categorie",
      label: "Categorie",
    },

    {
      name: "message",
      label: "Message",
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const contUs = OwnBooking[index];
          return (
            <>
              <IconButton
                color="error"
                onClick={() => deleteOwnBooking(contUs?._id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <Muidatatable
        title="customer required cake List"
        data={OwnBooking}
        columns={columns}
      />
    </>
  );
};

export default OwnBooking;
