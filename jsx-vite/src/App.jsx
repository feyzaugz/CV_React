import Deneyimler from "./components/Deneyimler";
import SertifikaveKurs from "./components/SertifikaveKurslar";
// image bu şekilde kullanadık
import backgroundImage from "./assets/bg-image.jpg";

function App() {
  const userName = "Feyza Uğuz";
  const email = "feyzaugz3@gmail.com";
  const kisiselBilgiler = [
    { id: 1, name: "Date of Birth: 24.09.2001" },
    { id: 2, name: "Gender: Female" },
    { id: 3, name: "Marital status: Single" },
    { id: 4, name: "Driver's license: B" },
  ];

  return (
    <>
      <div
        className="app-container" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          // height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "oswald",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "35px",
            fontWeight: "bold",
            color: "#5e35b1",
          }}
        >
          {userName}
        </h1>
        <div style={{ display: "flex" }}>
          {/* flex 1 özelliği ile fotoğraf ekranın sağına kaydı */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFCDD2",
              width: 50,
              fontSize: "18px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>Email address : {email}</p>
              <p>
                Github :{" "}
                <a href="https://github.com/feyzaugz">
                  https://github.com/feyzaugz
                </a>
              </p>
              <p>
                LinkedIn :{" "}
                <a href="https://www.linkedin.com/in/feyzauguz/">
                  https://www.linkedin.com/in/feyzauguz/
                </a>
              </p>
            </div>
          </div>
          <ImgThumbNail></ImgThumbNail>
        </div>

        <hr />
        <h1 style={{ color: "#ff4081", fontSize: "30px" }}>
          Personal Information
        </h1>
        <ul style={{ fontSize: "17px" }}>
          {kisiselBilgiler.map((bilgi) => (
            <li key={bilgi.id}>{bilgi.name}</li>
          ))}
        </ul>
        <hr />
        <h1 style={{ color: "#ff4081", fontSize: "30px" }}>Work Experience</h1>
        <Deneyimler></Deneyimler>
        <hr />
        <h1 style={{ color: "#ff4081", fontSize: "30px" }}>
          Certificates and Courses
        </h1>
        <SertifikaveKurs></SertifikaveKurs>
      </div>
    </>
  );
}

function ImgThumbNail() {
  return (
    <>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQHuKxTfHDExEg/profile-displayphoto-shrink_800_800/0/1701435746028?e=1707955200&v=beta&t=wDHzr-GQJFfbkqisrI2ABnnstxhm6tTp9FfBgQMjNpw"
        alt=""
        style={{
          marginTop: "0px",
          borderRadius: "5px",
          width: 160,
          height: 160,
          paddingRight: "50px",
          float: "right",
        }}
      ></img>
    </>
  );
}

export default App;
