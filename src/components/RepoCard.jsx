import {useState} from 'react';
import RepoDetails from "./RepoDetails";

function RepoCard({ repo }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => setExpanded(prev => !prev);

  return (
    <div className={`repo-card ${expanded ? 'expanded' : ''}`} >
      <div className="repo-title" onClick={handleToggleExpand}>
      <span>{repo.name}</span>
      <span className="expand-indicator">{expanded ? '_' : '+'}</span>
      </div>
      <div className="repo-description">{repo.description}</div>
      {expanded && <RepoDetails repo={repo} />}
    </div>
  );
}

export default RepoCard;
