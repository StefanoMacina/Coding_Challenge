import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Default from "./components/layouts/Default"
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}) => {
	const token = useSelector((state) => state.auth.token);
	if (token === null) {
		return <Navigate to="/login" />
	} 
	return children
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Default />}>
					<Route path="login" element={<Login />} />
					<Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
				</Route>
			</Routes>
		</>
	)
}

export default App