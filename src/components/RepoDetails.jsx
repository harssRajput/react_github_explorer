import '../styles/RepoDetails.css';

function RepoDetails({ repo }) {
  return (
    <div className="repo-details">
      <div className="repo-detail-item">
        <strong>Open Issues:</strong> {repo.open_issues_count}
      </div>
      <div className="repo-detail-item">
        <strong>Watchers:</strong> {repo.watchers_count}
      </div>
      <div className="repo-detail-item">
        <strong>Forks:</strong> {repo.forks_count}
      </div>
      <div className="repo-detail-item">
        <strong>Language:</strong> {repo.language}
      </div>
      <div className="repo-detail-item">
        <a href={repo.html_url} target="_blank">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default RepoDetails;
