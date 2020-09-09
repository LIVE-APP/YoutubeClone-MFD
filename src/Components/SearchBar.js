import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
class SerachBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = () => {
    let l_sSearchBar = document.getElementById('searchbar').value;
    this.setState({ searchTerm: l_sSearchBar });
  }

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id ="searchbar"
            fullwidth="true"
            label="Search...."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SerachBar;
