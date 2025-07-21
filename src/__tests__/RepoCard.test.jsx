import { render, screen, fireEvent } from "@testing-library/react";
import RepoCard from "../components/RepoCard";

const mockRepo = {
  id: 1,
  name: "repo-one",
  description: "desc-one",
  html_url: "https://www.google.com",
  language: "JS",
  forks_count: 5,
  open_issues_count: 2,
  watchers_count: 10,
};

test("renders repo name and description", () => {
  render(<RepoCard repo={mockRepo} />);
  expect(screen.getByText("repo-one")).toBeInTheDocument();
  expect(screen.getByText("desc-one")).toBeInTheDocument();
});

test("expands details on click", () => {
  render(<RepoCard repo={mockRepo} />);

  // assserts collasped state. RepoDetails content isn't rendered initially.
  expect(screen.queryByText(/Forks:/i)).not.toBeInTheDocument();

  // Click to expand
  fireEvent.click(screen.getByText("repo-one"));

  // After clicking, details should show up
  expect(screen.getByText(/Forks:/i)).toBeInTheDocument();
  expect(screen.getByText(/Watchers:/i)).toBeInTheDocument();
});
