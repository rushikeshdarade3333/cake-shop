import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Slices/authSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../../../6-services/BookingService";
const BookinCake = () => {
  const navigate = useNavigate();

  const { id: bookingId } = useParams();
  const loggedUser = useSelector(selectUser);
  const [bookingState, setBookingState] = React.useState({
    name: "",
    title: "",
    datebook: "",
    paidAmount: 0,
    paymentMode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingState({ ...bookingState, [name]: value });
  };

  const canfirmBooking = () => {
    const data = { ...bookingState, cake: bookingId, customer: loggedUser._id };
    console.log("Booking", data);
    BookingService.createBooking(data)
      .then((response) => {
        alert("your cake booked");
      })
      .catch((err) => alert("could not booked..."));
  };

  return (
    <>
      <Box
        component="section"
        style={{ backgroundColor: "#fff", padding: "30px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Booking Date"
              variant="outlined"
              fullWidth
              type="date"
              name="datebook"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Paid Amount"
              variant="outlined"
              fullWidth
              type="number"
              name="paidAmount"
              inputProps={{ min: 0 }}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="paymentMode">Payment Mode</InputLabel>
              <Select
                labelId="paymentMode"
                id="demo-simple-select"
                label="Payment Mode"
                onChange={(e) =>
                  setBookingState({
                    ...bookingState,
                    paymentMode: e.target.value,
                  })
                }
              >
                <MenuItem value="cash">COD</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={canfirmBooking}>
              Confirm Bokking
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookinCake;
