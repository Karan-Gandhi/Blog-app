import { fetchUsingGET } from "../api/APIControler";
import APIRoutes from "../api/APIRoutes";
import { GetAllBlogsResponse } from "../api/Responses";

export const getAllBlogs = async () => {
	return (await fetchUsingGET<GetAllBlogsResponse>(APIRoutes.GET_BLOGS)).data.blogs;
};
