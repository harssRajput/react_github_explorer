import RepoList from '../components/RepoList';

const mockRepos = [
  {
    id: 1,
    name: "repo-one",
    description: "desc-one",
    html_url: "https://www.google.com",
    language: "JS",
    forks_count: 5,
    open_issues_count: 2,
    watchers_count: 10,
  },
  {
    id: 2,
    name: "repo-two",
    description: "desc-two",
    html_url: "https://www.yahoo.com",
    language: "TS",
    forks_count: 3,
    open_issues_count: 1,
    watchers_count: 7,
  },
];

const Home = () => {

  return (
    <div className="home-container">
      <h1>GoDaddy Github Repositories</h1>
      <RepoList
        repos={mockRepos}
      />
    </div>
  );
};

export default Home;
