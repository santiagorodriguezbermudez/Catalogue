import React from 'react';
import PropTypes from 'prop-types';
import CanvasJSReact from '../assets/js/canvasjs.react';

const Chart = ({ history }) => {
  const { CanvasJSChart } = CanvasJSReact;

  const mapPricePoints = history.map(price => {
    const priceData = {
      x: new Date(price.date),
      y: price.close,
    };
    return priceData;
  });

  const options = {
    animationEnabled: true,
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
        name: 'Daily Close Price',
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

Chart.defaultProps = {
  history: [],
};

Chart.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
};

export default Chart;
