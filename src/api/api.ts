const discover = (pageNumber: number) => {
  return `https://api.github.com/repos/angular/angular-cli/issues?page=${pageNumber}
  `;
};

const getDetail = (issueNumber: number) => {
  return `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}`;
};

export { discover, getDetail };
