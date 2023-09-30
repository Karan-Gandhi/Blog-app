import { useEffect, useState } from "react";
import Button from "../components/Button";
import FeedCard from "../components/FeedCard";
import AddIcon from "@material-ui/icons/Add";
import Blog from "../types/Blog";
import DefaultLoader from "../components/DefaultLoader";
import { getAllBlogs } from "../utils/BlogUtils";
import { useNavigate } from "react-router";

interface FeedRouteProps {}

const FeedRoute: React.FC<FeedRouteProps> = () => {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		getAllBlogs()
			.then(blogs => [setAllBlogs(blogs.sort((a, b) => b.datePublished - a.datePublished)), setLoading(false)])
			.catch(error => setLoading(false));
	}, []);

	if (isLoading) return <DefaultLoader />;

	return (
		<div>
			<div className="w-full h-screen flex flex-col items-center">
				<div className="flex flex-col items-center w-fit justify-strech">
					<div className="flex flex-row items-center justify-between w-full">
						<div className="text-3xl font-bold my-10">
							<span>My Feed</span>
						</div>

						<div className="">
							<Button
								noPadding
								noRounded
								className="p-2 flex items-center justify-center rounded-full"
								onClick={() => navigate("/createBlog")}
							>
								<AddIcon />
							</Button>
						</div>
					</div>
					<div>
						{allBlogs.map(blog => (
							<FeedCard {...blog} key={blog.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedRoute;
