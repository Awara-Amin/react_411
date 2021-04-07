import React from "react";

function Detail(props) {
  return <p className="info">{props.detailinfo}</p>;
  // (
  //   <div>
  //     {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
  //     <p className="info">{props.email}</p>
  //     <p className="info">{props.tel}</p>
  //   </div>
  // );
}

export default Detail;
