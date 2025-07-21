import { useState, useEffect } from 'react';

import RepoList from '../components/RepoList';
import {fetchAllRepos} from '../api/github';
import '../styles/Home.css';


const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const fetchAllReposResponse = await fetchAllRepos();
        if (!fetchAllReposResponse || fetchAllReposResponse.length === 0) {
          throw new Error('No repositories found');
        }
        setRepos(fetchAllReposResponse);
      } catch (err) {
        console.error("[Home] error calling api", err);
        setError(`Failed to load respose ${err.status} ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  return (
    <div className="home-container">
      <h1>GoDaddy Github Repositories</h1>
      <RepoList
        repos={repos}
      />
    </div>
  );
};

export default Home;
