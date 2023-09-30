import { fetchUsingGET, fetchUsingPOST } from "../api/APIControler";
import APIRoutes from "../api/APIRoutes";
import { CreateBlogRequest } from "../api/Requests";
import { CreateBlogResponse, GetAllBlogsResponse, GetBlogByIDResponse } from "../api/Responses";
import { BlogContent, BlogID } from "../types/Blog";

export const getAllBlogs = async () => (await fetchUsingGET<GetAllBlogsResponse>(APIRoutes.GET_BLOGS)).data.blogs;

export const createBlog = async (title: string, content: string, tags: string[]) =>
	await fetchUsingPOST<CreateBlogRequest, CreateBlogResponse>(APIRoutes.CREATE_BLOG, { title, content, tags });

export const getBlogData = async (id: BlogID) =>
	await fetchUsingGET<GetBlogByIDResponse>(APIRoutes.GET_BLOG_BY_ID, [id]);

export const getBlogContentData = async (id: BlogID) =>
	(await fetchUsingGET<BlogContent>(APIRoutes.GET_BLOG_CONTENT_BY_ID, [id])).data;
