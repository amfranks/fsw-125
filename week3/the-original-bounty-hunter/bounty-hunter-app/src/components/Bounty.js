import BountyFormHandler from "./BountyFormHandler";
import { useState } from "react";

function Bounty({ firstName, lastName, living, bountyAmount, _id, editBounty, deleteBounty }) {

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className='bounty'>
            {!editToggle ?
                <>
                    <h1>Name: {firstName} {lastName}</h1>
                    <h3>Dead or Alive: {living ? 'ALIVE' : 'DEAD'}</h3>
                    <p>Bounty Price: ${bountyAmount}</p>
                    <button
                        onClick={() => deleteBounty(_id)}
                        className='delete-btn'>
                        Delete
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                        className='edit-btn'>
                        Edit
                    </button>
                </>
                :
                <>
                    <BountyFormHandler
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bountyAmount={bountyAmount}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={editBounty}/>
                    <button
                        className='close-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        close
                    </button>
                </>
            }
        </div>
    );
}

export default Bounty;