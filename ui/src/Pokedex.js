import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import FakeData from './fake-database'

const styles = theme => ({
  root: {
    maxWidth: 700,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700
  }
});

class Pokedex extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                key="name"
                sortDirection="asc"
              >
                Name
              </TableCell>
              <TableCell
                key="rate"
                sortDirection="asc"
                numeric
              >
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FakeData.pokemon.map((n, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell numeric>{n.number ? n.number : "-"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(Pokedex);
