import { UserID } from "./User";

export type BlogID = string;
export type BlogContentID = string;

export default interface Blog {
	title: string;
	blogContentID: BlogContentID;
	author: UserID;
	datePublished: number;
}

export interface BlogContent {
	blogID: BlogID;
	content: string;
}
