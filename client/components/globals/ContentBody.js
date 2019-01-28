// eslint-disable-next-line
/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// ===============================================================
// Components
// ===============================================================
import SideBar from './SideBar'
import {AreaChart} from 'react-easy-chart'
// import ReactFlot from 'react-flot'
// require('../../assets/vendors/custom/jquery-ui/jquery.min')
// require('../../assets/demo/default/custom/components/charts/flotcharts')
// require('../../assets/vendors/custom/flot/flot.bundle')

var data = [];
var totalPoints = 250;

// random data generator for plot charts

function getRandomData() {
    if (data.length > 0) data = data.slice(1);
    // do a random walk
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0) y = 0;
        if (y > 100) y = 100;
        data.push(y);
    }
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }

    return res;
}

const options = {
    series: {
        shadowSize: 1
    },
    lines: {
        show: true,
        lineWidth: 0.5,
        fill: true,
        fillColor: {
            colors: [{
                opacity: 0.1
            }, {
                opacity: 1
            }]
        }
    },
    yaxis: {
        min: 0,
        max: 100,
        tickColor: "#eee",
        tickFormatter: function(v) {
            return v + "%";
        }
    },
    xaxis: {
        show: false,
    },
    colors: ["#6ef146"],
    grid: {
        tickColor: "#eee",
        borderWidth: 0,
    }
}

var updateInterval = 30;

// function update() {
//     setTimeout(update, updateInterval);
// }
// update();

function Interval(){

}

class ContentBody extends Component {

  constructor(props) {
    super()
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 'auto'
    this.state = {showToolTip: false, windowWidth: initialWidth - 100}
    this.Interval = this.Interval.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  Interval() {
    setTimeout(Interval, updateInterval)
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x
    });
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    }
  }

  mouseOutHandler() {
    this.setState({ showToolTip: false });
  }

     render() {
        return (
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

          <SideBar />

          {/* Content */}
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader-search" style={ { background: '#323c54' } }>

            <AreaChart
              axes
              datePattern={'%d-%b-%y %H:%M'}
              xDomainRange={[0, 100]}
              yDomainRange={[0, 100]}
              axisLabels={{x: 'Hour', y: 'Percentage'}}
              margin={{top: 30, right: 30, bottom: 30, left: 30}}
              width={1760}
              height={400}
              ouseOverHandler={this.mouseOverHandler}
              mouseOutHandler={this.mouseOutHandler}
              mouseMoveHandler={this.mouseMoveHandler}
              interpolate={'cardinal'}
              areaColors={['black', 'purple']}
              data={[
                [
                  { x: 0, y: 25 },
                  { x: 10, y: 25 },
                  { x: 20, y: 80 },
                  { x: 30, y: 25 },
                  { x: 40, y: 10 },
                  { x: 50, y: 12 },
                  { x: 60, y: 25 },
                  { x: 100, y: 25 }
                ], [
                  { x: 0, y: 25 },
                  { x: 10, y: 40 },
                  { x: 20, y: 30 },
                  { x: 30, y: 25 },
                  { x: 40, y: 60 },
                  { x: 50, y: 22 },
                  { x: 60, y: 30 },
                  { x: 100, y: 15 }
                ]
              ]}
              style={{
                '.Area0': {
                  stroke: 'green'
                }
              }}
            />

              </div>
          </div>

          </div>
        );
    }
}

export default ContentBody;
