import { BlogID } from "./Blog";

export type UserID = string;

export default interface User {
	readonly id: UserID;
	name: string;
	email: string;
	password?: string;
	blogs: BlogID[];
}
