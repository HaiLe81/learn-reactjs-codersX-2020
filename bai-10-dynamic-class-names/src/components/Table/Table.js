import React from "react";
import "./Table.css";

export default function Table() {
  const arr = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Mark", last: "Otto", handle: "@mdo" }
  ];
  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((val, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "" : "is-even"}`}>
              <td>{index + 1}</td>
              <td>{val.first}</td>
              <td>{val.last}</td>
              <td>{val.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
