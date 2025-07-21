import RepoDetails from "./RepoDetails";

function RepoCard({ repo }) {

  return (
    <div className="repo-card" >
      <div className="repo-title">{repo.name}</div>
      <div className="repo-description">{repo.description}</div>
      <RepoDetails repo={repo} />
    </div>
  );
}

export default RepoCard;
