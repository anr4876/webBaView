/*global kakao*/
import React, { useState } from "react";
import { Map, MapMarker, MapTypeId } from "react-kakao-maps-sdk";

const App = () => {
  const [mapTypeIds, setMapTypeIds] = useState([kakao.maps.MapTypeId.BICYCLE]);

  const positions = [
    // {
    //   title: "유등천 자전거도로",
    //   latlng: {lat: 36.365835897883706, lng: 127.38566506821581 },
    //   img: "./placeImg/"
    // },
    // {
    //   title: "엑스포 시민광장",
    //   latlng: {lat: 36.370869446778016, lng: 127.35863206527065 },
    //   img: "./placeImg/"
    // },
    // {
    //   title: "정부대전청사",
    //   latlng: {lat: 36.361335380006494, lng: 127.35863206527065 },
    //   img: " "
    // },
    // {
    //   title: "도안 근린공원 길",
    //   latlng: {lat: 36.31638192314062,  lng: 127.34423381000683},
    //   img: " "
    // },
    {
      title: "오월드",
      latlng: { lat: 36.290095, lng: 127.39344 },
      img: "./placeImg/오월드.jpg",
    },
    {
      title: "뿌리공원",
      latlng: { lat: 36.285423, lng: 127.388113 },
      img: "./placeImg/뿌리공원.jpg",
    },
    {
      title: "엑스포 과학공원",
      latlng: { lat: 36.377695, lng: 127.386347 },
      img: "./placeImg/expoScience.png",
    },
    {
      title: "한밭수목원",
      latlng: { lat: 36.370734, lng: 127.388045 },
      img: "./placeImg/한밭수목원.jpg",
    },
    {
      title: "계족산 황톳길",
      latlng: { lat: 36.40551, lng: 127.443055 },
      img: "./placeImg/계족산_황톳길.jpg",
    },
    {
      title: "대청호반",
      latlng: { lat: 36.35418059654038, lng: 127.49801058190167 },
      img: "./placeImg/대청호반.jpg",
    },
    {
      title: "장태산 휴양림",
      latlng: { lat: 36.221054911028716, lng: 127.33846320081152 },
      img: "./placeImg/장태산_휴양림.jpg",
    },
    {
      title: "대전 둘레산길",
      latlng: { lat: 36.20130790322498, lng: 127.45460702192649 },
      img: "./placeImg/대전_둘레산길.jpg",
    },
    {
      title: "대전문화예술단지 (대전 예술의 전당)",
      latlng: { lat: 36.3649902829262, lng: 127.38520405544277 },
      img: "./placeImg/대전문화_예술단지.jpg",
    },
    // {
    //   title: "동춘당 역사공원",
    //   latlng: {lat: 36.36518000949478, lng: 127.44109551994079 },
    //   img: "./placeImg/"
    // },
    {
      title: "으능정이 문화의거리",
      latlng: { lat: 36.327412239611284, lng: 127.42670785898794 },
      img: "./placeImg/으능정이_문화의거리.jpg",
    },
    {
      title: "유성온천",
      latlng: { lat: 36.35528777959877, lng: 127.34354160270605 },
      img: "./placeImg/유성온천.jpg",
    },
    // {
    //   title: "도안 숲소공원",
    //   latlng: {lat: 36.318761662546436 , lng: 127.34244861537978},
    //   img: "./placeImg/"
    // },
  ];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        center={{ lat: 36.35327479294623, lng: 127.34157198031791 }} // 지도의 중심 좌표
        style={{ width: "100%", height: "100%" }} // 지도 크기
        level={3} // 지도 확대 레벨
      >
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}-${position.img}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: "position.img", // 마커이미지의 주소입니다
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

        {mapTypeIds.map((mapTypeId) => (
          <MapTypeId key={mapTypeId} type={mapTypeId} />
        ))}
      </Map>
    </div>
  );
};

export default App;
