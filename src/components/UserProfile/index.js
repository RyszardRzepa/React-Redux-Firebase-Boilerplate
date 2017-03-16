import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

import Layout from '../Layout';

export default class UserProfile extends Component {
  state = {
    firstSlider: 0.5,
    secondSlider: 2,
    thirdSlider: 3,
    fourthSlider: 2,
    fifthSlider: 4,
    open: false,
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom',
    },
    targetOrigin: {
      horizontal: 'left',
      vertical: 'top',
    },
  };

  setTarget = (positionElement, position) => {
    const { targetOrigin } = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  handleSecondSlider = (event, value) => {
    this.setState({ secondSlider: value });
  };

  handleThirdSlider = (event, value) => {
    this.setState({ thirdSlider: value });
  };

  handleFourthSlider = (event, value) => {
    this.setState({ fourthSlider: value });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.secondSlider);
  }

  render() {
    return (
      <Layout>
        <form style={{ marginLeft: '25%', marginBottom: '5%'}} className="form-group">
        <table>
          <TableRow>
            <TableRowColumn>
              <div>
                <h5>Enter the country name</h5>
              </div>
            </TableRowColumn>
            <TableRowColumn><TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
            />
            </TableRowColumn>
          </TableRow>
        </table>

        <table>
          <TableRow>
            <TableRowColumn>
              <div>
                <h5> DNM Latitude </h5>
              </div>
            </TableRowColumn>

            <TableRowColumn>
              <Checkbox />
            </TableRowColumn>

            <TableRowColumn>
              <Checkbox />
            </TableRowColumn>

          </TableRow>
        </table>
        <div style={{ marginLeft: 20 }}>
          <p>
            <span>{'Water depth: '}</span>
            <span>{this.state.secondSlider}</span>
          </p>
          <Slider
            sliderStyle={{ width: '60%' }}
            min={0}
            max={200}
            step={1}
            defaultValue={7}
            value={this.state.secondSlider}
            onChange={this.handleSecondSlider}
          />
        </div>
        <div style={{ marginLeft: 20 }}>
          <p>
            <span>{'Low Tides: '}</span>
            <span>{this.state.thirdSlider}</span>
          </p>
          <Slider
            sliderStyle={{ width: '60%' }}
            min={0}
            max={10}
            step={1}
            defaultValue={3}
            value={this.state.thirdSlider}
            onChange={this.handleThirdSlider}
          />
        </div>
        <div style={{ marginLeft: 20 }}>
          <p>
            <span>{'High Tides: '}</span>
            <span>{this.state.fourthSlider}</span>
          </p>
          <div className="row">
            <div className="col-md-8"><Slider
              sliderStyle={{ width: '60%' }}
              min={0}
              max={10}
              step={1}
              defaultValue={2}
              value={this.state.fourthSlider}
              onChange={this.handleFourthSlider}
            />
            </div>
          </div>
          <RaisedButton onTouchTap={() => this.handleSubmit()} label="Submit" primary={true} />
        </div>
        </form>
      </Layout>
    );
  }
}

const styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400,
  },
  block: {
    display: 'flex',
    marginLeft: '30%'
  },
  block2: {
    margin: 30,
  },
  pre: {
    overflow: 'hidden', // Fix a scrolling issue on iOS.
  },
};
