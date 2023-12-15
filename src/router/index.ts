import { createRouter, createWebHistory } from "vue-router";

import LocationsIndex from "@components/locations/LocationsIndex.vue";
import LocationsCreate from "@components/locations/LocationsCreate.vue";
import UploadImage from "@components/locations/UploadImage.vue";
import Dashboard from "@components/dashboard/Index.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/locations",
    name: "locations.index",
    component: LocationsIndex,
  },
  {
    path: "/locations/create",
    name: "locations.create",
    component: LocationsCreate,
  },
  {
    path: "/uploader",
    name: "uploader",
    component: UploadImage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
