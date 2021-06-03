import React from "react";
import { Link } from "react-router-dom";

export default function Lists({ data }) {
  return (
    <div className="issue-list-page">
      <ul>
        {data &&
          data.map((issue) => (
            <li key={issue.id}>
              <Link to={`/${issue.number}`}>
                <h2>
                  #{issue.number} {issue.title}
                </h2>
                <div>
                  작성자: {issue.user.login}, 작성일: {issue.created_at}
                </div>
                <span>코멘트: {issue.comments}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
