import React from 'react';

import RepoCard from './RepoCard';
import '../styles/RepoList.css';

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </div>
  );
};

export default RepoList;
