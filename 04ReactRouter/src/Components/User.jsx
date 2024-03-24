import { useParams } from "react-router-dom";
function User() {
    const {userId} = useParams();
  return (
    <div className="h-[80%] w-full">User : {userId}</div>
  )
}

export default User