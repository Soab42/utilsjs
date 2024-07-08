// function for generating formatted date
export default function getDateFormat(rawDate = null) {
  const date = new Date(rawDate);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateTimeFormat.format(date);
  return formattedDate;
}
