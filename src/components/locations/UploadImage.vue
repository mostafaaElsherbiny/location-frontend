<!-- upload image  -->

<template>
  <h1 class="text-center text-4xl font-bold my-8">Uploader</h1>
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
  <form class="space-y-6" @submit.prevent="uploadImage">
    <div class="space-y-4 rounded-md shadow-sm"></div>

    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">
        Image
      </label>
      <div class="mt-1">
        <input
          type="file"
          name="file"
          @change="onFileChange"
          id="name"
          class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
    <button
      type="submit"
      class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
    >
      Upload
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useUploader from "../../composables/uploader";

const { errors, store } = useUploader();

const image = ref();

const onFileChange = (e: any) => {
  image.value = e.target.files[0];
};

const uploadImage = () => {
  const formData = new FormData();

  formData.append("file", image.value);

  store(formData);
};
</script>
