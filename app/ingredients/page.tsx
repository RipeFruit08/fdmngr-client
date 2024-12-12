import { FC } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IngredientsTable from "@/components/IngredientsTable";
import { Button } from "@mui/material";

const Ingredients: FC = async () => {
  return (
    <div>
      <IngredientsTable />
    </div>
  );
};

export default Ingredients;
