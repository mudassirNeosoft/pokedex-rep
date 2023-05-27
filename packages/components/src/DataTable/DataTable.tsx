import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IDataTableProps, RowData } from "./DataTable.types";

export const DataTable = ({
  rows,
  column,
  pageSizeOptions,
  onRowClick,
  getRowId,
  paginationModel,
  paginationModelChange,
  isLoading=false,
  rowCount
}: IDataTableProps) => {

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={column}
        pageSizeOptions={pageSizeOptions}
        onRowClick={(row: any) => onRowClick(row)}
        rowCount={rowCount}
        getRowId={(row: RowData) => getRowId(row)}
        pagination
       paginationMode="server"
       paginationModel={paginationModel}
       onPaginationModelChange={paginationModelChange}
       loading={isLoading}
      />
    </div>
  );
};
