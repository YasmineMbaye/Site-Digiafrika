// app/root.ts
import { type RouteConfig } from "@react-router/dev/routes";
import FrontoficeController from "./controller/front-office/FrontOfficeController";
import BackOfficeController from "./controller/back-office/BackOfficeController";

export default[ ...BackOfficeController, ...FrontoficeController] satisfies RouteConfig;

