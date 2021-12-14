# Hackrack-website CONTRIBUTING.md

## ⭐ First time contributing?

Refer to the following articles on the basics of Git and Github and can also contact the Project Mentors, in case you are stuck:

* [Watch this video to get started, if you have no clue about open source](https://youtu.be/SL5KKdmvJ1U)
* [Getting started with Git and GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github)
* [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
* [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
* [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)

<img src="https://camo.githubusercontent.com/71995d6b0e620a9ef1ded00a04498241c69dd1bf/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f736b697463682f6973737565732d32303132303931332d3136323533392e6a7067"></img>


# Contributing Guidelines👩‍💻👨‍💻

This documentation contains a set of guidelines to help you during the contribution process.
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## How to contribute to the repo:

### 0. Find an issue:

- Take a look at the Existing [Issues](https://github.com/HackrackClub/MyShow-Clone/issues) or create your own Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- **Note:** Every change in this project should/must have an associated issue.


### 1. Fork the repository:

![image](https://user-images.githubusercontent.com/78522666/145987110-edbea2f6-e11e-466b-8a83-748180ef4dd2.png)


 Click the **Fork** button at the top right corner of the screen.

- **1.** Clone the repository :

![clone](https://user-images.githubusercontent.com/86161191/135710028-2fa5822e-d190-412a-a860-19cd8c03aa6f.png)

- **2.** **ON YOUR FORKED REPOSITORY**, copy the link by pressing the clipboard and on your local git, copy the link in. If you are unable, use the link below and replace `username` with your GithHub username :

       git clone https://github.com/username/Hackrack.git

- **3.** Navigate to your project directory.

```bash
cd Hackrack
```


### 2. Branch:

- **4.** Create a new branch. Use its name to identify the issue your addressing.

```bash
git checkout -b branch_name
```
**NOTE:** Replace the `branch_name` with the name of the issue you are addressing.

### 3. Work on your assigned issue:

- **5.** Add all the files/folders needed.

To add all new files to branch Branch_Name:

```bash  
git add .  
```
To add only a few files to Branch_Name:

```bash
git add <some files>
```
**NOTE:** Replace `<some files>` with the files you want to add to the branch. You can check the untracked/modified files by running the following command:

```bash
git status
```

### 4. Commit and push your changes: 

- **6.** Give a descriptive message for the convenience of reviewer by:

```bash
git commit -m "message"  
``` 
**NOTE:** Replace `message` with the message you want to give to the reviewer.

- **7.** Push your changes to the remote repository.
To push your changes to the remote forked repository use the command

```bash
git push -u origin <branch_name>
```
**NOTE:** Replace `<branch_name>` with the name of the branch you are pushing.


### 5. Make a pull request:

- Go back to your remote Forked version of the repo and click : 

![image of pr](https://user-images.githubusercontent.com/70807684/126149695-9e302772-f52a-46a0-a8d4-e08a3e61d006.png)

- After, add a description to your PR and then click `Create Pull Request` :

![image of pr](https://user-images.githubusercontent.com/70807684/126149967-1c1f4c7e-432d-41d0-9ef6-0f75281743f4.png)

- Create a Pull Request which will be reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this enhancement/implementation is all about.
- Add your assigned issue number in the PR by writing in description `#issue_number`. Try to use inclusive words as well. Eg: `Fixes #15`.

### 6. Party time!🎉
Time to celebrate you have successfully submitted a PR. Thank you for contributing.

## Things to remember:
 * Don't make unnecessary/spammy PR otherwise it will be reported as SPAM.
 * Give some time to maintainers to review your PR, have some patience.
 * Please don't make a PR for a feature that is already implemented.
 * If you're not assigned to an issue, then please don't randomnly create PRs. If you want to work on an issue, please comment on an issue and wait for it to be assigned to you. If you don't find that issue, please create one.
 * Please give a descriptive message for the convenience of reviewer. Wait for the reviewer to comment on your PR.
 * Please make sure you are following the guidelines before making a PR. No spammy PRs will be accepted.

<hr>
<h1 align="center">Made With 💖 By Developers around the GLOBE!</h1>
