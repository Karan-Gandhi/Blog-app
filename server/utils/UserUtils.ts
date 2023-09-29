import { addData, getSnapshotWhere, readData, readDataNoCache } from "../services/Firestore";
import FirestoreCollections from "../types/FirestoreCollections";
import User, { UserID } from "../types/User";
import { BlogID } from "../types/Blog";

export const getUserByID = async (userID: UserID) => {
	const user = await readData<User>(FirestoreCollections.USERS, userID);
	if (!user.password || !user.blogs) return await readDataNoCache<User>(FirestoreCollections.USERS, userID);
	return user;
};

export const updateUserData = async (userID: UserID, userData: User) =>
	await addData(FirestoreCollections.USERS, userID, userData);

export const addBlogToUser = async (userID: UserID, BlogID: BlogID) => {
	const user = await getUserByID(userID);
	return await updateUserData(userID, {
		...user,
		blogs: [...(user.blogs || []), BlogID],
	});
};

export const getUserBlogs = async (userID: UserID) => (await readData<User>(FirestoreCollections.USERS, userID)).blogs;

export const searchUserByEmail = async (email: string, searchSize: number, ignoreEmail: string) => {
	const users = await getSnapshotWhere(FirestoreCollections.USERS, "email", ">=", email)
		.where("email", "<=", email + "\uf8ff")
		.get();

	const searchResults: User[] = [];
	users.forEach(doc => {
		const user = doc.data() as User;
		delete user.password;
		searchResults.push(user);
	});

	return searchResults.filter(({ email }) => email !== ignoreEmail).filter((_, idx) => idx <= searchSize - 1);
};

export const deleteUserBlog = async (userID: UserID, blogID: BlogID) => {
	const user = await getUserByID(userID);
	if (user.blogs.findIndex(blog => blog === blogID) === -1) return;
	user.blogs.splice(
		user.blogs.findIndex(blog => blog === blogID),
		1
	);
	return await updateUserData(userID, user);
};
