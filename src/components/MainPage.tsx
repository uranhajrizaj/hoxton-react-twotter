import { useEffect, useState } from "react"
import { AiOutlineFileGif, AiOutlineCalendar,AiOutlineHeart } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"
import { HiOutlinePhotograph } from "react-icons/hi"
import "./mainpage.css"

type Post={
    id:number,
    title:string,
    img:string,
    userId:number,  
    likes:number,
}

type User={
    id:number,
    name:string,
    username:string,
    img:string,
    posts:Post[]
}


export function MainPage (){
    const[users,setUsers]=useState<User[]>([])

    useEffect(()=>{
        fetch("http://localhost:4000/users?_embed=posts")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    function updatePostLikes(id:number){
        const updatedUsers=users.map(user=>{
            return{
                ...user,
                posts:user.posts.map(post=>{
                    if(post.id===id){
                        return{
                            ...post,
                            likes:post.likes+1
                        }
                    }
                    return post
                })
            }
        })
        console.log(updatedUsers)
        setUsers(updatedUsers)
    }
    return (
        <div className="main">
        <ul className="post-list">       
        <div className="post-a-tweet" >
            <div className="user-image">
            <img src={users.length>0? users[2].img : ""}></img>
          </div>
          <div className="tweet-info">
            <textarea placeholder="What's happening?"></textarea>
            <div className="tweet-options">
                <div className="tweet-options-icons">
                 <HiOutlinePhotograph/>
                 <AiOutlineFileGif/>
                 <BsEmojiSmile/>
                 <AiOutlineCalendar/>
                </div>
                <button className="tweet-button">Tweet</button></div>
          </div>
          </div>
    
          {users.map(user=>( ( user.id!==users[2].id )?
                user.posts.map(post=>(
             <li >
          <div className="tweet">
             <div className="tweet-header">
                <img src={user.img}></img>
                <div className="tweet-header-info">
                    <h3>{user.name}</h3>
                    <span className='bird_post'><FaTwitter/></span>
                    <p>@{user.username}</p>
             </div>
            
             </div>
                <div className="tweet-body">
                 <h4>{post.title}</h4>
                   <img src={post.img}></img>
            </div>
           
            <div className="tweet-footer">
                <button className="like-button" onClick={
                    ()=>{
                        updatePostLikes(post.id)
                        fetch(`http://localhost:4000/posts/${post.id}`,{
                            method:"PATCH",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({
                                likes:post.likes+1
                            })
                        })

                    }
                }><AiOutlineHeart/></button>
                <p>{post.likes}likes</p>
                     </div>
          
        </div>
        </li>))
        :null))}
        </ul>
        </div>
    )
}