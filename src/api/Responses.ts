import Blog, { BlogContent } from "../types/Blog";
import { AccessToken, RefreshToken } from "../types/Tokens";
import User, { UserID } from "../types/User";

export interface TokensResponse {
	type: string;
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface GetUserByIdResponse {
	name: string;
	id: UserID;
	email: string;
}

export interface SearchUserByEmailResponse {
	results: User[];
}

export interface GetAllBlogsResponse {
	blogs: Blog[];
}

export interface CreateBlogResponse extends Blog {}

export interface GetBlogByIDResponse extends Blog {}

export interface GetBlogContentByIDResponse extends BlogContent {}
