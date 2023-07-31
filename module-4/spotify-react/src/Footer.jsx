export default function Footer() {
  return (
    <div className="footer">
    <div className="song-player-menu">
      <div className="left-menu">
        <div className="song-menu-image">
          <img src="https://i.scdn.co/image/ab67616d00004851dc1c6525ae41e296529bcbbb" />
        </div>
        <div className="song-menu-desc">
          <span className="song-title">
            <a
              href="spotify.com/album/1PKL24mnakuCYCZkHgKgwJ"
              style={{fontSize :'14px'}}
            >
              Won t Do Nothing
            </a>
          </span>
          <span className="song-artist">
            <a
              href="spotify.com/artist/536BYVgOnRky0xjsPT96zl"
              style={{fontSize: '11px'}}
            >
              Two Door Cinema Club
            </a>
          </span>
        </div>
        <button className="like-icon">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="minimize-icon">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" fillRule="evenodd">
              <path
                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                fillRule="nonzero"
              ></path>
              <path d="M10 8h4v3h-4z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="main-menu">
        <div className="player-control-btn">
          <div className="left-control-btn">
            <button className="btn-shuffle">
              <i className="fa-solid fa-shuffle"></i>
            </button>
            <button className="btn-prev">
              <i className="fa-solid fa-backward-step"></i>
            </button>
          </div>
          <button className="btn-play">
            <i className="fa-solid fa-play"></i>
          </button>
          <div className="right-control-btn">
            <button className="btn-next">
              <i className="fa-solid fa-forward-step"></i>
            </button>
            <button className="btn-repeat">
              <i className="fa-solid fa-forward-step"></i>
            </button>
          </div>
        </div>
        <div className="playback-bar"></div>
      </div>
      <div className="right-menu">
        <button className="btn-playing">
          <i className="fa-solid fa-music"></i>
        </button>
        <button className="btn-lyrics">
          <i className="fa-solid fa-microphone"></i>
        </button>
        <button className="btn-track-queue">
          <i className="fa-solid fa-layer-group"></i>
        </button>
        <button className="btn-device">
          <i className="fa-solid fa-computer"></i>
        </button>
        <div className="volume">
          <button className="btn-volume">
            <i className="fa-solid fa-volume-low"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
