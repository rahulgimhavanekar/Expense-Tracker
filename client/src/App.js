import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DashboardPage from "./pages/DashboardPage";
import ExpensesPage from "./pages/ExpensesPage";
import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
