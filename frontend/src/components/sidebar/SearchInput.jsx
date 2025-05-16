import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [error, setError] = useState(false);
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;

		if (search.length < 3) {
			setError(true);
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
			setError(false);
		} else {
			setError(true);
			toast.error("No such user found!");
		}
	};

	const handleClear = () => {
		setSearch("");
		setError(false);
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2 relative'>
			<input
				type='text'
				placeholder='Search…'
				className={`input input-bordered rounded-full pr-10 transition duration-150 ${
					error ? "border-red-500" : ""
				}`}
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setError(false);
				}}
			/>
			{search && (
				<button
					type='button'
					onClick={handleClear}
					className='absolute right-14 text-gray-500 hover:text-red-500 transition'
					aria-label='Clear search'
				>
					<IoCloseSharp className='w-5 h-5' />
				</button>
			)}
			<button
				type='submit'
				className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600'
				aria-label='Search conversation'
			>
				<IoSearchSharp className='w-6 h-6' />
			</button>
		</form>
	);
};

export default SearchInput;


// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
