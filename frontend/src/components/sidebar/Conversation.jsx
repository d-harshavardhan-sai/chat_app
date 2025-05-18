import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer
					${isSelected ? "bg-sky-600 shadow-md" : "hover:bg-sky-700/50"}
				`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full ring ring-offset-base-100 ring-offset-2'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col justify-center flex-1'>
					<div className='flex items-center justify-between'>
						<p className='text-white font-semibold truncate'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
					{isOnline && <p className='text-xs text-green-400'>Online</p>}
				</div>
			</div>

			{!lastIdx && <div className='divider my-1 h-[1px] bg-base-300' />}
		</>
	);
};

export default Conversation;

