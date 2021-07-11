import React from "react";
import { MyState } from "../App";

const List: React.FC<MyState> = ({ form }) => {
  const mapList = (): JSX.Element[] => {
    return form.map((i) => {
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.time}</td>
          <td>{i.comment}</td>
        </tr>
      );
    });
  };
  return (
    <div className="tableDiv">
      <table>
        <tr>
          <th>Todo</th>
          <th>Time <br/> 24 hours </th>
          <th>Comments</th>
        </tr>
        {mapList()}
      </table>
    </div>
  );
};

export default List;
