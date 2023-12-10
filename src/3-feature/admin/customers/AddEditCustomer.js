import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CustomerContext from "./CustomerContext";
import CustomerForm from "./CustomerForm";

const AddEditCustomer = () => {
  const {
    operation,
    initialUser,
    handleDialogClose,
    openDialog = false,
  } = React.useContext(CustomerContext);
  return (
    <>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"}</DialogTitle>
        <DialogContent>
          <CustomerForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditCustomer;
