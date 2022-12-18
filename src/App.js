
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Skills from './Component/Profile/Skills';
import Address from './Component/Profile/Address';
import Description from './Component/Profile/Description';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  InstapaperIcon,
  InstapaperShareButton
} from 'react-share';
const shareUrl = window.location.href;

function App() {
  return (
    <div className="card">
        <ProfilePhoto></ProfilePhoto>

  <div className="card-body">
  <FullName></FullName>
 <Address></Address>
 <div className="social-share ">
 <LinkedinShareButton quote="Show me the Linked in!" url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton quote="Show me the Twitter!" url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton quote="Show me the FaceBook!" url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        </div>
  <br/>
  <Skills></Skills>
  <br/>
  
<Description></Description>
</div>
<div className="card-footer">
VIEW PROFILE 
 </div>

</div>
   
  );
}

export default App;
