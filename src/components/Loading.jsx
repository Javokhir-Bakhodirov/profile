import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Loading.css";
const Loading = () => {
	return (
		<div className="loading-box">
			<AiOutlineLoading3Quarters className="loading" />
		</div>
	);
};

export default Loading;
