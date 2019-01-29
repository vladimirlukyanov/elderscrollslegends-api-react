import React, {PureComponent} from 'react';
import './footer.scss';
import {Link} from "react-router-dom";
import Topnav from '../topnav';

class Footer extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="md-one-third">
              <h6><strong>Made by ZURB</strong></h6>
              <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
                design company in
                Campbell, California. We've put more than 14 years of experience
                building web products,
                services and websites into this framework.
                <a href="../about.php">Foundation Info and Goodies в†’</a>
              </p>
            </div>
            <div className="md-one-third">
              <h6><strong>Made by ZURB</strong></h6>

              <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
                design company in
                Campbell, California. We've put more than 14 years of experience
                building web products,
                services and websites into this framework.
                <a href="../about.php">Foundation Info and Goodies в†’</a>
              </p>
            </div>
            <div className="md-one-third">
              <h6><strong>Made by ZURB</strong></h6>

              <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
                design company in
                Campbell, California. We've put more than 14 years of experience
                building web products,
                services and websites into this framework.
                <a href="../about.php">Foundation Info and Goodies в†’</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="md-16 text-center">
              <p>MagicTheGathering.io API React &copy; 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
