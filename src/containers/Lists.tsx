import React from "react";
import { Link } from "react-router-dom";
import { issueList } from "constant/type";

type ListsProps = {
  issueList: issueList | null;
};

export default function Lists({ issueList }: ListsProps) {
  return (
    <div className="issue-list-page">
      <ul>
        {issueList &&
          issueList.map((issue) => (
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
