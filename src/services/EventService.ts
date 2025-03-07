import { axiosInstance } from "./axiosInstance";

export const getEvents = async () => {
    try {
      const response = await axiosInstance.get("/events",{
        params: {
            populate: "image", 
          },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

export const getEventGroups=async(str:string)=>{
    try {
        const response = await axiosInstance.get("/event-groups", {
          params: {
            filters: {
              name: {
                $eq: str, // Filter by name
              },
            },
            populate: "*", // Populate all relations (optional)
          },
        });
        return response.data.data[0]; // Return the first matching event group
      } catch (error) {
        console.error("Error fetching event group by name:", error);
        throw error;
      }
}