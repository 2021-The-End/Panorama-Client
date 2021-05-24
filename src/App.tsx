import React from "react";

interface Props {}

const App = (props: Props) => {
  return (
    <iframe
      width="1278"
      height="719"
      src="https://www.youtube.com/embed/7UJELUi1MVI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default App;
