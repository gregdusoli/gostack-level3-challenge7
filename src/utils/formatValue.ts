const formatValue = (number: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number,
  );

export default formatValue;
