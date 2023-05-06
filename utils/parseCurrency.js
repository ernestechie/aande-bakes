export const formatCurrency = (amount) => {
  return amount.toLocaleString();
};

export const formatAmountToNaira = (value) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(value);
