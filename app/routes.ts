// app/root.ts
import { type RouteConfig } from "@react-router/dev/routes";
import FrontoficeController from "./controller/front-office/FrontOfficeController";

export default [ ...FrontoficeController] satisfies RouteConfig;
