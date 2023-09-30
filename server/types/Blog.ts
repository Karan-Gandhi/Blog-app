import { UserID } from "./User";

export type BlogID = string;
export type BlogContentID = string;

export default interface Blog {
	id: BlogID;
	title: string;
	blogContentID: BlogContentID;
	author: UserID;
	datePublished: number;
	tags: string[];
	authorName: string;
	timeToRead: string;
}

export interface BlogContent {
	id: BlogContentID;
	blogID: BlogID;
	content: string;
}
