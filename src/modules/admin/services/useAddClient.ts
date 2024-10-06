import api from "../../../api";
import { User } from "../types";

const addClient = async (mobile: string):Promise<User> => {
  const response = await api.post("/api/get/mobile/", { mobile });
  return response.data;
};


const useAddClint