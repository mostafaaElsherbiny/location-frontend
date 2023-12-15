import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ErrorInterface from "@/Types/ErrorInterface";

interface LocationType {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
  image: {
    url: string;
  };
}
export default function useLocations() {
  const locations = ref<LocationType[]>([]);
  const location = ref<LocationType | null>(null);
  const router = useRouter();
  const errors = ref<ErrorInterface>({ msg: "", args: [], hasError: false });
  const BaseUrl = import.meta.env.VITE_BASE_URL;

  const getLocations = async () => {
    let response = await axios.get(BaseUrl + "/locations");
    locations.value = response.data;
  };

  const storeLocation = async (data: any) => {
    errors.value = { msg: "", args: [], hasError: false };
    try {
      await axios.post(BaseUrl + "/locations", data);
      await router.push({ name: "locations.index" });
    } catch (e: any) {
      if (e.response.status === 400) {
        errors.value = { ...e.response.data, hasError: true };
      }
    }
  };

  return {
    locations,
    location,
    errors,
    getLocations,
    storeLocation,
  };
}
