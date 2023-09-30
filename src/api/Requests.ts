import { RefreshToken } from "../types/Tokens";
import { UserID } from "../types/User";

export interface RenewAccessTokenRequest {
	refreshToken: RefreshToken;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface CreateUserRequest {
	name: string;
	email: string;
	password: string;
}

export interface LogoutRequest {
	refreshToken: RefreshToken;
}

export interface CreateBlogRequest {
	title: string;
	content: string;
	tags: string[];
}
