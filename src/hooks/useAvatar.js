import { useProfile } from "./useProfile";

// generate profile avatars for users
export const useAvatar = (author) => {
  const { user } = useProfile();

  const isMe = author?.id === user?.id;

  const avatar = isMe ? `${user?.avatar}` : `${author?.avatar}`;

  const avatarURL = `${
    import.meta.env.VITE_SERVER_BASE_URL
  }/uploads/avatar/${avatar}`;

  return { avatarURL };
};
