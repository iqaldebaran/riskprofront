import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";

// @material-ui/icons
import Person from "@material-ui/icons/ExitToApp";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-dashboard-pro-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, rtlActive } = this.props;
    const { open } = this.state;
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
        [classes.searchRTL]: rtlActive
      });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
      { [classes.dropdownItemRTL]: rtlActive }
    );
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
        
        
        
        <Button
          color="transparent"
          aria-label="Person"
          
          className={classes.buttonLink}
          muiClasses={{
            label: ""
          }}
          onClick={(e) => {
            console.log("pico el boton logout")
            e.preventDefault();
            this.props.logoutUser();
          }}>
        LogOut - 
          <Person
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {"Profile"}
            </span>
          </Hidden>
        </Button>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withStyles(headerLinksStyle)(connect(mapStateToProps, { logoutUser })(HeaderLinks));
