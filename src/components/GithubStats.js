import React from 'react';

const GithubStats = () => {
  return (
    <div className="my-4">
      <div className="main-heading">
        <h2>Github Stats</h2>
      </div>
      <div className="my-3">
        <a
          className="img-fluid"
          href="https://github.com/jallan07"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=jallan07&show_icons=true&title_color=ffffff&icon_color=00ba9d&text_color=ffffff&bg_color=001837&hide_border=true"
            alt="Github Stats"
            width="400"
          ></img>
        </a>
        <a href="https://github.com/jallan07" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jallan07&langs_count=3&card_width=495&title_color=ffffff&icon_color=00ba9d&text_color=ffffff&bg_color=001837&hide_border=true"
            alt="Top Languages"
            width="400"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default GithubStats;
