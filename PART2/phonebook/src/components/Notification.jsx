/* eslint-disable react/prop-types */
export default function Notification({ message, type }) {
  if (message === null && type === null) return null;

  const succesStyle = {
    color: "green",
    background: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  };

  const errorStyle = {
    color: "red",
    background: "lightpink",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  };

  const style = type === "success" ? succesStyle : errorStyle;

  return <div style={style}>{message}</div>;
}
