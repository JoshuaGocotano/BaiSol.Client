import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../AuthAPI";
import { useUserEmail } from "../../../state/Hooks/userHook";
import { toast } from "react-toastify";

interface IPayment {
  referenceNumber: string;
  checkoutUrl: string;
  amount: string;
  description: string;
  status: string;
  sourceType: string;
  createdAt: string;
  updatedAt: string;
  paidAt: string;
  paymentFee: string;
  isAcknowledged: boolean;
  acknowledgedBy: string;
  acknowledgedAt: string | null;
}

export const getClientPayments = (projId: string) => {
  return useQuery<IPayment[], Error>({
    queryKey: ["client-payment", projId],
    queryFn: async () => {
      const response = await api.get("api/Payment/GetClientPayments", {
        params: { projId },
      });
      return response.data;
    },
  });
};

export const getAllPayments = () => {
  return useQuery<IPayment[], Error>({
    queryKey: ["all-client-payment"],
    queryFn: async () => {
      const response = await api.get("api/Payment/GetClientPayments");
      return response.data;
    },
  });
};

export interface IAllPayment {
  referenceNumber: string;
  checkoutUrl: string;
  amount: string;
  netAmount: string;
  description: string;
  status: string;
  sourceType: string;
  createdAt: string;
  paidAt: string;
  paymentFee: string;
  isAcknowledged: boolean;
  acknowledgedBy: string;
  acknowledgedAt: string;
  projId: string;
  projName: string;
  billingEmail: string;
  billingName: string;
  billingPhone: string;
}

export const getAllPayment = () => {
  return useQuery<IAllPayment[], Error>({
    queryKey: ["all-payment"],
    queryFn: async () => {
      const response = await api.get("api/Payment/GetAllPayment");
      return response.data;
    },
  });
};

export const useCreatePayment = () => {
  const userEmail = useUserEmail();
  return useMutation({
    mutationFn: async (data: { projId: string }) => {
      const response = await api.post(
        "api/Payment/CreatePayment",
        {
          ...data,
          userEmail: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response.data);
      console.error("Error request supply:", error);
    },
  });
};

export const useAcknowledgePayment = () => {
  const userEmail = useUserEmail();
  return useMutation({
    mutationFn: async (data: {
      referenceNumber: string;
      description: string;
    }) => {
      const response = await api.post(
        "api/Payment/AcknowledgePayment",
        {
          ...data,
          userEmail: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response.data);
      console.error("Error request supply:", error);
    },
  });
};

// Check downpayment if payed
export const getIsProjectPayedDownpayment = (projId: string) => {
  return useQuery<boolean, Error>({
    queryKey: ["IsProjectPayedDownpayment", projId],
    queryFn: async () => {
      const response = await api.get("api/Payment/IsProjectPayedDownpayment", {
        params: {
          projId: projId,
        },
      });
      return response.data;
    },
  });
};
