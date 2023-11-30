import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Statistics = (props) => {
  const { statisticData, monthName } = props;
  const [data, setData] = useState({ sold: 0, notSold: 0, sale: 0 });

  const updateData = (val) => {
    setData(val);
  };
  useEffect(() => {
    updateData(statisticData);
  }, [statisticData]);

  return (
    <div className="statistics-box">
      {data && (
        <>
          <h3>Statistics - {monthName}</h3>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Total sale</td>
                <td>{data.sale}</td>
              </tr>
              <tr>
                <td>Total sold items</td>
                <td>{data.sold}</td>
              </tr>
              <tr>
                <td>Total not sold items</td>
                <td>{data.notSold}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default Statistics;
