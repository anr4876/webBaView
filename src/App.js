import React from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const App = () => {

  const positions = [
    {
      title: "카카오",
      latlng: {lat: 36.35327479294623, lng: 127.34157198031791 },
      img: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"
    },
    {
      title: "카카오",
      latlng: {lat: 36.36, lng: 127.34157198031791 },
      img: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
    },
  ]
    return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map
        center={{ lat: 36.35327479294623, lng: 127.34157198031791 }} // 지도의 중심 좌표
        style={{ width: '100%', height: '100%' }} // 지도 크기
        level={3} // 지도 확대 레벨
      >
  
  {positions.map((position, index) => (
    
        <MapMarker
          key={`${position.title}-${position.latlng}-${position.mImg}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: position.img, // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
             options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
      </Map>
    </div>
  );
};

export default App;
