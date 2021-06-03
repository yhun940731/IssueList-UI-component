import React from "react";

export default function Lists({ data }) {
  return (
    <div className="issue-list-page">
      <ul>
        {data &&
          data.map((issue) => (
            <li key={issue.id}>
              <a href={`/issue.id`}>
                <h2>
                  #{issue.number} {issue.title}
                </h2>
                <div>
                  작성자: {issue.user.login}, 작성일: {issue.created_at}
                </div>
                <span>코멘트: {issue.comments}</span>
                {/* 작성자, 작성일 */}
                {/* 코멘트 */}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
