import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

	const bubbleBgColor = fromMe
		? "bg-gradient-to-br from-blue-600 to-indigo-500"
		: "bg-gradient-to-br from-gray-700 to-gray-600";

	const textColor = "text-white";
	const borderStyle = "shadow-md ring-1 ring-white/20";
	const shakeClass = message.shouldShake ? "animate-shake" : "";
	const bubbleClasses = `chat-bubble ${bubbleBgColor} ${textColor} ${borderStyle} ${shakeClass} px-4 py-2 transition-transform duration-300`;

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
					<img alt='Chat avatar' src={profilePic} />
				</div>
			</div>
			<div className={bubbleClasses}>{message.message}</div>
			<div className='chat-footer text-xs text-gray-200 opacity-70 mt-1'>{formattedTime}</div>
		</div>
	);
};

export default Message;
