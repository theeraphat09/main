import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Jobs from "./pages/Jobs";
import UserView from "./pages/UserView";
import JobForm from "./pages/Jobs/JobForm";
export default function App() {
  const theme = createTheme();
  const router = createBrowserRouter([
    {
      path: "",
      element: <UserView />,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "jobs/create",
          element: <JobForm />,
        },
        {
          path: "jobs/edit/:id",
          element: <JobForm />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
