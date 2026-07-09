import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";

import Home from "./pages/Home/Home.tsx";
import Layout from "./components/Layout.tsx";
import { TopbarMenuLinkConfig } from "./types.ts";

import "./index.css";

const links: TopbarMenuLinkConfig[] = [
  {
    label: "Highlights",
    link: "#highlights",
  },
  {
    label: "Experience",
    link: "#experience",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Tech",
    link: "#tech",
  },
  {
    label: "About",
    link: "#about",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout links={links} />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
