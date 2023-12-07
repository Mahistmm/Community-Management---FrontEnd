import React from "react";
import "./WidgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Working Professionals</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Place</th>
          <th className="widgetLgTh">Position</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mani</span>
          </td>
          <td className="widgetLgDate">Viruthunagar</td>
          <td className="widgetLgAmount">VAO</td>
          <td className="widgetLgStatus">
            <Button type="Govt" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mani</span>
          </td>
          <td className="widgetLgDate">Trichy</td>
          <td className="widgetLgAmount">BHEL</td>
          <td className="widgetLgStatus">
            <Button type="Private" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mani</span>
          </td>
          <td className="widgetLgDate">Chennai</td>
          <td className="widgetLgAmount">Chennai</td>
          <td className="widgetLgStatus">
            <Button type="others" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bala</span>
          </td>
          <td className="widgetLgDate">Chennai</td>
          <td className="widgetLgAmount">private</td>
          <td className="widgetLgStatus">
            <Button type="Private" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
