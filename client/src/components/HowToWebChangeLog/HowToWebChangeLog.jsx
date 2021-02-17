import React, { useEffect, useState } from "react";
import externalAPIs from "../../utils/externalAPIs";

const HowToWebChangeLog = () => {
  const [commits, setCommits] = useState({ data: null });

  useEffect(() => {
    getGithubData();
  }, []);

  const getGithubData = async () => {
    const response = await externalAPIs.getGithubCommits();
    let parseCommits = response.map((commit) => {
      const newFormat = new Date(commit.commit.author.date);
      const commitDate =
        newFormat.getMonth() +
        "/" +
        newFormat.getDate() +
        "/" +
        newFormat.getFullYear().toString().substr(-2);
      return { commit: commit.commit.message, date: commitDate };
    });

    setCommits({ data: parseCommits });
    // console.log(parseCommits);

    // console.log(response);
  };

  return (
    <div >
      <table className="table-auto w-full text-sm ">
        <thead>
          <tr className="border-b-2">
            <th className="mr-2">Date</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {commits.data ? (
            commits.data.map((commit, i) => {
              return (
                <tr key={i}>
                  <td>{commit.date}</td>
                  <td className="pl-2">{commit.commit}</td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HowToWebChangeLog;
