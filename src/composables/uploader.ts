import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ErrorInterface from "../Types/ErrorInterface";

export default function useUploader() {
  const router = useRouter();
  const errors = ref<ErrorInterface>({ msg: "", args: [], hasError: false });
  const BaseUrl = import.meta.env.VITE_BASE_URL;

  const store = async (data: FormData) => {
    errors.value = { msg: "", args: [], hasError: false };
    try {
      await axios.post(BaseUrl + "/locations/upload", data);

      await router.push({ name: "locations.index" });
    } catch (e: any) {
      if (e.response.status === 400) {
        errors.value = { ...e.response.data, hasError: true };
      }
    }
  };

  return {
    errors,
    store,
  };
}
