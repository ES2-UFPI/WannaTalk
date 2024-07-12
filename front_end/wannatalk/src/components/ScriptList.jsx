import React from 'react';

const ScriptList = ({ scripts }) => {
  if (!scripts || !Array.isArray(scripts) || scripts.length === 0) {
    return <p>Nenhum script encontrado.</p>;
  }

  return (
    <div>
      <h2>Listagem de Scripts</h2>
      <ul>
        {scripts.map(script => (
          <li key={script.id}>
            <strong>{script.title}</strong>
            <p>Summary: {script.summary}</p>
            <p>Difficulty: {script.difficultyId}</p>
            <p>Gender: {script.genderId}</p>
            <p>Notes: {script.notes}</p>
            <p>References: {script.refs}</p>
            <p>Language: {script.languageId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;