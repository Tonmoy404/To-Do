import { createBrowserRouter } from "react-router-dom";
import TopHeader from "../modules/core/common/TopHeader.component";
import SignIn from "../modules/platform/Login/components/Login.component";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

export default Routes;
