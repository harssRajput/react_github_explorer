const GITHUB_API_URL = 'https://api.github.com/orgs/godaddy/repos';

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

export const fetchAllRepos = async () => {
  return mockRepos;
};
