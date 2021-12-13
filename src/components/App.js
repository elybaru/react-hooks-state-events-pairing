import video from "../data/video.js";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video} />
      <Likes video={video} />
      <Comments video={video} />
    </div>
  );
}

export default App;


// https://www.youtube.com/embed/dQw4w9WgXcQ