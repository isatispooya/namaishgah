import { useQuery } from "@tanstack/react-query";
import { getGifValidation } from "../service/validation"; 

const useGetValidation = (uuid) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getValidation", uuid],
    queryFn: () => getGifValidation(uuid), 
    enabled: !!uuid,  
  });

  return { data, isLoading, isError, error };
};

export default useGetValidation;

