import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class AspectosAmbientales extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { gilad, jason, antoine } = this.state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={6} >
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={this.handleChange('antoine')}
                    value="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl required error={error} component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={this.handleChange('antoine')}
                    value="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AspectosAmbientales.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AspectosAmbientales);
