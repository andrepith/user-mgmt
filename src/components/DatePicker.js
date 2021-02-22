import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = ({ date, handleChangeDate }) => {
  const [focused, setFocused] = useState(false);
  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  };
  return (
    <SingleDatePicker
      date={date}
      onOutsideClick={true}
      numberOfMonths={1}
      onDateChange={handleChangeDate}
      focused={focused}
      onFocusChange={onFocusChange}
      isOutsideRange={() => false}
      id="dob"
    />
  );
};

export default DatePicker;
