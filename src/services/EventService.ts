import { axiosInstance } from "./axiosInstance";

export const getEvents = async (str: string) => {
    try {
      const response = await axiosInstance.get(`/event-groups/${str}`, {
        params: {
          populate: {
            events: {
              populate: "image", 
            },
          },
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

export const getEventById=async(id:number)=>{
    try {
        const response=await axiosInstance.get(`/events/${id}`,{
            params: {
                populate: "image", 
              },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


