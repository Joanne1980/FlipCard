import React from "react";

export default function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let mins = newDate.getMinutes();

  return `${date}/${month < 10 ? `0${month}` : `${month}`}/${year} -
  ${hour}:${mins < 10 ? `0${mins}` : `${mins}`}`;
}
