import { render, screen } from "@testing-library/react";
import RepoList from "../components/RepoList";

const mockRepos = [
  {
    id: 1,
    name: "repo-one",
    description: "desc-one",
    html_url: "#",
    language: "JS",
    forks_count: 5,
    open_issues_count: 2,
    watchers_count: 10,
  },
  {
    id: 2,
    name: "repo-two",
    description: "desc-two",
    html_url: "#",
    language: "TS",
    forks_count: 3,
    open_issues_count: 1,
    watchers_count: 7,
  },
];

test("renders all repo names", () => {
  render(<RepoList repos={mockRepos} expandedRepos={[]} onToggleExpand={() => {}} />);

  expect(screen.getByText("repo-one")).toBeInTheDocument();
  expect(screen.getByText("repo-two")).toBeInTheDocument();
});
