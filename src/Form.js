import React, { useState } from "react";
import "./Form.css";
import SearchIcon from "@material-ui/icons/Search";
import { Fab, TextField } from "@material-ui/core";

function Form({ handleSearch }) {
  const [userInp, setUserInp] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e) => handleSearch(e, userInp)}
    >
      <TextField
        className="form__textField"
        label="Search Github User"
        variant="standard"
        value={userInp}
        onChange={(e) => setUserInp(e.target.value)}
      />

      <Fab
        onClick={(e) => handleSearch(e, userInp)}
        color="primary"
        className="form__searchButton"
      >
        <SearchIcon />
      </Fab>
    </form>
  );
}

export default Form;
