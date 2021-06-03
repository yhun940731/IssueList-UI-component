import { useEffect } from "react";

export default function IssueDetail({ issue }) {
  useEffect(() => {}, [issue]);
  //TODO: issue.body string -> md
  return !issue ? (
    <div>waiting...</div>
  ) : (
    <article>
      <header>
        <h2>
          #{issue.number} {issue.title}
        </h2>
        <div>
          <img src={issue.user.avatar_url} alt="작성자 프로필 사진" />
          작성자: {issue.user.login}, 작성일: {issue.created_at}
        </div>
        <span>코멘트: {issue.comments}</span>
      </header>
      <main>{issue.body}</main>
    </article>
  );
}
