import { useQuery } from "@tanstack/react-query";
import { api } from "../AuthAPI";
import { selectUser } from "../../../state/authSlice";
import { useSelector } from "react-redux";
import { useUserEmail } from "../../../state/Hooks/userHook";

interface IProjId {
  projId: string;
}

<<<<<<< HEAD
// const user = useSelector(selectUser);
// const userEmail = user.email || "";
=======
>>>>>>> 186294d0bc445b38b9ff97ea677d487ec826c5f5
// const userEmail = "richardddquirante98@gmail.com";

// export const getClientProjId = (userEmail: string) => {
export const getClientProjId = () => {
  const userEmail = useUserEmail();
    return useQuery<IProjId, Error>({
      queryKey: ["projId", userEmail],
      queryFn: async () => {
        const response = await api.get(`api/Client/GetClientProjectId`, {
          params: { userEmail },
        });
        return response.data;
      },
    });
  };
