import { Empty, Table, TableProps } from "antd";
import React from "react";

interface Props extends Omit<TableProps, "dataSource" | "columns"> {
  header: Array<string>;
  data: Array<Array<string>>;
}

const CTable = (props: Props) => {
  const headerKey = props.header.map((key) => btoa(key));

  const getDataSource = () => {
    const rs: Array<Record<string, string>> = [];
    props.data.forEach((record, recordNum) => {
      const item: Record<string, string> = {};
      item.key = recordNum.toString();

      record.forEach((value, columnNum) => {
        item[headerKey[columnNum]] = value;
      });
      rs.push(item);
    });
    return rs;
  };

  const getColumns = () => {
    const rs: Array<Record<string, string>> = [];
    props.header.forEach((value, index) =>
      rs.push({
        title: value,
        dataIndex: headerKey[index],
        key: headerKey[index],
      })
    );
    return rs;
  };

  return headerKey.length ? (
    <Table {...props} dataSource={getDataSource()} columns={getColumns()} />
  ) : (
    <Empty />
  );
};

export default CTable;
