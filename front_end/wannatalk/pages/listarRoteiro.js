import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScriptList from '../src/components/ScriptList';

const MyPage = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    fetchScripts();
  }, []);

  const fetchScripts = () => {
    axios.get('http://localhost:3001/scripts')
      .then(response => {
        setScripts(response.data);
      })
      .catch(error => {
        console.error('Error fetching scripts:', error);
      });
  };

  return (
    <div>
      <h1>Lista de Scripts</h1>
      <ScriptList scripts={scripts} />
    </div>
  );
};

export default MyPage;