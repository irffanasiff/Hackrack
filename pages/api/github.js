/* eslint-disable import/no-anonymous-default-export */
const { Octokit } = require('@octokit/rest');

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const contributors = await octokit.request(
    'GET /repos/{owner}/{repo}/contributors',
    {
      owner: 'demonicirfan',
      repo: 'hackrack',
    }
  );
  return res.status(200).json({
    data: contributors.data,
  });
};
