import { useEffect, useState } from "react";
import User from "../types/User";
import { getUserDetails } from "../utils/UserUtils";
import DefaultLoader from "../components/DefaultLoader";
import Markdown from "react-markdown";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { createBlog } from "../utils/BlogUtils";
import { useSnackbar } from "../Snackbar";

interface CreateBlogRouteProps {}

const CreateBlogRoute: React.FC<CreateBlogRouteProps> = () => {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [userDetails, setUserDetails] = useState<User>();
	const [title, setTitle] = useState<string>("Untitled");
	const [content, setContent] = useState<string>("# This is a title");
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		getUserDetails()
			.then(data => {
				setLoading(false);
				setUserDetails(data.data as User);
			})
			.catch(error => setLoading(false));
	}, []);

	if (isLoading) return <DefaultLoader />;

	return (
		<div className="w-full h-screen flex px-40 flex-col pt-10 justify-stretch">
			<div className="flex flex-row text-3xl w-full">
				<div>{userDetails?.name} </div>
				<div className="ml-1">/</div>
				<div className="w-full">
					<input
						type="text"
						className="bg-transparent border-zinc-300 rounded-lg px-1 w-full"
						value={title}
						onChange={elt => setTitle(elt.target.value)}
					/>
				</div>
			</div>
			<hr className="my-2 border-zinc-400 border-1" />
			<div className="" style={{ height: "calc(100% - 1rem - 1px - 2.25rem - 1.875rem - 4rem)" }}>
				<div className="flex flex-row justify-stretch h-full">
					<div className="w-1/2 h-full">
						<textarea
							className="bg-zinc-800 my-2 w-full h-full px-4 py-2"
							value={content}
							onChange={elt => setContent(elt.target.value)}
						></textarea>
					</div>
					<div className="w-1/2 h-full px-4 py-2 overflow-auto">
						<div className="text-xl">
							<span>Preview</span>
						</div>
						<hr className="my-2 border-zinc-700 border-1" />
						<div className="">
							<Markdown>{content}</Markdown>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-4 my-8 justify-end">
					<Button backgroundColor="transparent" hoverBackgroudColor="#00000033" onClick={() => navigate("/feed")}>
						Cancel
					</Button>
					<Button
						onClick={() => {
							setLoading(true);
							createBlog(title, content, [])
								.then(() => {
									setLoading(false);
									navigate("/feed");
								})
								.catch(error => {
									setLoading(false);
									enqueueSnackbar(error.message);
								});
						}}
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateBlogRoute;
