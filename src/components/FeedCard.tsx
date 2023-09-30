import Blog from "../types/Blog";
import Circle from "@material-ui/icons/FiberManualRecord";

interface FeedCardProps extends Blog {}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FeedCard: React.FC<FeedCardProps> = ({ author, blogContentID, datePublished, id, tags, title }) => {
	return (
		<div className="flex flex-row bg-zinc-900 py-7 my-5 px-14 rounded-3xl w-full">
			<div>
				<div className="text text-zinc-300 font-semibold">{author}</div>
				<div className="text-2xl font-bold mb-2">{title}</div>
				<div className="flex flex-row items-center gap-1 text-zinc-300">
					<div>{MONTHS[new Date(datePublished).getMonth()] + " " + new Date(datePublished).getDate()}</div>
					<div className="mb-0.5">
						<Circle fontSize="small" style={{ fontSize: "0.5rem" }} />
					</div>
					<div>10 min</div>
					<div className="mb-0.5">
						<Circle fontSize="small" style={{ fontSize: "0.5rem" }} />
					</div>
					<div className="flex flex-row gap-2">
						{tags.map((tag, idx) =>
							idx < 3 ? (
								<div className="text-semibold bg-zinc-800 px-2 rounded-full flex items-center">{tag}</div>
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
