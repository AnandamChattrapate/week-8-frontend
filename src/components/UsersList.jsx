import { useState,useEffect } from "react"
const UserList = () => {
    let [users,setUsers]=useState([])

    useEffect(()=>{
        async function getUsers(){
            try{
                let res=await fetch("http://localhost:3000/user-api/users",
                {
                    method:"GET"
                })
                let users=await res.json()
                console.log("res obj ",users)
                setUsers(users.payload);
            }catch(err){
                console.log(err.message)
            }
        } ;
        getUsers()
    },[])

    return ( 
        <div>
            <h1>User list</h1>
            {users.map((user) => (
                <div key={user._id} style={{border:"1px solid gray",margin:"8px",padding:"8px"}}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Mobile: {user.mobileNumber}</p>
                    <p>DOB: {user.dateOfBirth}</p>
                </div>
                ))
      }
        </div>
     );
}
 
export default UserList;