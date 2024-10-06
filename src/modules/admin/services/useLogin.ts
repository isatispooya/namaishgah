import { useMutation } from "@tanstack/react-query";
import { Admin } from "../types";

const useLogin = () => {
  const { data , mutate} = useMutation({
    mutationFn: async (data: Admin) => {
      return data;
    },
    mutationKey: ["Admin"],
  });
console.log(data)
  return { data , mutate};
};
export default useLogin;
