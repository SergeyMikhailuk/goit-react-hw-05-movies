const App = () => {
  return (
    <>
      <h1>Movies</h1>
    </>
  );
};

export default App;

export type ImageResponse = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
};
