import "./App.css";
import image from "./Image/a3.png";
import cycle from "./video/cycle.gif";
import Logo from './Image/a1.png';
import image1 from './Image/a6.png';
import image2 from './Image/a4.png';
import image3 from './Image/a5.png';
import image4 from './Image/a9.png';
import image5 from './Image/a8.png';
import image6 from './Image/b1.png'


function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={Logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto" >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Climate Change</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Map</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-image">
        <div className="hero-text">
          <div className="row">
            <div className="col-md-6">
              <h1 style={{ marginTop: '20%', marginLeft: "50px" }}>Weather Forecast For Everyone</h1>
              <p style={{ marginLeft: "50px" }}>The forecast for today is sunny and bright, with a high of 68 degrees.<br></br> enjoy the beautiful weather and make sure to wear sunscreen.</p>
              <button className="btnget">Get Notifications</button>
            </div>
            <div className="col-md-6">
              <img src={cycle} style={{ width: "100%", height: "90%",marginTop:"30px" }}  autoPlay muted/>
                
              



            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="cape">
            <div className="box">
              <div className="row">
                <div className="col">
                  <p style={{ marginLeft: '30px', marginTop: "15px" }}>Cape Town</p>
                  <h5 style={{ marginLeft: '30px' }}>13.32 &#8451;</h5>
                  <p style={{ marginLeft: '30px' }}>Tuesday</p>
                </div>
                <div className="col">
                  <img style={{ marginTop: "20px", width: "70px" }} src={image} />
                  <p><b>Partly Cloud</b></p>
                </div>

              </div>
              <hr style={{ width: "220px", marginLeft: "20px" }}></hr>
              <img style={{ marginLeft: "30px", width: "12px" }} src={image1} /> 66%
              <img style={{ marginLeft: "20px", width: "12px" }} src={image2} /> 14%
              <img style={{ marginLeft: "20px", width: "12px" }} src={image3} /> 20%

            </div>
            <div className="box1">
              <div className="row">
                <div className="col">
                  <p style={{ marginLeft: '30px', marginTop: "15px" }}>Cape Town</p>
                  <h5 style={{ marginLeft: '30px' }}>13.32 &#8451;</h5>
                  <p style={{ marginLeft: '30px' }}>Tuesday</p>
                </div>
                <div className="col">
                  <img style={{ marginTop: "20px", width: "70px" }} src={image} />
                  <p><b>Partly Cloud</b></p>
                </div>

              </div>
              <hr style={{ width: "220px", marginLeft: "20px" }}></hr>
              <img style={{ marginLeft: "30px", width: "12px" }} src={image1} /> 66%
              <img style={{ marginLeft: "20px", width: "12px" }} src={image2} /> 14%
              <img style={{ marginLeft: "20px", width: "12px" }} src={image3} /> 20%

            </div>




          </div>

        </div>
        <div style={{ marginTop: "120px" }} className="col-md-6">
          <h2>Weather In Your Pocket</h2>
          <h2 style={{ color: "&#1E64F0" }}>Directly From Your Phone</h2>
          <p>The forecast for today is sunny and bright, with a high of 68 <br></br>degrees. enjoy the beautiful weather and make sure to wear <br></br>sunscreen. The forecast for today is sunny and bright, with a<br></br>  high of 68 degrees. enjoy the beautiful weather and make<br></br> sure to wear sunscreen.</p>
          <p>The forecast for today is sunny and bright, with a high of 68 <br></br>degrees. enjoy the beautiful weather and make sure to wear<br></br> sunscreen. </p>
        </div>
      </div>

      <div class="hero-image1">
        <div class="hero-text1">
          <div className="row">
            <div style={{marginLeft:"100px"}} className="col-md-5">
              <h2 style={{marginTop:"200px",marginLeft:"200px"}}><b>Sans Fransico</b></h2>
              <p  style={{marginLeft:"200px"}}>Monday, May 23 Update As Of 2:45pm </p>
              <div className="box3">
                <div className="row">
                  <div className="col">
                  <img style={{ marginLeft: "20px",marginTop:"20pX"}} src={image4} /> Wind 3km/H
                  <img style={{ marginLeft: "20px",marginTop:"10px"}} src={image5} /> Rain 70%
                  </div>
                  <div className="col">
                  <img style={{ marginLeft: "10px",marginTop:"20pX"}} src={image4} /> Wind 3km/H
                  <img style={{ marginLeft: "20px",marginTop:"10px"}} src={image5} /> Rain 70%
                  </div>
                </div>
              </div>
           
              
            </div>
            <div className="box4">
              <img style={{width:"100px",height:"100px",marginLeft:"30px",marginTop:"40px"}} src={image6}/>
              <h3 style={{marginLeft:"40px"}}><b>23 &#8451; </b></h3>
              <h5 style={{marginLeft:"30px"}} ><b>23 &#8451; - 31 &#8451;</b></h5>
            </div>
          </div>

        </div>
      </div>




    </div>


  );
}
export default Home;

