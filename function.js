window.function = function(series, inputString) {
  const seriesArray = series.value.split(",");
  const trimmedSeriesArray = seriesArray.map(item => item.trim());
  const inputIndex = trimmedSeriesArray.indexOf(inputString.value.trim());

  if (inputIndex <= 0) {
    return "";
  }

  return trimmedSeriesArray[inputIndex - 1];
}
