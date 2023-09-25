import './pld.css';
import { BiUserCircle, BiComment } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { useState } from 'react';


export function PLD() 
{
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

   function handleLikes() {
        if (!like) {
            setLike(true);
            setCount(count + 1)
        } else {
            setLike(false);
            setCount(count - 1)
        }
    }

    const imageUrl = 'https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

    return (
        <>
            <div className="main-container">
                <h2 className='text-info'>Post Like App</h2>
                <h4>Likes Count : {count}</h4>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        <BiUserCircle /> UserName
                    </div>

                    <img src={imageUrl} alt="post-img" height={'300px'} width='100%' onDoubleClick={handleLikes} />

                    <div className="card-footer">
                        {like ? (<AiFillHeart size={30} className='text-danger' onClick={handleLikes} style={{ cursor: 'pointer' }} />) : (<AiOutlineHeart size={30} onClick={handleLikes} style={{ cursor: 'pointer' }} />)}
                        &nbsp;
                        <BiComment size={30} style={{ cursor: 'pointer' }} />
                        &nbsp;
                        <AiOutlineShareAlt size={30} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </>
    )
}