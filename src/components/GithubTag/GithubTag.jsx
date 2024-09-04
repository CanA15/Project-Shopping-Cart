import style from "./GithubTag.module.css";

function GithubTag() {
  return (
    <div className={style.githubProfile}>
      <a
        target="_blank"
        href="https://github.com/CanA15/Project-Shopping-Cart"
        rel="noopener noreferrer"
      >
        <img src="../src/icons/github-mark.svg" alt="My github profile"></img>
      </a>
    </div>
  );
}

export default GithubTag;
