import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/reset.css'
import '../src/styles/common.module.css'
import {RouterProvider} from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router}/>
);

