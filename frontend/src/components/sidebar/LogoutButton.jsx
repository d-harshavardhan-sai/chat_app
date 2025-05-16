import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto px-4 py-3'>
			{!loading ? (
				<div
					className='flex items-center gap-2 text-white cursor-pointer hover:text-red-400 transition duration-200 group'
					onClick={logout}
					title='Logout'
				>
					<BiLogOut className='w-6 h-6' />
					<span className='text-sm hidden sm:inline group-hover:underline'>Logout</span>
				</div>
			) : (
				<div className='flex justify-center items-center'>
					<span className='loading loading-spinner text-white'></span>
				</div>
			)}
		</div>
	);
};

export default LogoutButton;
