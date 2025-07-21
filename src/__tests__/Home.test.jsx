import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Home from '../pages/Home';
import * as githubApi from '../api/github';


const mockRepos = [
  {
    id: 1,
    name: 'repo-one',
    description: 'First repo',
    language: 'JavaScript',
    forks_count: 50,
    open_issues_count: 10,
    watchers_count: 10,
    html_url: 'https://www.google.com',
  },
];

vi.mock('../api/github', () => ({
  fetchAllRepos: vi.fn(() => Promise.resolve(mockRepos)),
}));

test('renders the main heading and fetched repos', async () => {
  render(<Home />);

  // assert heading
  const heading = await screen.findByText(/GoDaddy Github Repositories/i);
  expect(heading).toBeInTheDocument();

  // Check if mocked repo is rendered
  const repoName = await screen.findByText(/repo-one/i);
  expect(repoName).toBeInTheDocument();
});

test('shows loading initially', () => {
  render(<Home />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('shows error message if API fails', async () => {
  // force fetchAllRepos to throw error
  githubApi.fetchAllRepos.mockImplementationOnce(() =>
    Promise.reject({ status: 500, message: 'Internal Server Error' })
  );

  render(<Home />);

  const errorMsg = await screen.findByText(/Failed to load respose 500 Internal Server Error/i);
  expect(errorMsg).toBeInTheDocument();
});
