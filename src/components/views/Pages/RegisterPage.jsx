import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";

//Axios
//import axios from 'axios'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/Fingerprint";

// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "../../Grid/GridContainer.jsx";
import GridItem from "../../Grid/GridItem.jsx";
import Button from "../../CustomButtons/Button.jsx";
import CustomInput from "../../CustomInput/CustomInput.jsx";
import InfoArea from "../../InfoArea/InfoArea.jsx";
import Card from "../../Card/Card.jsx";
import CardBody from "../../Card/CardBody.jsx";

import registerPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };


  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { errors } = this.state;

    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>Register</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Risk Simulations Models"
                      description="Models: Pool Fire, Fire Ball, Jet Fire, Toxic Release... and more"
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Qualitative Risk Methods"
                      description="Methods: HAZOP, Layer of Protection Analisys"
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Environmental Impact Assessment"
                      description="Methods: Leopold Matrix, RIAM, Batelle Columbus"
                      icon={Group}
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={8} md={5}>
                    <div className={classes.center}>
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      {` `}
                      <Button justIcon round color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      {` `}
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                      {` `}
                    </div>
                    {/*---------- FORM ------- */}
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                      <CustomInput
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name
                        })}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses,
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          value: this.state.name,
                          error: (errors.name ? true : false),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "User Name...",
                        }}
                      />
                      <span>{errors.name}</span>
                      <CustomInput
                        id="email"
                        type="email"
                        // className={classnames("", {
                        //   invalid: errors.email
                        // })}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          value: this.state.email,
                          error: (errors.email ? true : false),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                      />
                      <span>{errors.email}</span>

                      <CustomInput
                        id="password"
                        type="password"
                        // className={classnames("", {
                        //   invalid: errors.password
                        // })}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          value: this.state.password,
                          error: (errors.password ? true : false),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <PasswordIcon className={classes.inputAdornmentIcon}>
                                lock_outline
                          </PasswordIcon>
                            </InputAdornment>
                          ),
                          placeholder: "Password..."
                        }}
                      />
                          <span>{errors.password}</span>

                      <CustomInput
                        id="password2"
                        type="password"
                        // className={classnames("", {
                        //   invalid: errors.password2
                        // })}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          value: this.state.password2,
                          error: (errors.password2 ? true : false),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <PasswordIcon className={classes.inputAdornmentIcon}>
                                lock_outline
                          </PasswordIcon>
                            </InputAdornment>
                          ),
                          placeholder: "Confirm Password..."
                        }}
                      />
                      <span>{errors.password2}</span>

                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button round color="primary" type="submit">
                          Get started
                        </Button>
                      </div>
                    </form>

                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// export default withStyles(registerPageStyle)(RegisterPage);

export default withStyles(registerPageStyle)(connect(mapStateToProps, { registerUser })(withRouter(RegisterPage)));