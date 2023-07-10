import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ArrowForward from '@mui/icons-material/ArrowForward';
import FB from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Git from '@mui/icons-material/GitHub';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

function FutureDashboard() {
  return (
    <div className='main-container'>
      <div className="wrapper">
        <div className='contents'>
          <div className='top-row'>
            <div className='left-col'>
              <div className='img-holder image'>
              </div>
              <div className='topic'>
                <i><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Icon">
                      <path id="Vector" d="M12.181 9.875C12.4548 10.0298 12.6319 10.2604 12.7122 10.567C12.7926 10.8735 12.7554 11.1637 12.6006 11.4375L12.0292 12.4196C11.8744 12.6935 11.6438 12.8705 11.3372 12.9509C11.0307 13.0313 10.7405 12.9941 10.4667 12.8393L8.09171 11.4732V14.2143C8.09171 14.5238 7.97861 14.7917 7.75242 15.0179C7.52623 15.2441 7.25837 15.3571 6.94885 15.3571H5.80599C5.49647 15.3571 5.22861 15.2441 5.00242 15.0179C4.77623 14.7917 4.66314 14.5238 4.66314 14.2143V11.4732L2.28814 12.8393C2.01433 12.9941 1.72415 13.0313 1.4176 12.9509C1.11105 12.8705 0.880397 12.6935 0.725635 12.4196L0.154207 11.4375C-0.000555209 11.1637 -0.0377576 10.8735 0.0425996 10.567C0.122957 10.2604 0.30004 10.0298 0.57385 9.875L2.94885 8.5L0.57385 7.125C0.30004 6.97024 0.122957 6.73959 0.0425996 6.43304C-0.0377576 6.12649 -0.000555209 5.83631 0.154207 5.5625L0.725635 4.58036C0.880397 4.30655 1.11105 4.12947 1.4176 4.04911C1.72415 3.96875 2.01433 4.00596 2.28814 4.16072L4.66314 5.52679V2.78572C4.66314 2.47619 4.77623 2.20834 5.00242 1.98215C5.22861 1.75596 5.49647 1.64286 5.80599 1.64286H6.94885C7.25837 1.64286 7.52623 1.75596 7.75242 1.98215C7.97861 2.20834 8.09171 2.47619 8.09171 2.78572V5.52679L10.4667 4.16072C10.7405 4.00596 11.0307 3.96875 11.3372 4.04911C11.6438 4.12947 11.8744 4.30655 12.0292 4.58036L12.6006 5.5625C12.7554 5.83631 12.7926 6.12649 12.7122 6.43304C12.6319 6.73959 12.4548 6.97024 12.181 7.125L9.80599 8.5L12.181 9.875Z" fill="black"/>
                      </g>
                      </svg>
                </i>
                <p>Machine Statistics</p>
              </div>
              <div className='desc'>
                <div className='inner-frame'>
                  <p>Energy Simulation Position</p>
                </div>
              </div>
            </div>
            <div className='right-col'>
              <div className='header'>
                <div className='nav-bar'>
                  <div className='inner-frame'>
                    <p>Navigation menu</p>
                    <ArrowForward className='props'/>
                  </div>
                </div>
                <div className='menu'>
                  <div className='inner-frame'>
                    <p>Menu</p>
                    <ArrowForward className='props'/>
                  </div>
                </div>
                <div className='social-icons'>
                  <div className='s-icon'><i><FB/></i></div>
                  <div className='s-icon'><i><Git/></i></div>
                  <div className='s-icon'><i><Twitter/></i></div>
                </div>
              </div>
              <div className='content'>
                <div className='title'>
                  <p>Future Design</p>
                </div>
                <div className='data'>
                  <h1>Dashboard</h1>
                  <div className='profile'>
                    <div className='profile-img image'></div>
                    <div className='profile-icon'>
                      <i><FiberSmartRecordIcon fontSize='small'/></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-row'>
            <div className='left-col'>
              <div className='content'>
                <div className='title'>
                  <h1>Innovation</h1>
                  <div className='tab'>
                    <p>Statistics</p>
                  </div>
                </div>
                <div className="bar-charts">
                  <div class="markers">
                    <div class="marks start"></div>
                    <div class="marks mid"></div>
                    <div class="marks end"></div>
                  </div>
                  <div class="scales">
                    <div class="exp">
                      <div class="value">xx</div>
                    </div>
                    <div class="usage mt-2">
                      <div class="value"><p>30%</p></div>
                    </div>
                  </div>
                </div>
                <div className='description'>
                  <p><u>Software</u> with <strong>Future Design</strong> technology <strong>introductions</strong> and experience.</p>
                </div>
              </div>
              <div className='bottom-cards'>
                <div className='get-started'>
                  <div className='title'>
                    <p>Get Started</p>
                    <i className='icon'><ArrowForward/></i>
                  </div>
                  <div className='h-line'></div>
                </div>
                <div className='pricing'>
                  <div className='title'>
                    <p>Pricing</p>
                    <i className='icon'><ArrowForward/></i>
                  </div>
                  <div className='h-line'></div>
                </div>
              </div>
            </div>
            <div className='right-col'>
              <div className='row1'>
                <div className='membership'>
                  <div className='title'>
                    <div className='tab'>
                      <p>Membership</p>
                    </div>
                    <i className='icon'><ArrowForward/></i>
                  </div>
                  <div className='details'>
                      <div class="top mb-3">
                        <span class="title"><p>Online User Availability</p></span>
                        <p>435</p>
                      </div>
                      <div class="chart">
                        <span class="scale">
                          <span class='data'></span>
                        </span>
                        <span class="h-line"></span>
                      </div>
                  </div>
                </div>
                <div className='database'>
                  <div className='title'>
                    <div className='tab'>
                      <p>Database</p>
                    </div>
                    <i className='icon'><ArrowForward/></i>
                  </div>
                  <div className='details'>
                      <div class="top mb-3">
                        <span class="title"><p>Storage Disk Database</p></span>
                        <p>62%</p>
                      </div>
                      <div class="chart">
                        <span class="scale">
                          <span class='data'></span>
                        </span>
                        <span class="h-line"></span>
                      </div>
                  </div>
                </div>
              </div>
              <div className='row2'>
                <div className='top'>
                  <div className='title'>
                    <div className='tab'>
                      <p>Statistics</p>
                    </div>
                    <i className='icon'><ArrowForward/></i>
                  </div>
                  <div className='img-holder image'></div>
                </div>
                <div className='content'>
                  <div className='top-frame'>
                    <div className='data'>
                      <div className='title'>
                        <p>New methods design development.</p>
                      </div>
                    </div>
                    <p>12+</p>
                  </div>
                  <div className='h-line'></div>
                  <div className='description'>
                    <p>Experience the new solution with<strong><u>software upgrade</u></strong> to the latest version on the online platform for premium users. Discover the latest benefits of use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <Row>
          <Col lg={6} className='innovation'>
            <Card className='future-design'>
              <div class="header">
                <h1>Innovation</h1>
                <Badge className='stat-bdg' bg="dark"><p>statistics</p></Badge>
                <div class="bar-charts">
                  <div class="markers">
                    <div class="marks start"></div>
                    <div class="marks mid"></div>
                    <div class="marks end"></div>
                  </div>
                  <div class="scales">
                    <div class="exp">
                      <div class="value">xx</div>
                    </div>
                    <div class="usage mt-2">
                      <div class="value"><p>30%</p></div>
                    </div>
                  </div>
                </div>
                  <p class="details"><u>Software</u> with <strong>Future Design</strong> technology <strong>introductions</strong> and experience.</p>
                </div>
              <div class="footer mb-3">
                <Row style={footerRow}>
                  <Col>
                    <Card className='get-started'>
                      <div class="title">
                        <p>Get Started</p>
                        <i><ArrowForward/></i>
                      </div>
                      <div class='h-line'></div>
                    </Card>
                  </Col>
                  <Col>
                    <Card className='pricing'>
                      <div class="title">
                        <p>Pricing</p>
                        <i><ArrowForward/></i>
                      </div>
                      <div class='h-line'></div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col lg={6} style={noPadding}>
            <div class='statistics'>
              <Row className='row1'>
                <Col style={noPadding}>
                  <Card className='membership'>
                    <div class="header">
                      <Badge className='membdg' bg="light" text='dark'><p>Membership</p></Badge>
                      <ArrowForward className='icon arrow-icon'/>
                    </div>
                    <div class="details">
                      <div class="top mb-3">
                        <span class="title"><p>Online User Availability</p></span>
                        <p>435</p>
                      </div>
                      <div class="chart">
                        <span class="scale">
                          <span class='data'></span>
                        </span>
                        <span class="h-line"></span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col style={noPadding}>
                  <Card className='database'>
                    <div class="header">
                      <Badge className='db-bdg' bg="dark" text='light'><p>Database</p></Badge>
                      <ArrowForward className='icon arrow-icon'/>
                    </div>
                    <div class="details">
                      <div class="top mb-3">
                        <span class="title"><p>Storage Disk Database</p></span>
                        <p>62%</p>
                      </div>
                      <div class="chart">
                        <span class="scale">
                          <span class='data'></span>
                        </span>
                        <span class="h-line"></span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row className='row2'>
                <Col style={noPadding} className='inner-frame'>
                  <div class="header">
                    <Card className='new-development'>
                      <Card.Img src={cardimg} alt="Card image"></Card.Img>
                      <Card.ImgOverlay className='title'>
                        <span class="stat-bdg-light"><p class="m-0">statistics</p></span>
                        <ArrowForward className='icon arrow-icon'/>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                  <div class="footer">
                        <div class="title">
                          <h3>New Methods Design Development</h3>
                          <p>12+</p>
                        </div>
                        <div class='h-line'></div>
                        <div class="description">
                          <p>Experience the new solution with <u>software upgrade</u>  to the latest version on the online platform for premium users. Discover the latest benefits of use.</p>
                        </div>
                      </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row> */}
      </div>
      
    </div>
  );
}

export default FutureDashboard;