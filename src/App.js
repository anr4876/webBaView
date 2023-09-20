/*global kakao*/
import React, { useState } from "react";
import { Map, MapMarker, MapTypeId } from "react-kakao-maps-sdk";


const App = () => {
  const [mapTypeIds, setMapTypeIds] = useState([kakao.maps.MapTypeId.BICYCLE]);

  const positions = [
  
    {
      title: "유성온천",
      latlng: { lat: 36.35528777959877, lng: 127.34354160270605 },
      img: "./placeImg/유성온천.jpg",
    },
  ];

 const [mapWidth, setMapWidth] = useState("0");
  const [mapCenterLat, setMapCenterLat] = useState(36.35327479294623);
  const [mapCenterLng, setMapCenterLng] = useState(127.34157198031791);
  const [mapTitle, setMapTitle] = useState(null);

  // 클릭한 마커 정보를 저장할 상태 추가
  const [selectedMarker, setSelectedMarker] = useState(null);
 
  // 마커를 클릭할 때 호출되는 함수
  const handleMarkerClick = (mlat, mlng, title) => {
    // 클릭한 마커의 정보를 상단에 표시하고, 해당 마커의 좌표로 지도의 중심 좌표를 설정
    setSelectedMarker(title);
    setMapCenterLat(mlat);
    setMapCenterLng(mlng);
    setMapTitle(title);
    setMapWidth("100%")
  };

  
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Map
        center={{ lat: mapCenterLat, lng: mapCenterLng }}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        level={3}
      >
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}-${position.img}`}
            position={position.latlng}
            image={{
              src: "position.img",
              size: {
                width: 64,
                height: 69,
              },
              options: {
                offset: {
                  x: 27,
                  y: 69,
                },
              },
            }}
            onClick={() =>
              handleMarkerClick(
                position.latlng.lat,
                position.latlng.lng,
                position.title
              )
            }
            title={position.title}
          >
          </MapMarker>
        ))}
  
        {mapTypeIds.map((mapTypeId) => (
          <MapTypeId key={mapTypeId} type={mapTypeId} />
        ))}
      </Map>
     
       {/* 첫 번째 div */}
  <div style={{
    position: "absolute",
    width: `${mapWidth}`,
    marginTop: "30%",
    height: "45%",
    background: "linear-gradient(180deg, #3693FF 0%, rgba(54, 147, 255, 0.37) 99.99%, rgba(54, 147, 255, 0) 100%)",
    borderRadius: "30px 30px 0 0",
    zIndex: 1,
    top: 0,
    left: 0,
    transition: "width 0.5s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <div style={{ position: "relative", zIndex: 2 }}>{mapTitle}</div>
  </div>
  {/* 두 번째 div (흰색 배경) */}
  <div style={{
    position: "absolute",
    transition: "width 0.5s",
    width: `${mapWidth}`,
    marginTop: "30%",
    height: "45%",
    background: "white", // 흰색 배경
    borderRadius: "30px 30px 0 0",
    zIndex: 0,
    top: 0,
    left: 0,
  }}>
    {/* 내용을 추가할 수 있습니다 */}
  </div>
    </div>
  );
  
};

export default App;