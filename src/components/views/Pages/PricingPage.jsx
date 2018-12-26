import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AccountBox from "@material-ui/icons/AccountBox";


// core components
import GridContainer from "../../Grid/GridContainer.jsx";
import GridItem from "../../Grid/GridItem.jsx";
import Button from "../../CustomButtons/Button.jsx";
import Card from "../../Card/Card";
import CardBody from "../../Card/CardBody.jsx";

import pricingPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";
class PricingPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.title}>Pick the best plan for you</h2>
            <h5 className={classes.description}>
              You have Free Unlimited Updates and Premium Support on each
              package.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={3}>
            <Card pricing plain>
              <CardBody pricing plain>
                <h6 className={classes.cardCategory}>Free</h6>
                <div className={classes.icon}>
                
                <AccountBox className={classes.iconWhite} />
                </div>
                <h3
                  className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
                >
                  FREE
                </h3>
                <p className={classes.cardCategory}>
                  Limited functions and methods.
                </p>
                <Button round color="white">
                  Choose plan
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card pricing raised>
              <CardBody pricing>
                <h6 className={classes.cardCategory}>BASIC</h6>
                <div className={classes.icon}>
                  <Home className={classes.iconRose} />
                </div>
                <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                  $29
                </h3>
                <p className={classes.cardDescription}>
                  This is good if your need some methods.
                </p>
                <Button round color="rose">
                  Choose plan
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card pricing plain>
              <CardBody pricing plain>
                <h6 className={classes.cardCategory}>PROFESSIONAL</h6>
                <div className={classes.icon}>
                  <Business className={classes.iconWhite} />
                </div>
                <h3
                  className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
                >
                  $69
                </h3>
                <p className={classes.cardCategory}>
                  This is good for HSE mangers or freelance consultants.
                </p>
                <Button round color="white">
                  Choose plan
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card pricing plain>
              <CardBody pricing plain>
                <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                <div className={classes.icon}>
                  <AccountBalance className={classes.iconWhite} />
                </div>
                <h3
                  className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
                >
                  $159
                </h3>
                <p className={classes.cardCategory}>
                  This is good for consulting or corporate firms
.
                </p>
                <Button round color="white">
                  Choose plan
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

PricingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pricingPageStyle)(PricingPage);
