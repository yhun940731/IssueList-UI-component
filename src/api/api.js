const discover = (pageNumber) => {
  return `https://api.github.com/repos/angular/angular-cli/issues?page=${pageNumber}
  `;
};

const getDetail = (issueNumber) => {
  return `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}`;
};

export { discover, getDetail };
