const MessageSkeleton = () => {
  return (
    <div
      className="flex flex-col gap-4 py-2 px-3 animate-pulse"
      aria-busy="true"
      aria-label="Loading message"
    >
      {/* Left-aligned skeleton (incoming message) */}
      <div className="flex gap-3 items-center max-w-xs">
        <div className="bg-gray-600 rounded-full w-10 h-10 shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="bg-gray-600 rounded-md h-4 w-full max-w-[160px]" />
          <div className="bg-gray-600 rounded-md h-4 w-full max-w-[140px]" />
        </div>
      </div>

      {/* Right-aligned skeleton (outgoing message) */}
      <div className="flex gap-3 items-center justify-end max-w-xs ml-auto">
        <div className="flex flex-col gap-2 flex-1 text-right">
          <div className="bg-gray-600 rounded-md h-4 w-full max-w-[140px] ml-auto" />
        </div>
        <div className="bg-gray-600 rounded-full w-10 h-10 shrink-0" />
      </div>
    </div>
  );
};

export default MessageSkeleton;
