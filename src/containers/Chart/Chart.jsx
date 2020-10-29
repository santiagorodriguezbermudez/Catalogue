import React from 'react';
import PropTypes from 'prop-types';
import CanvasJSReact from './canvasjs.react';

const Chart = ({ history }) => {
  const { CanvasJSChart } = CanvasJSReact;
  let mapPricePoints = [];

  if (history !== undefined) {
    mapPricePoints = history.map(price => {
      const priceData = {
        x: new Date(price.date),
        y: price.close,
      };
      return priceData;
    });
  }

  const options = {
    animationEnabled: true,
    animationDuration: 5000,
    theme: 'light1',
    title: {
      text: 'Close Historic Price',
    },
    backgroundColor: 'transparent',
    axisX: {
      interval: 1,
      valueFormatString: 'D MMM YYYY',
    },
    axisY: {
      minimum: 0,
      includeZero: false,
      title: 'Price',
    },
    data: [
      {
        type: 'line',
        yValueFormatString: '#,##.##',
        showInLegend: true,
        dataPoints: mapPricePoints,
      },
    ],
  };
  return (
    <div className="chart">
      <CanvasJSChart
        options={options}
      />
    </div>
  );
};

Chart.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
