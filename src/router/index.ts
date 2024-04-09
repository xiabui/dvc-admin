import { COMPONENT_NAMES } from "@/utils/const";
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordNormalized,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: COMPONENT_NAMES.dashboard,
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      title: "Dashboard",
      requiresAuth: false,
    },
  },
  {
    path: "/form",
    name: COMPONENT_NAMES.form,
    component: () => import("@/views/form/FormManagement.vue"),
    meta: {
      title: "Form",
      requiresAuth: false,
    },
  },
  {
    path: "/flow",
    name: COMPONENT_NAMES.flow,
    component: () => import("@/views/flow/FlowManagement.vue"),
    meta: {
      title: "Flow",
      requiresAuth: false,
    },
  },
  {
    path: "/new-flow",
    name: COMPONENT_NAMES.newFlow,
    component: () => import("@/views/flow/NewFlow.vue"),
    meta: {
      title: "New flow",
      requiresAuth: false,
    },
  },
  {
    path: "/task-received",
    name: COMPONENT_NAMES.taskReceived,
    component: () => import("@/views/taskReceived/TaskReceivedManagement.vue"),
    meta: {
      title: "Task",
      requiresAuth: false,
    },
  },
  {
    path: "/application-detail",
    name: COMPONENT_NAMES.applicationDetail,
    component: () => import("@/views/taskReceived/components/ApplicationDetail.vue"),
    meta: {
      title: "Application detail",
      requiresAuth: false,
    },
  },
  {
    path: "/procedure",
    name: COMPONENT_NAMES.procedure,
    component: () => import("@/views/procedure/ProcedureManagement.vue"),
    meta: {
      title: "Procedure",
      requiresAuth: false,
    },
  },
  {
    path: "/new-procedure",
    name: COMPONENT_NAMES.newProcedure,
    component: () => import("@/views/procedure/NewProcedure.vue"),
    meta: {
      title: "New Procedure",
      requiresAuth: false,
    },
  },
  {
    path: "/new-form",
    name: COMPONENT_NAMES.newForm,
    component: () => import("@/views/form/NewForm.vue"),
    meta: {
      title: "New Form",
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

const whiteListRoutes = ["login", "category", "home"];

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (from.name && whiteListRoutes.includes(from.name as string)) {
      next();
      return;
    }

    if (
      to.matched.some(
        (record: RouteRecordNormalized) => record.meta.requiresAuth
      )
    ) {
      // Todo add authentication check
    } else {
      next();
    }
  }
);

export default router;
