<template>
  <div
    class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md"
  >
    <h1 class="text-center text-4xl font-bold my-8">My Locations</h1>
    <div class="flex place-content-end mb-4">
      <div
        class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
      >
        <router-link
          :to="{ name: 'locations.create' }"
          class="text-sm font-medium"
          >Add Location</router-link
        >
      </div>
     
    
    </div>
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 1000px; height: 800px"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="getPosition(location)"
        @click="openMarker(location.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(-1)"
          :opened="openedMarkerID === location.id"
        >
          <div>
            <h1>
              {{ location.title }}
            </h1>
            <img
              crossorigin="anonymous"
              :src="location.image.url"
              style="
                 {
                  width: 100%;
                  height: 100px;
                }
              "
            />
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useCompanies from "@/composables/locations";
const center = ref({ lat: 30.033333, lng: 31.233334 });
const openedMarkerID = ref(-1);

const { locations, getLocations } = useCompanies();

onMounted(() => {
  getLocations();
});
const getPosition = (location: any) => {
  return {
    lat: location.latitude,
    lng: location.longitude,
  };
};
const openMarker = (id: number) => {
  openedMarkerID.value = id;
};
</script>
