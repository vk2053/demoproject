import React from "react";
import { getStudentsData } from "../utils/api";

export default function PromiseDemo() {
  getStudentsData()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const getData = async () => {
    const studentsData = await getStudentsData();
  };

  return <div></div>;
}