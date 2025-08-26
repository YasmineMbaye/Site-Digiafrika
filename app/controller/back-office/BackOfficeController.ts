import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/layouts/Backofficelayout.tsx",[
        
        route("dashboard","view/back-office/DashboardView.tsx"),
    ]),
    route("login","view/back-office/Login.tsx"),
    route("logout","components/ui/Logout.tsx"),
] satisfies RouteConfig;


