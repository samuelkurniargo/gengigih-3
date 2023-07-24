export default function Sidebar() {
  return (
    <div className="left-content">
      <h2>Spotify</h2>
      <div className="nav-header">
        <div className="search">
          <input type="text" placeholder="Search for music..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="nav-explore">
          <button className="btn-explore">Explore</button>
          <button className="btn-queue">Queue</button>
        </div>
        <div className="nav-account">
          <ul className="nav-account-list">
            <li>
              <i className="fa-solid fa-user"></i>
              <p>My Account</p>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
              <p>Favourite</p>
            </li>
            <li>
              <i className="fa-solid fa-music"></i>
              <p>Overview</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper"></div>
      <div className="nav-podcast">
        <div className="nav-podcast-header">
          <h3>Recent Podcast</h3>
        </div>
        <div className="recent-podcast">
          <ul className="recent-podcast-list">
            <li>
              <img src="https://i.scdn.co/image/ab67656300005f1f957f1f1932bcfbae480eacb3" />
              <div className="desc">
                <p className="desc-title">Rintik Sendu</p>
                <p className="desc-author">Rintiksedu</p>
              </div>
            </li>
            <li>
              <img src="https://i.scdn.co/image/ab67656300005f1fd0393656bbd0013a88e58e2a" />
              <div className="desc">
                <p className="desc-title">Pengembangan Diri</p>
                <p className="desc-author">Andreas Bordes x Box2BoxID</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper"></div>
      <div className="nav-playlist">
        <div className="playlist-header">
          <h3>Your Playlist</h3>
        </div>
        <div className="playlist-content">
          <ul>
            <li>
              <img src="https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86" />
              <p>Rintik Sendu</p>
            </li>
            <li>
              <img src="https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86" />
              <p>Pengembangan diri</p>
            </li>
            <li>
              <img src="https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86" />
              <p>Pengembangan diri</p>
            </li>
            <li>
              <img src="https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86" />
              <p>Pengembangan diri</p>
            </li>
            <li>
              <img src="https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86" />
              <p>Pengembangan diri</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
