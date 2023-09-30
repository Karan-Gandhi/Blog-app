import { useNavigate } from "react-router";
import Blog from "../types/Blog";
import Circle from "@material-ui/icons/FiberManualRecord";

interface FeedCardProps extends Blog {}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FeedCard: React.FC<FeedCardProps> = ({ authorName, timeToRead, datePublished, id, tags, title }) => {
	// alert(authorName);
	const navigate = useNavigate();

	return (
		<div
			className="flex flex-row bg-zinc-900 py-7 my-5 px-14 rounded-3xl w-full cursor-pointer"
			onClick={() => navigate("/blogs/" + id)}
		>
			<div>
				<div className="text text-zinc-300 font-semibold">{authorName}</div>
				<div className="text-2xl font-bold mb-2">{title}</div>
				<div className="flex flex-row items-center gap-1 text-zinc-300">
					<div>{MONTHS[new Date(datePublished).getMonth()] + " " + new Date(datePublished).getDate()}</div>
					<div className="mb-0.5">
						<Circle fontSize="small" style={{ fontSize: "0.5rem" }} />
					</div>
					<div>{timeToRead}</div>
					<div className="mb-0.5">
						<Circle fontSize="small" style={{ fontSize: "0.5rem" }} />
					</div>
					<div className="flex flex-row gap-2">
						{tags.map((tag, idx) =>
							idx < 3 ? (
								<div key={idx} className="text-semibold bg-zinc-800 px-2 rounded-full flex items-center">
									{tag}
								</div>
							) : null
						)}
					</div>
				</div>
			</div>
			<div className="">{/* blog image ? */}</div>
		</div>
	);
};

export default FeedCard;
