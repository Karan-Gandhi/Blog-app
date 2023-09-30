import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DefaultLoader from "../components/DefaultLoader";
import { getBlogContentData, getBlogData } from "../utils/BlogUtils";
import { useSnackbar } from "../Snackbar";
import Blog, { BlogContent } from "../types/Blog";
import Markdown from "react-markdown";

interface ViewBlogRouteProps {}

const ViewBlogRoute: React.FC<ViewBlogRouteProps> = () => {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [blog, setBlog] = useState<Blog>();
	const [blogContent, setBlogContent] = useState<BlogContent>();

	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	useEffect(() => {
		getBlogData(id || "")
			.then(blogData => [setLoading(false), setBlog(blogData.data)])
			.catch(error => [enqueueSnackbar("Blog doesn't exist"), navigate("/feed")]);
	}, [enqueueSnackbar, id, navigate]);

	useEffect(() => {
		getBlogContentData(id || "")
			.then(blogData => [setLoading(false), setBlogContent(blogData)])
			.catch(error => console.log(error));
	}, [enqueueSnackbar, id, navigate]);

	if (isLoading) return <DefaultLoader />;

	return (
		<div className="w-full flex items-center justify-center py-20 flex-col px-20 h-screen">
			<div className="flex flex-col w-full">
				<div className="flex flex-col">
					<div className="text-5xl my-2 font-semibold">
						<span>{blog?.title}</span>
					</div>
					<div className="text-xl">
						<span> - By {blog?.authorName}</span>
					</div>
				</div>
				<hr className="w-full my-6 border-zinc-600 border-1" />
			</div>
			<div style={{ width: "100%" }} className="overflow-auto px-10">
				<Markdown>{blogContent?.content}</Markdown>
				<div className="w-full my-4">
					<div className="flex flex-row gap-3 items-center">
						Tags:
						{blog?.tags.map((tag, idx) => (
							<div key={idx} className="text-semibold bg-zinc-700 px-4 py-1 rounded-full flex items-center">
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewBlogRoute;
