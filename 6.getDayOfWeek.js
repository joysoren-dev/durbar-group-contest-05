function getDayOfWeek(year, month, day) {
  // Month 1-indexed, tai Date er jonno 1 bad diye dicchi
  const date = new Date(year, month - 1, day);

  // getDay() er number diye weekday er name ber kortesi
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[date.getDay()];
}
