const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
export function Dateformat(data, type = "addForm") {
  if (type == "addForm") {
    data.id = Date.now();
    data.date = new Intl.DateTimeFormat(navigator.language, options)
      .format(data.id)
      .split(",");
    return data;
  } else {
    data.date = new Intl.DateTimeFormat(navigator.language, options)
      .format(Date.now())
      .split(",");
    return data;
  }
}
