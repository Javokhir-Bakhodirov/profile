import "./App.css";
import RoutController from "./routes/RoutController";
import { ToastContainer, toast } from "react-toastify";

function App() {
	return (
		<>
			<RoutController />
			<ToastContainer />
		</>
	);
}

export default App;
