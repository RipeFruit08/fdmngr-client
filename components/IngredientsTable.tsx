"use client";
import { FC, useMemo, useRef, useState, useEffect } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useSWR from "swr";
import { Button } from "@mui/material";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

interface IngredientsTableProps {}

const columns: GridColDef<any>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  { field: "quantity", headerName: "Quantity" },
];

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const IngredientsTable: FC<IngredientsTableProps> = ({}) => {
  const buttonHandler = async () => {
    const name = makeid(5);
    const desc = makeid(20);
    const quantity = getRandomInt(0, 20);
    const payload = { name, description: desc, quantity };
    await fetch("http://localhost:3002/ingredients", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.error("error posting");
      });
    mutate();
  };
  const [rows, setRows] = useState([]);

  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3002/ingredients/`,
    fetcher
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data ?? []}
        loading={isLoading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[3, 5, 10, 50]}
        disableRowSelectionOnClick
        pagination
      />
      <Button onClick={buttonHandler}>Post</Button>
    </Box>
  );
};

export default IngredientsTable;
