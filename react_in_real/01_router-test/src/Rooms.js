import React from "react";

import { Route, Link } from "react-router-dom";

function Rooms({ match }) {
  return (
    <div>
      <h2>방소개 페이지</h2>
      <Link to={`${match.url}/bludRoom`}> 파란방입니다 </Link>
      <br />
      <Link to={`${match.url}/greenRoom`}> 초록 방입니다.</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />

      <Route
        exact
        path={match.url}
        render={() => <h3>방을 선택해주세요. </h3>}
      />
    </div>
  );
}

export default Rooms;

function Room({ match }) {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
  //params는 url에서 ':'을 사용할 경우 사용 가능하다.
}
