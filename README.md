

## Table of Contents
1. [Directory Structure](#layer-based-directory-structure)
2. [Directory Structure Breakdown](#repo-structure-breakdown)
3. [Setup Instructions](#setup-instructions)
4. [Design Decisions](#design-decisions)
5. [Skipped Features](#what-was-skipped-due-to-time-constraint-or-to-avoid-over-engineeringaka-speculative-generality-anti-pattern-for-this-small-task)
6. [Test Coverage Summary](#test-coverage-summary)


## Layer-based Directory Structure
``` plaintext
react_github_explorer/
├── src/
│   ├── api/                
│   │   └── github.js
│   ├── components/         
│   │   ├── RepoList.jsx
│   │   ├── RepoCard.jsx
│   │   └── RepoDetails.jsx
│   ├── pages/              
│   │   └── Home.jsx     
│   ├── styles/             
│   │   ├── Home.css
│   │   ├── RepoList.css
│   │   ├── RepoCard.css
│   │   └── RepoDetails.css
│   ├── App.jsx  
│   ├── main.jsx                     
│   └── __tests__/          
│       └── Home.test.jsx             
├── index.html
├── README.md
└── package.json
```
I chose layer-based over feature-based directory structure because this app doesn’t have isolated features. it’s centered around one core feature: listing and showing GitHub repos. In such cases, layers offer better clarity without the overhead of feature folders. also, layer-based strucutre Maintain clarity, Encourages reuse, Prepares the app for growt.

## Repo Structure Breakdown

| Folder/File   | Responsibility                                  |
| ------------- | ----------------------------------------------- |
| `/src`        | Root source folder containing all app logic        |
| `/api`        | Handles external API communication using Axios like github API call       |
| `/components` | Reusable UI components like RepoCard and RepoDetails     |
| `/components/RepoList.jsx` | houses list of repoCard components     |
| `/components/RepoCard.jsx` | Shows basic repo info and toggles expand/collapse     |
| `/components/RepoDetails.jsx` | Displays the expanded information section for a repository     |
| `/pages`      | Page containers like Home                       |
| `/pages/Home.jsx`      | Contains main app logic. Fetches data, manages list of `RepoCard`.          |
| `/styles`     | contains style files for components                  |
| `/App.jsx`  | root level react compoenent        |
| `/index.js`  | Bootstraps the app(vdom) to the DOM        |
| `/setupTests.js`  | Sets up React Testing Library or Jest config      |
| `/__tests__`  | Houses unit and integration tests        |

### Setup Instructions
run any command from root directory.
## One time setup to install dependencies
```bash
npm install
```
## To run the app
```bash
npm run dev
```
## To run test cases
``` bash
npm run test
```

### Design Decisions
* **Modular(layer based) directory structure**:

Encourages separation of concerns, reusability, easy to comprehend and scalability.
* **React with JSX + CSS**: 

Lightweight stack without over-engineering.
* **Axios**: 

Clean syntax. Built-in JSON parsing. Better error handling. Supports interceptors, useful for retries (can be added later)
* **Expand/Collapse per repo**: 

UX is interactive and lets user view multiple details simultaneously.
* **from where to do github api call? RepoCard.jsx or Home.jsx**

as per separation of concers, `RepoCard.jsx` seems right place as `Home.jsx` has nothing to do with that data so no need to expose `Home.jsx` to the data. on a second thought, by putting api call in `RepoCard.jsx`, it becomes inteliigent and tightly coupled to business logic which defeats the reusability as `RepoCard.jsx` not a dumb component anymore and now can't be reused somewhere else with different props data. also, `Home.jsx` is at root level acting as a container. so, it should manage child components and act asa a boss. furhturemore, by passing data as a props to child, we are following `depencedency injection` design which is test-friendly. in short, `smart container & dumb component principle followed`.


### What Was Skipped due to time constraint or to avoid over-engineering(aka speculative generality anti-pattern) for this small task.
* **API retry + exponential backoff logic**: Can be implemented using `axios-retry` or custom logic.
* **Loading skeletons**: Left out due to time constraints, would improve UX.
* **Error boundaries with fallback UI**: Not critical at this scale but important for robustness.
* **Pagination**: Can be implemented via GitHub API `per_page` and `page` params.
* **Paginated UI**: repo list can have hundreds of repo at a time. can make UI paginated.
* **configurable app**: can implement configurable org url. besides godaddy, by providing any github org url it can work fine. it's flexible.

## Test Coverage Summary
**Tested:**
* Ensures the main heading **"GoDaddy Github Repositories"** is rendered on the page.
* Shows “loading” while fetching.
* shows error message if API fails
* Confirms that all `RepoCard` components are rendered based on the number of `repos` passed.
* Renders basic repo info: name and description.
* Simulates a click on the repo title to test expand/collapse behavior.
* Confirms that `RepoDetails` content (like Forks, Watchers) appears after clicking.

** Testcases Omitted due to time constraints**
* Input validation or retry mechanism for API errors.
* Behavior with malformed or missing props.