import { useState } from "react";
import axios from 'axios';

export default function useLeaders(page) {

  // Initialize state as empty array. Leaders will hold an array of up to 10 people's names and their scores.
  const [leaders, setLeaders] = useState([{
    player_name: 'Data loading',
    score: 'N/A'
  }]);

  // For showing/hiding the leaderboard on start page
  const [ leadersShow, setLeadersShow ] = useState(false);

  async function getLeaders(page) {
    const appendString = page  ? `?page=${page}`: '';
    const leaders = await axios.get(`/api/leaders${appendString}`);
    setLeaders(leaders.data);
  };

  return { leaders, getLeaders, leadersShow, setLeadersShow };
};