import { fetchUsingGET, fetchUsingPOST } from "../api/APIControler";
import APIRoutes from "../api/APIRoutes";
import { CreateBlogRequest } from "../api/Requests";
import { CreateBlogResponse, GetAllBlogsResponse } from "../api/Responses";

export const getAllBlogs = async () => (await fetchUsingGET<GetAllBlogsResponse>(APIRoutes.GET_BLOGS)).data.blogs;

export const createBlog = async (title: string, content: string, tags: string[]) =>
	await fetchUsingPOST<CreateBlogRequest, CreateBlogResponse>(APIRoutes.CREATE_BLOG, { title, content, tags });
