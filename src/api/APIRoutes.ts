enum APIRoutes {
	// AUTH
	LOGIN = "/auth/loginWithEmailAndPassword",
	CREATE_USER = "/auth/createUserWithEmailAndPassword",
	RENEW_ACCESS_TOKEN = "/auth/accessToken",
	VERIFY_ACCESS_TOKEN = "/api",
	LOGOUT = "/auth/logout",

	// BLOGS
	GET_BLOGS = "/api/blogs/",
	CREATE_BLOG = "/api/teams/createBlog",
	GET_BLOG_BY_ID = "/api/blogs/", // Give the blog ID
	GET_BLOG_CONTENT_BY_ID = "/api/blogs/content/", // Give the blog ID not the blog content ID
	EDIT_BLOG = "/api/blogs/editBlog/", // Give the blog ID
	DELETE_BLOG = "/api/blogs/deleteBlog/", // Give the blog ID

	// USERS
	GET_USER_BY_ID = "/api/users/",
	SEARCH_USER_BY_EMAIL = "/api/users/searchUserByID/",
	GET_USER_INFO = "/api/users/userInfo",
}

export default APIRoutes;
