/*global kakao*/
import React, { useState,useEffect } from "react";
import { Map, MapMarker, MapTypeId, } from "react-kakao-maps-sdk";
import PopupView from "./PopupView";


//분리
import { positions } from "./data"

const App = () => {
  const mapTypeIds = [kakao.maps.MapTypeId.BICYCLE];
  const [mapAddress, setMapAddress] = useState(null);
  const [mapText, setMapText] = useState(null);
  // const [mapWidth, setMapWidth] = useState("0");
  const [mapCenterLat, setMapCenterLat] = useState(null);
  const [mapCenterLng, setMapCenterLng] = useState(null);
  const [mapTitle, setMapTitle] = useState(null);
  const [mapImgs, setMapImgs] = useState(null);
  // 클릭한 마커 정보를 저장할 상태 추가

  const [latPosition, setLatPosition] = useState(null);
  const [lngPosition, setLngPosition] = useState(null);

  //팝업 화면 보임/숨김 여부
  const [isPopupVisible, setPopupVisible] = useState(false);



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // const { latitude, longitude } = position.coords;
          // setLatPosition(latitude);
          // setLngPosition(longitude);
          setLatPosition(36.35397739857084);
          setLngPosition(127.34168088820714);
        },
        (error) => {
          console.error("현재 위치를 가져오는 중 에러 발생:", error);
        }
      );
    } else {
      console.error("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
    }
  }, []);

  // 마커를 클릭할 때 호출되는 함수
  const handleMarkerClick = (mlat, mlng, title, imgs, address, text) => {
    // 클릭한 마커의 정보를 상단에 표시하고, 해당 마커의 좌표로 지도의 중심 좌표를 설정
    setMapCenterLat(mlat);
    setMapCenterLng(mlng);
    setMapTitle(title);
    setMapAddress(address);
    setMapText(text);
    // setMapWidth("95%");
    setMapImgs(imgs.split("@"));
    setPopupVisible(true);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Map
        center={{ lat: mapCenterLat === null ? latPosition : mapCenterLat , lng : mapCenterLng === null ? lngPosition : mapCenterLng}}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        level={3}
      >
        {latPosition !== null && lngPosition !== null && (
          <MapMarker position={{ lat: latPosition, lng: lngPosition }} />
        )}

        {positions.map((position, index) => (
          <MapMarker
          key={`${position.title}-${position.latlng}-${position.img}-${position.imgs}`}
          position={position.latlng}
          image={{
            src: position.img,
            size: {
              width: 180,
              height: 100,
            },
            
          }}
          onClick={() =>
            handleMarkerClick(
              position.latlng.lat,
              position.latlng.lng,
              position.title,
              position.imgs,
              position.address,
              position.text
              )
            }
            title={position.title}
            ></MapMarker>
            ))}

        {mapTypeIds.map((mapTypeId) => (
          <MapTypeId key={mapTypeId} type={mapTypeId} />
          ))}
      </Map>

      <PopupView
        style={{
          position: "absolute",
          bottom: "1.5rem",
          width: "94%",
          left: "3%",
          height: "43%"
        }}
        title={mapTitle}
        images={mapImgs}
        address={mapAddress}
        description={mapText}
        isVisible={isPopupVisible}
        onCloseClicked={() => setPopupVisible(s => !s)}
       />
    </div>
  );
};

export default App;
