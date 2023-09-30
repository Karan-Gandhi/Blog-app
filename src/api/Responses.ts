import Blog from "../types/Blog";
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

// Change from here

// export type CreateTeamResponse = Team;

// export type GetUserDetailsResponse = User;

// export interface GetTeamMembersResponse {
// 	members: UserID[];
// }

// export type CreateMeetingResponse = Meeting;
// export type GetMeetingByIdResponse = Meeting;

// export interface GetMeetingParticipantsResponse {
// 	participants: User[];
// }

// export interface VideoEmitResponse {
// 	video: string;
// 	name: string;
// 	id: UserID;
// }
