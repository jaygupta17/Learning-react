import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

function Profile() {
  const {user} = useContext(UserContext) //user is children
  return (
    <div className="h-[50%] w-full bg-neutral-600">Profile : {user.Uname}</div>
  )
}

export default Profile