import {createBrowserRouter} from "react-router-dom";
import Crossword from "./components/Crossword/Crossword";
import Header from "./components/Header/Header";
import GuidanceTest from "./components/GuidanceTest/GuidanceTest";
import Test from "./components/Test/Test";

const router = createBrowserRouter([
	{
		path:"/",
		element:<Header/>,
		errorElement: <h1>Page not found</h1>
	},
	{
		path:"/header",
		element:<Header/>,
		errorElement:<h1>Page not found</h1>
	},
	{
		path:"/crossword",
		element:<Crossword/>,
		errorElement:<h1>Page not found</h1>
	},
	{
		path:"/guidanceTest",
		element:<GuidanceTest/>,
		errorElement:<h1>Page not found</h1>
	},
	{
		path:"/test",
		element:<Test/>,
		errorElement:<h1>Page not found</h1>
	},
])

export default router;