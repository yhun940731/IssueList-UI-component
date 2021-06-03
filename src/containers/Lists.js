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
                  #{issue.id} {issue.title}
                </h2>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
