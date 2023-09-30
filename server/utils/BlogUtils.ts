import { v4 } from "uuid";
import { addData, deleteData, readData } from "../services/Firestore";
import FirestoreCollections from "../types/FirestoreCollections";
import { UserID } from "../types/User";
import { addBlogToUser, deleteUserBlog, getUserByID } from "./UserUtils";
import Blog, { BlogContent, BlogContentID, BlogID } from "../types/Blog";

const NO_SUCH_BLOG_EXISTS = new Error("No such blog exists");

export const createBlog = async (
	title: string,
	datePublished: number,
	content: string,
	tags: string[],
	userID: UserID
): Promise<Blog> => {
	const blogID = v4();

	const blogContent: BlogContent = {
		blogID,
		id: v4(),
		content,
	};

	const blog: Blog = {
		id: blogID,
		title,
		author: userID,
		authorName: (await getUserByID(userID)).name,
		datePublished,
		tags,
		blogContentID: blogContent.id,
	};

	// update database
	await addData(FirestoreCollections.BLOGS, blog.id, blog);
	await addData(FirestoreCollections.BLOGS, blog.id, blog);
	await addBlogToUser(userID, blogID);

	return blog;
};

export const getBlogByID = async (id: BlogID): Promise<Blog> => {
	const blog = await readData<Blog>(FirestoreCollections.BLOGS, id);

	if (!blog) {
		throw NO_SUCH_BLOG_EXISTS;
	}
	return blog;
};

export const getBlogContent = async (id: BlogContentID): Promise<BlogContent> => {
	const blogContent = await readData<BlogContent>(FirestoreCollections.BLOG_CONTENT, id);

	if (!blogContent) {
		throw NO_SUCH_BLOG_EXISTS;
	}

	return blogContent;
};

export const updateBlogContent = async (id: BlogContentID, blogContent: BlogContent) =>
	await addData<BlogContent>(FirestoreCollections.BLOG_CONTENT, id, blogContent);

export const deleteBlog = async (id: BlogID) => {
	const blog = await getBlogByID(id);
	await deleteUserBlog(blog.author, id);
	await deleteData(FirestoreCollections.BLOGS, id);
	await deleteData(FirestoreCollections.BLOG_CONTENT, blog.blogContentID);
};

export const getAllBlogs = async () => {
	return await readData(FirestoreCollections.BLOGS);
};
