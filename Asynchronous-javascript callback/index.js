console.log("first");
getUser(1, getRepositories);
console.log("after");

function getRepositories(user) {
  getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    callback({ id: id, githubUsername: "wazeem" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    callback({ username: username, repos: ["repo1", "repo2", "repo3"] });
  }, 2000);
}
