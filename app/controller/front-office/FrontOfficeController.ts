import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layouts/Frontofficelayout.tsx", [
    index("view/front-office/HomeView.tsx"),
    route("contact", "view/front-office/ContactView.tsx"),
    route("about", "view/front-office/AboutView.tsx"),
    route("actuality", "view/front-office/ActualityView.tsx"),
    route("project", "view/front-office/OurprojectView.tsx"),
    route("service", "view/front-office/OurserviceView.tsx"),
  ]),
] satisfies RouteConfig;


