import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Bounty from './components/Bounty';
import BountyFormHandler from './components/BountyFormHandler';

function App() {
  const [bounties, setBounties] = useState([]);

  const getBounties = () => {
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  const addBounty = (newBounty) => {
    axios.post('/bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data]);
      })
      .catch(err => console.log(err))
  };

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties();
  }, []);

  const bountyList = bounties.map(bounty =>
    <Bounty
      {...bounty}
      editBounty={editBounty}
      deleteBounty={deleteBounty}
      key={bounty._id}
    />);

  return (
    <div className="bounty-container">
      <BountyFormHandler
        submit={addBounty}
        btnText='Add Bounty' />
      {bountyList}
    </div>
  );
}

export default App;