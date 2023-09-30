import * as express from "express";
import User from "../types/User";
import {
	createBlog,
	deleteBlog,
	getAllBlogs,
	getBlogByID,
	getBlogContent,
	updateBlogContent,
} from "../utils/BlogUtils";

const router = express.Router();

router.get("/", async (req, res) => {
	// returns all the blogs that the user belongs to
	res.json({ blogs: await getAllBlogs() });
});

router.get("/userBlogs", async (req, res) => {
	const user = JSON.parse(req.user as string) as User;
	res.json({ blogs: user.blogs });
});

router.post("/createBlog", async (req, res) => {
	// creates a blog with some information
	const { title, content, tags } = req.body;
	const user = JSON.parse(req.user as string) as User; // this user will be the admin
	res.json(await createBlog(title, Date.now(), content, tags, user.id));
});

router.get("/:id", async (req, res) => {
	try {
		const blog = await getBlogByID(req.params.id);
		res.json(blog);
	} catch {
		return res.sendStatus(404);
	}
});

router.get("/content/:id", async (req, res) => {
	try {
		const blog = await getBlogByID(req.params.id);
		const blogContent = await getBlogContent(blog.blogContentID);
		res.json(blogContent);
	} catch {
		return res.sendStatus(404);
	}
});

router.put("/editBlog/:id", async (req, res) => {
	try {
		const user = JSON.parse(req.user as string) as User;
		const blog = await getBlogByID(req.params.id);
		const blogContent = await getBlogContent(blog.blogContentID);
		if (user.id !== blog.author) return res.sendStatus(403); // authenticate if you are allowed to edit the blog

		await updateBlogContent(blogContent.id, { ...blogContent, content: req.body.content });

		res.sendStatus(204);
	} catch {
		res.sendStatus(404);
	}
});

router.delete("/deleteBlog/:id", async (req, res) => {
	try {
		const user = JSON.parse(req.user as string) as User;
		const blog = await getBlogByID(req.params.id);
		if (user.id !== blog.author) return res.sendStatus(403); // authenticate if you are allowed to edit the blog

		await deleteBlog(req.params.id);
		res.sendStatus(204);
	} catch {
		res.sendStatus(404);
	}
});

export default router;
