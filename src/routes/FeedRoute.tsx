import FeedCard from "../components/FeedCard";

interface FeedRouteProps {}

const FeedRoute: React.FC<FeedRouteProps> = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center">
			<div className="flex flex-col items-center w-fit justify-strech">
				<FeedCard
					author="Karan Gandhi"
					blogContentID="asd"
					datePublished={123}
					id="ads"
					tags={["Human", "asd", "asdda", "asdasd"]}
					title="This is a test card"
				/>
				<FeedCard
					author="Karan Gandhi"
					blogContentID="asd"
					datePublished={123}
					id="ads"
					tags={["Human"]}
					title="This is a test card"
				/>
			</div>
		</div>
	);
};

export default FeedRoute;
