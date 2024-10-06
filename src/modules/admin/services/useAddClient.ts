import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { User } from "../types";

const addClient = async (mobile: string): Promise<User> => {
  const response = await api.post("/api/get/mobile/", { mobile });
  return response.data;
};

const useAddClient = () => {
    console.log('ddd',import.meta.env.VITE_BASE_URL);
    
  const { mutate, data } = useMutation({
    mutationKey: ['mobile'],
    mutationFn: (mobile: string) => addClient(mobile),  
    onSuccess: (data) => {
      console.log('Success:', data);
    },
    onError: (error) => {
      console.log('Error:', error);
    },
  });

  return {
    mutate,
    data,
  };
};

export default useAddClient;
