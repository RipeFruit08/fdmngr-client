import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import React from "react";
import BasicLayout from '../../components/BasicLayout';

export default function Page() {
    return(
      <div>
        <h1>grid page</h1>
        <BasicLayout content='content that is passed from parent'/>
      </div>
    )
  }