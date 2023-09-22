/*global kakao*/
import React, { useState,useEffect } from "react";
import { Map, MapMarker, MapTypeId } from "react-kakao-maps-sdk";

const App = () => {
  const mapTypeIds = [kakao.maps.MapTypeId.BICYCLE];
  
  const positions = [
    {
      title: "흥도초등학교 앞 돌다리",
      latlng: { lat: 36.3344624, lng: 127.3342898 },
      img: "https://ifh.cc/g/pFGAk4.jpg",
      imgs: "https://ifh.cc/g/pFGAk4.jpg",
      address: "대한민국 대전광역시 유성구 상대동 488",
      text: "",
    },
    {
      title: "대전시립박물관, 화장실",
      latlng: { lat: 36.3350338, lng: 127.3349251 },
      img: "https://ifh.cc/g/bo2OM9.jpg",
      imgs: "https://ifh.cc/g/bo2OM9.jpg@https://ifh.cc/g/lNzq7Q.jpg@https://ifh.cc/g/Fj0G1k.jpg@https://ifh.cc/g/FMcYlK.jpg",
      address: "대한민국 대전광역시 유성구 원신흥동 577",
      text: "",
    },
    {
      title: "원신흥 도서관 앞 돌다리",
      latlng: { lat: 36.3373248, lng: 127.3359853 },
      img: "https://ifh.cc/g/8BvJov.jpg",
      imgs: "https://ifh.cc/g/8BvJov.jpg@https://ifh.cc/g/J4LZ3v.jpg",
      address: "대한민국 대전광역시 유성구 상대동 501",
      text: "",
    },
    {
      title: "도안마을 10단지 돌다리, 정자",
      latlng: { lat: 36.341014, lng: 127.3390428 },
      img: "https://ifh.cc/g/2F1464.jpg",
      imgs: "https://ifh.cc/g/2F1464.jpg@https://ifh.cc/g/BQRscY.jpg@https://ifh.cc/g/g1doQ8.jpg",
      address: "대한민국 대전광역시 유성구 상대동 482-4",
      text: "",
    },
    {
      title: "고려교, 생활체육시설",
      latlng: { lat: 36.341677, lng: 127.3400296 },
      img: "https://ifh.cc/g/S9rMVY.jpg",
      imgs: "https://ifh.cc/g/S9rMVY.jpg@https://ifh.cc/g/PwpF0S.jpg@https://ifh.cc/g/lltMFB.jpg",
      address: "대한민국 대전광역시 유성구 상대동 501-1",
      text: "",
    },
    {
      title: "봉명서로 돌다리",
      latlng: { lat: 36.3438707, lng: 127.3431612 },
      img: "https://ifh.cc/g/9afp1R.jpg",
      imgs: "https://ifh.cc/g/9afp1R.jpg",
      address: "대한민국 대전광역시 유성구 봉명서로20번길 36",
      text: "",
    },
    {
      title: "봉명동 다리",
      latlng: { lat: 36.3472599, lng: 127.3491185 },
      img: "https://ifh.cc/g/vyc83G.jpg",
      imgs: "https://ifh.cc/g/vyc83G.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 998",
      text: "",
    },
    {
      title: "갑천 우드골프장",
      latlng: { lat: 36.3502836, lng: 127.3487138 },
      img: "https://ifh.cc/g/dnszAW.jpg",
      imgs: "https://ifh.cc/g/dnszAW.jpg@https://ifh.cc/g/QOzlS1.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 337-1 갑천 우드골프장",
      text: "#체육시설 #화장실 #골프장",
    },
    {
      title: "갑천 자전거도로 가로수길, 화장실",
      latlng: { lat: 36.3533041, lng: 127.3496172 },
      img: "https://ifh.cc/g/09gLD2.jpg",
      imgs: "https://ifh.cc/g/09gLD2.jpg@https://ifh.cc/g/9Yrdh0.jpg@https://ifh.cc/g/4XW2s7.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 541-17",
      text: "",
    },
    {
      title: "가로수길 통로",
      latlng: { lat: 36.3558545, lng: 127.3524655 },
      img: "https://ifh.cc/g/RSysNN.jpg",
      imgs: "https://ifh.cc/g/RSysNN.jpg@https://ifh.cc/g/5W53Bl.jpg@https://ifh.cc/g/vt9hsA.jpg@https://ifh.cc/g/61AYDo.jpg@https://ifh.cc/g/Xnypq3.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 500",
      text: "밤에 빛나옴",
    },
    {
      title: "갑천근린공원 근처 그늘 쉼터",
      latlng: { lat: 36.3575674, lng: 127.3552846 },
      img: "https://ifh.cc/g/N6t3aK.jpg",
      imgs: "https://ifh.cc/g/N6t3aK.jpg@https://ifh.cc/g/pMMWlS.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 699",
      text: "",
    },
    {
      title: "무너진 다리",
      latlng: { lat: 36.3618656, lng: 127.3609571 },
      img: "https://ifh.cc/g/1ns98r.jpg",
      imgs: "https://ifh.cc/g/1ns98r.jpg",
      address: "대한민국 대전광역시 서구 월평동 1621",
      text: "",
    },
    {
      title: "유림공원 가는길 자전거도로",
      latlng: { lat: 36.3633685, lng: 127.3602875 },
      img: "https://ifh.cc/g/w0TR7R.jpg",
      imgs: "https://ifh.cc/g/w0TR7R.jpg@https://ifh.cc/g/OCdms1.jpg",
      address: "대한민국 대전광역시 유성구 구성동 317-3",
      text: "밤에 빛 쫙나옴",
    },
    {
      title: "체육공원 공중화장실",
      latlng: { lat: 36.366755, lng: 127.3668591 },
      img: "https://ifh.cc/g/ABFj5f.jpg",
      imgs: "https://ifh.cc/g/ABFj5f.jpg",
      address: "대한민국 대전광역시 유성구 구성동 276-1",
      text: "",
    },
    {
      title: "구성삼거리앞 그늘쉼터",
      latlng: { lat: 36.3692158, lng: 127.3708442 },
      img: "https://ifh.cc/g/vCYJH5.jpg",
      imgs: "https://ifh.cc/g/vCYJH5.jpg@https://ifh.cc/g/qVqs6K.jpg@https://ifh.cc/g/r5X0oL.jpg",
      address: "대한민국 대전광역시 유성구 구성동 466",
      text: "",
    },
    {
      title: "계단쉼터",
      latlng: { lat: 36.3719273, lng: 127.3755544 },
      img: "https://ifh.cc/g/aACMOX.jpg",
      imgs: "https://ifh.cc/g/aACMOX.jpg@https://ifh.cc/g/P0mM84.jpg",
      address: "대한민국 대전광역시 금강유역환경청",
      text: "",
    },
    {
      title: "유림공원 전망대",
      latlng: { lat: 36.3624742, lng: 127.3611769 },
      img: "https://ifh.cc/g/7pdmV2.jpg",
      imgs: "https://ifh.cc/g/7pdmV2.jpg@https://ifh.cc/g/nyhGoT.jpg@https://ifh.cc/g/R2J1zV.jpg",
      address: "대한민국 대전광역시 유성구 봉명동 유림공원 전망대",
      text: "",
    },
    {
      title: "엑스포 다리",
      latlng: { lat: 36.3716644, lng: 127.3880324 },
      img: "https://ifh.cc/g/oabLrQ.jpg",
      imgs: "https://ifh.cc/g/oabLrQ.jpg@https://ifh.cc/g/oo7gHX.jpg@https://ifh.cc/g/Tjnr97.jpg@https://ifh.cc/g/sLJdAg.jpg",
      address: "대한민국 대전광역시 유성구 도룡동 ",
      text: "",
    },
    {
      title: "스노우 글로브",
      latlng: { lat: 36.375935, lng: 127.38800151 },
      img: "https://ifh.cc/g/9T6SoY.jpg",
      imgs: "https://ifh.cc/g/9T6SoY.jpg@https://ifh.cc/g/n9T4ot.jpg@https://ifh.cc/g/K5wXSr.jpg",
      address: "대한민국 대전광역시 유성구 가정동 49-3 ",
      text: "",
    },
  ];

  
  const [mapAddress, setMapAddress] = useState(null);
  const [mapText, setMapText] = useState(null);
  const [mapWidth, setMapWidth] = useState("0");
  const [mapCenterLat, setMapCenterLat] = useState(null);
  const [mapCenterLng, setMapCenterLng] = useState(null);
  const [mapTitle, setMapTitle] = useState(null);
  const [mapImgs, setMapImgs] = useState(null);
  // 클릭한 마커 정보를 저장할 상태 추가

  const [latPosition, setLatPosition] = useState(null);
  const [lngPosition, setLngPosition] = useState(null);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatPosition(latitude);
          setLngPosition(longitude);
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
    setMapWidth("95%");
    setMapImgs(imgs.split("@"));
  };

  const handleMarkerClickClose = () => {
    // 클릭한 마커의 정보를 상단에 표시하고, 해당 마커의 좌표로 지도의 중심 좌표를 설정
    setMapTitle(null);
    setMapAddress(null);
    setMapText(null);
    setMapWidth("0");
    setMapImgs(null); // 창을 숨기기 위해 mapWidth를 0으로 설정
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
        center={{ lat: mapCenterLat === null? latPosition : mapCenterLat, lng: mapCenterLng === null? lngPosition : mapCenterLng }}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        level={3}
      >
        <MapMarker position={ {let : latPosition, lng : lngPosition}}></MapMarker>
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}-${position.img}-${position.imgs}`}
            position={position.latlng}
            image={{
              src: position.img,
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

      {/* 첫 번째 div */}
      <div
        style={{
          position: "absolute",
          width: `${mapWidth}`,
          marginTop: "20%",
          height: "45%",
          background:
            "linear-gradient(180deg, #3693FF 0%, rgba(54, 147, 255, 0.37) 99.99%, rgba(54, 147, 255, 0) 100%)",
          borderRadius: "30px 30px 30px 30px",
          zIndex: 1,
          top: 0,
          left: 0,
          marginLeft: "2.5%",
          transition: "width 0.5s",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", height: "100%" }}>
          <div
            style={{
              //width: "auto",
              //height: "3%",
              padding: "1% 0.8% 0.3% 0.8%",
              position: "relative",
              zIndex: 2,
              color: "white",
              fontSize: "30px",
              fontFamily: "Jalnan",
              //backgroundColor: "#D2C4F0",
              //borderRadius: "30px",
              marginRight: "2%",
              marginLeft: "4.5%",
              marginTop: "1.4%",
            }}
          >
            {mapTitle}
          </div>
          <div
            style={{
              width: "35%",
              height: "80%",
              display: "flex",
              flexDirection: "row",
              marginLeft: "5%",
              marginTop: "1.5%",
            }}
          >
            {mapImgs &&
              mapImgs.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="bikeView"
                  style={{
                    flex: "1",
                    margin: "0.5%",
                    borderRadius: "30px",
                    marginRight: "3%",
                  }}
                />
              ))}
          </div>
        </div>
        <div
          style={{
            marginLeft: "5%",
            color: "white",
            fontSize: "21px",
            fontFamily: "Jalnan",
          }}
        >
          <p>{mapAddress}</p>
          <p>{mapText}</p>
        </div>
        {mapWidth === "95%" && (
          <button
            onClick={handleMarkerClickClose}
            style={{
              position: "absolute",
              top: "1.5%",
              right: "0.6%",
              background: "transparent",
              border: "none",
              fontFamily: "Jalnan",
              color: "white",
              cursor: "pointer",
              fontSize: "30px",
            }}
          >
            X
          </button>
        )}
      </div>
      {/* 두 번째 div (흰색 배경) */}
      <div
        style={{
          position: "absolute",
          transition: "width 0.5s",
          width: `${mapWidth}`,
          marginTop: "20%",
          height: "45%",
          background: "white", // 흰색 배경
          borderRadius: "30px 30px 30px 30px",
          marginLeft: "2.5%",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      >
        {/* 내용을 추가할 수 있습니다 */}
      </div>
    </div>
  );
};

export default App;
