import { ref } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";
import UserPost from "./UserPost";

export default function ProfileInfo() {
  //   const [user, setUser] = useState({});
  const { id } = useParams();
  const userRef = ref(db, "usersData/" + id);
  const [snapshot, loading, error] = useObject(userRef);

  const user = snapshot?.val();
  const posts = user?.posts && Object?.values(user?.posts);
  if (loading)
    return (
      <div className="flex-center h-screen text-5xl capitalize">loading..</div>
    );
  if (error)
    return (
      <div className="flex-center h-screen text-5xl capitalize">error</div>
    );
  if (!user)
    return (
      <div className="flex-center h-screen text-5xl capitalize">
        user not found!
      </div>
    );
  return (
    <div className="flex flex-col items-center py-8 text-center">
      {user && (
        <>
          <ProfileImage author={user} />
          <div>
            <h3 className="text-2xl font-semibold dark:text-black lg:text-[28px]">
              {user.displayName}
            </h3>
            <p className="leading-[231%] lg:text-lg">{user.email}</p>
          </div>
          <Bio info={user} />
          <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
          <div className="w-3/4">
            <h3>
              All {posts?.length} post of {user?.displayName}
            </h3>
            <div className="space-y-2">
              {posts?.map((post) => (
                <UserPost post={post} key={post?.postId} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
