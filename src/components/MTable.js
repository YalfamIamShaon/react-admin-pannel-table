import faker from "faker";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components/Navbar.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
  },
  tableContainer: {
    borderRadius: 10,
    margin: "10px 10px",
    maxWidth: 1560,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.getContrastText(theme.palette.secondary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.getContrastText(theme.palette.info.dark),
  },
  name: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: theme.palette.info.main,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [],
  STATUSES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 50; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    joinDate: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

function MTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>Table</span>
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/userinfo">User Info</NavLink>
            </li>
            <li>
              <NavLink to="#">Admin Pannel</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                User Info
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Job Info
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Joining Date
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Grid container>
                    <Grid item lg={2}>
                      <Avatar
                        alt={row.name}
                        /* src="."*/ className={classes.avatar}
                      />
                    </Grid>
                    <Grid item lg={10}>
                      <Typography className={classes.name}>
                        {row.name}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.email}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography color="secondary" variant="subtitle2">
                    {row.jobTitle}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {row.company}
                  </Typography>
                </TableCell>
                <TableCell>{row.joinDate}</TableCell>
                <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (row.status === "Active" && "green") ||
                        (row.status === "Pending" && "blue") ||
                        (row.status === "Blocked" && "orange"),
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={USERS.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MTable;
