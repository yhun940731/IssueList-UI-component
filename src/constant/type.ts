type repo = {
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  issue_url: string;
}

type issue = {
  id: number;
  number: number;
  title: string;
  user: {
    avatar_url: string;
    login: string;
  }
  created_at: string;
  comments: number;
  body: string;
}

type issueList = issue[];

type error = {
  message: string;
}

export type { repo, issue, issueList, error }