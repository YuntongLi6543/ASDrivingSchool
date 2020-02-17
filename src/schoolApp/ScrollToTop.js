import React from "react";
import "../scss/ScrollToTop.scss";

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      show: false
    })
    this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollTopShow)
  }

  changeScrollTopShow() {
    if (window.pageYOffset > 0) {
      this.setState({
        show: true
      })
    }else {
      this.setState({
        show: false
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  render() {
    const { show } = this.state;

    return (
        <div>
            <div className="wechat popupHoverElement">
                <button>
                    <i className="fab fa-weixin fa-lg"></i>
                </button>
                <div id="popup" className="popupBox arrow_box">

                    <img src="wechat-qrcode.jpg" alt="qrcode"/>
                </div>
                
            </div>
            <div className={show ? 'shown' : 'notshown'} id="topButton">
                <button onClick={this.scrollToTop}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
            
        </div>
    )
  }
}
export default ScrollToTop;