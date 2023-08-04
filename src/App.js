import "./App.css";

const BookMyShow = [
  {
    Imagelink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICA3Ny4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360172-ncsbpawyxm-portrait.jpg",
    Moviename: "Bro",
    Bio: "Comedy/Drama/Fantasy",
  },
  {
    Imagelink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA2N0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363274-yjxvbzhdbc-portrait.jpg",
    Moviename: "Baby",
    Bio: "Romantic/Drama",
  },
  {
    Imagelink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICAyOS41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-uxewjtfjhg-portrait.jpg",
    Moviename: "Barbie",
    Bio: "Adventure/Comedy/Fantasy",
  },
  {
    Imagelink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDMuNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-qsgrbbclnt-portrait.jpg",
    Moviename: "Meg 2:The Trench",
    Bio: "Adventure/Action/Sci-Fi",
  },
  {
    Imagelink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAxMC4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362083-hkrmalvuyp-portrait.jpg",
    Moviename: "Hidimbha",
    Bio: "Crime/Thriller",
  },
];

const Sunglasses = [
  {
    Imagelink:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/w/j/h/free-size-latest-2023-collection-styloze-original-imagm72ss7k2tnpz.jpeg?q=70",
    Name: "Riding Glasses, Night",
    Price: "Rs 179/- Only",
  },
  {
    Imagelink:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/a/3/q/free-size-rdy-25-goggles-roadway-original-imaggdwj959sczaa.jpeg?q=70",
    Name: "Retro Square Sunglasses ",
    Price: "Rs 219/- Only",
  },
  {
    Imagelink:
      "https://rukminim2.flixcart.com/image/612/612/kn7sdjk0/sunglass/k/i/y/51-vc-s13122-vincent-chase-original-imagfydthftz9uea.jpeg?q=70",
    Name: "Round Sunglasses",
    Price: "Rs 883/- Omly",
  },
  {
    Imagelink:
      "https://rukminim2.flixcart.com/image/612/612/l432ikw0/sunglass/4/5/x/-original-imagf2gh47uek7kk.jpeg?q=70",
    Name: "Rectangular Sunglass",
    Price: "Rs 5081/- Only",
  },
  {
    Imagelink:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/z/z/free-size-neesh112-jiebo-original-imaggx9vvmbrz6b3.jpeg?q=70",
    Name: "Rectangular Sunglasses",
    Price: "Rs 199/- Only",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Naa Cimema.com</h1>
      {BookMyShow.map((cinema, i) => {
        return (
          <div className="show" key={i} style={{ display: "inline-block" }}>
            <img src={cinema.Imagelink} alt="" />
            <h3>{cinema.Moviename}</h3>
            <p>{cinema.Bio}</p>
          </div>
        );
      })}

      <h1>Sunglasses.in</h1>
      {Sunglasses.map((glasses, i) => {
        return (
          <div className="minion" key={i} style={{ display: "inline-block" }}>
            <img src={glasses.Imagelink} alt="" width={300} />
            <h3>{glasses.Name}</h3>
            <p>{glasses.Price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
