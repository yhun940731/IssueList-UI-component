const getRepoInfo = (user: string = 'facebook', repo: string = 'react') => {
  return `https://api.github.com/repos/${user}/${repo}`
}

const discover = (pageNumber: number) => {
  return `https://api.github.com/repos/facebook/react/issues?page=${pageNumber}
  `;
};

const getDetail = (issueNumber: number) => {
  return `https://api.github.com/repos/facebook/react/issues/${issueNumber}`;
};

export { getRepoInfo, discover, getDetail };

// class Discover {
//   getRepoInfo = (user: string = 'angular', repo: string = 'angular-cli') => {
//     return `https://api.github.com/repos/${user}/${repo}`;
//   };

//   getIssueList = (pageNumber: number = 1) => {
//     return `https://api.github.com/repos/${user}/${repo}/issues?page=${pageNumber}
//     `;
//   };

//   getIssueDetail = (issueNumber: number) => {
//     return `https://api.github.com/repos/${user}/${repo}/issues/${issueNumber}`;
//   };
// }

// export default new Discover();
