export const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const optionsFilter = ['All'];
