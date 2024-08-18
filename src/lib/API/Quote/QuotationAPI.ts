import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../AuthAPI";
import { toast } from "react-toastify";

interface ProjectCost {
  totalCost: number;
  profit: number;
  overallMaterialTotal: number;
  overallProjMgtCost: number;
  netMeteringCost: number | null;
  totalProjectCost: number;
}

interface CategoryCost {
  category: string;
  totalCategory: number;
  totalExpense: number;
}

export interface MaterialCost {
  suppId: number;
  mtlId: number;
  description: string;
  quantity: number;
  unit: string;
  category: string;
  unitCost: number;
  totalUnitCost: number;
  buildUpCost: number;
  createdAt: string;
  updatedAt: string;
}

// Get all installers
export const getProjectCostQuote = (projectId: string) => {
  return useQuery<
    {
      materialCostList: MaterialCost[];
      categoryCostList: CategoryCost[];
      totalProjectCostList: ProjectCost;
    },
    Error
  >({
    queryKey: ["project-cost-quote", projectId],
    queryFn: async () => {
      const response = await api.get(`api/Quotation/Get-Project-Cost`, {
        params: { projectId }, // Using params for cleaner query string
      });
      return response.data;
    },
  });
};

export interface LaborCost {
  laborId: string;
  description: string;
  quantity: number;
  unit: string;
  unitCost: number;
  unitNum: number;
  totalCost: number;
}

interface TotalLaborCost {
  totalCost: number;
  profit: number;
  overallLaborProjectTotal: number;
}

// Get all installers
export const getLaborCostQuote = (projectId: string) => {
  return useQuery<
    { laborCost: LaborCost[]; totalLaborCost: TotalLaborCost },
    Error
  >({
    queryKey: ["labor-cost-quote", projectId],
    queryFn: async () => {
      const response = await api.get(`api/Quotation/Get-Labor-Cost`, {
        params: { projectId }, // Using params for cleaner query string
      });
      return response.data;
    },
  });
};

export interface ICategoryCost {
  category: string;
  totalCategory: number;
  totalExpense: number;
  materialCostDtos: IMaterialCost[];
}

export interface IMaterialCost {
  suppId: number;
  mtlId: number;
  description: string;
  quantity: number;
  unit: string;
  category: string;
  unitCost: number;
  totalUnitCost: number;
  buildUpCost: number;
  createdAt: string;
  updatedAt: string;
}

// Get all installers
export const getProjectAndMaterialsCostQuote = (projectId: string) => {
  return useQuery<
    {
      materialAndCategoryCostList: ICategoryCost[];
      totalProjectCostList: ProjectCost;
    },
    Error
  >({
    queryKey: ["project-cost-and-material-quote", projectId],
    queryFn: async () => {
      const response = await api.get(
        `api/Quotation/Get-Project-Material-Cost`,
        {
          params: { projectId }, // Using params for cleaner query string
        }
      );
      return response.data;
    },
  });
};

// Update Material Quantity
export const updateProjectMaterialSupply = () => {
  return useMutation({
    mutationFn: async (data: {
      suppId: number;
      mtlId: number;
      quantity: number;
    }) => {
      const response = await api.put(
        `api/Quotation/Update-Material-Supply-Quantity`,
        data,
        {
          headers: {
            "Content-Type": "application/json", // Ensure it matches the server requirements
          },
        }
      );
      return response.data;
    },
  });
};

// Delete Material
export const useDeleteProjectMaterialSupply = () => {
  return useMutation({
    mutationFn: async ({
      suppId,
      mtlId,
    }: {
      suppId: number;
      mtlId: number;
    }) => {
      try {
        const response = await api.delete(
          "api/Quotation/Delete-Material-Supply",
          {
            params: { suppId, mtlId },
          }
        );
        return response.data;
      } catch (error) {
        toast.error("Failed to delete item.");
        throw error; // Ensure to propagate the error for proper handling
      }
    },
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
};

interface IAddMaterialSupply {
  mtlQuantity: number;
  mtlCode: string;
  projId: string;
}

export const useAddProjectMaterialSupply = () => {
  return useMutation({
    mutationFn: async (formData: IAddMaterialSupply) => {
      const response = await api.post(
        "api/Quotation/Add-Material-Supply",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });
};
