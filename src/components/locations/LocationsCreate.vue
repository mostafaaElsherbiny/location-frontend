<template>
  <h1 class="text-center text-4xl font-bold my-8">Add Location</h1>

  <div v-if="errors.hasError">
    <div
      class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
    >
      <p class="text-sm">
        {{ errors.msg }}
      </p>
    </div>
    <div
      v-for="(error, k) in errors.args"
      :key="k"
      class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
    >
      <p :key="k + '_mesage'" class="text-sm">
        {{ error.message }}
      </p>
    </div>
  </div>
  <form class="space-y-6" @submit.prevent="save">
    <div class="space-y-4 rounded-md shadow-sm">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Title
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="form.title"
          />
        </div>
        <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 400px"
          @map-ready="onMapReady"
        >
          <GMapMarker
            :position="center"
            :draggable="true"
            @dragend="onMarkerDragEnd"
          ></GMapMarker>
        </GMapMap>
      </div>
    </div>

    <button
      type="submit"
      class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
    >
      Create
    </button>

    <router-link
      :to="{ name: 'locations.index' }"
      class="inline-flex items-center px-4 mx-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring disabled:opacity-25"
    >
      Cancel
    </router-link>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useCompanies from "@/composables/locations";

const form = ref({
  title: "",
  latitude: 31.233334,
  longitude: 31.233334,
});
const center = ref({ lat: 30.033333, lng: 31.233334 });

const { errors, storeLocation } = useCompanies();

const save = async () => {
  await storeLocation({ ...form.value });
};
const onMarkerDragEnd = (event: any) => {
  form.value.latitude = event.latLng.lat();
  form.value.longitude = event.latLng.lng();
};

const onMapReady = (map: any) => {
  console.log(map);
};
</script>
