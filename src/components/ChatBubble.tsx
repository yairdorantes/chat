import { Avatar } from "@mantine/core";
import { IconRobot, IconUser } from "@tabler/icons-react";

interface Props {
  text: string;
  who: boolean; // true = user, false = bot
}

const ChatBubble = ({ text, who }: Props) => {
  return (
    <div>
      <div className={`flex ${who ? "justify-end" : "justify-start "} mb-4`}>
        <div>
          <div className={`flex m-2  ${who && "justify-end"}`}>
            <Avatar>
              {who ? <IconUser stroke={2} /> : <IconRobot stroke={2} />}
            </Avatar>
          </div>
          <div
            className={` ${
              who ? "bg-blue-800" : "bg-gray-700"
            } p-4 rounded-lg shadow-lg max-w-xs`}
          >
            <p className="text-sm">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
