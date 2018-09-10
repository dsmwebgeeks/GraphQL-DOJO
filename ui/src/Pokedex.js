import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel
} from "@material-ui/core";

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
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      sortField: "name",
    };
  }

  handleSortRequest = property => {
    const sortField = property;
    let order = "desc";

    if (this.state.sortField === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, sortField });
  };

  render() {
    const { order, sortField } = this.state;
    return (
      <Query
        query={gql`
          query allPokemons(
            $sortField: String
            $sortOrder: String
            ) {
            allPokemons(sortField: $sortField, sortOrder: $sortOrder, page: 0, perPage: 10) {
              id
              name
              number
              type
            }
          }
        `}
        variables={{
          sortField: this.state.sortField,
          sortOrder: this.state.order
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            <Paper className={this.props.classes.root}>
              <Table className={this.props.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      key="name"
                      sortDirection={sortField === "name" ? order : false}
                    >
                      <Tooltip
                        title="Sort"
                        placement="bottom-start"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={sortField === "name"}
                          direction={order}
                          onClick={() => this.handleSortRequest("name")}
                        >
                          Name
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      key="rate"
                      sortDirection="asc"
                      numeric
                    >
                      <Tooltip
                        title="Sort"
                        placement="bottom-end"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={sortField === "number"}
                          direction={order}
                          onClick={() => this.handleSortRequest("number")}
                        >
                          Number
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.allPokemons.map((n, index) => {
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
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Pokedex);
