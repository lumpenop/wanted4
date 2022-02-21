import React from "react";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div_main_page_header">
        <img
          className="header_img_01"
          src="./resources/images/main/calendar.png"
        />
        <img className="header_img_02" src="./resources/images/main/menu.png" />
      </div>
    );
  }
}

export default MainHeader;
