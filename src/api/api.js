const discover = () => {
  return `https://api.github.com/repos/angular/angular-cli/issues`;
};

const getDetail = (issueNumber) => {
  return `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}`;
};

export { discover, getDetail };
