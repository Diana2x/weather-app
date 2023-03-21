export function convertToCelsius(temp) {
  const celsius = temp - 273.15;
  const roundedCelsius = Math.floor(celsius);
  const decimalPart = celsius - roundedCelsius;
  const displayCelsius =
    decimalPart >= 0.5 ? roundedCelsius + 1 : roundedCelsius;
  return `${displayCelsius}°C`;
}
