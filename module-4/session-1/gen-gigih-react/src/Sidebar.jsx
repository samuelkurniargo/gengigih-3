export default function Sidebar() {
  return (
    <div className="left">
      <div className="nav-button">
        <ul>
          <li>
            <a href="http://spotify.com">
              <i className="fa-solid fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="http://open.spotify.com/search">
              <i className="fa-solid fa-search"></i>
              <span>Search</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-library">
        <div>
          <div className="header-nav">
            <div className="header-nav-wrapper">
              <div className="library-icon">
                <div>
                  <i className="fa-solid fa-book"></i>
                  <span>Your Library</span>
                </div>
              </div>
              <button
                className="btn-create-playlist"
                aria-label="Create playlist or folder"
                data-encore-id="buttonTertiary"
              >
                <span aria-hidden="true" className="iconWrapper">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 haNxPq"
                  >
                    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                  </svg>
                </span>
              </button>
              <button className="btn-enlarge-playlist">
                <span aria-hidden="true" className="iconWrapper">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 leya-dW"
                  >
                    <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="nav-btn-list">
            <button className="btn rounded">Playlist</button>
            <button className="btn rounded">Artist</button>
            <button className="btn rounded">Podcast</button>
          </div>
          <div className="playlist-wrapper">
            <div className="search-container">
              <div className="search-icon">
                <button className="btn-search">
                  <i className="fa-solid fa-search"></i>
                </button>
              </div>
              <div className="recent-icon">
                <button className="btn-recent">
                  <span>Recents</span>
                  <i className="fa-solid fa-sort-down"></i>
                </button>
              </div>
            </div>
            <div>
              <ul className="list-playlist">
                <li>Liked Song</li>
                <li>Beat Up</li>
                <li>Chill</li>
                <li>Party</li>
                <li>Liked Song</li>
                <li>Beat Up</li>
                <li>Chill</li>
                <li>Party</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
