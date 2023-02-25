import { Navigation, FreeMode} from "swiper";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "./imageSwiper.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


const ImageSwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      style={{
        "--swiper-navigation-color": "#f3ba2f",
        "--swiper-navigation-size": "20px",
      }}
      slidesPerView={2}
      spaceBetween={10}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
    >
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/thena.f922f89e.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Thena</strong>
          </p>
          <p>APR 29 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/beefy.c6d2c4ed.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Beefy</strong>
          </p>
          <p>APR 17 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/apeswap.3ba2feab.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Apeswap</strong>
          </p>
          <p>APR 14.13 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/ellipsis.6aa94f62.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Ellipsis</strong>
          </p>
          <p>APR 13 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/beefy.c6d2c4ed.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Beefy</strong>
          </p>
          <p>APR 9.48 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/wombat.8dbd3057.svg"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Wombat</strong>
          </p>
          <p>APR 7.12 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/openLeverage.b8ccc2b6.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Open Leverage</strong>
          </p>
          <p>APR 2.6 %</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/openLeverage.b8ccc2b6.png"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Open Leverage</strong>
          </p>
          <p>APR  -%</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx / BNB</span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/impossible.33812a14.svg"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Impossible</strong>
          </p>
          <p>APR  -%</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx </span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/cone.c4acf34b.svg"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Cone</strong>
          </p>
          <p>APR  -%</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx </span>
          </span>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  className="imagebox">
          <img
            src="https://www.staderlabs.com/bnb/_next/static/media/midas-light.b5f24a3b.svg"
            alt="img"
            style={{ width: "40px", margin: "3%" }}
          />
          <p>
            <strong>Midas</strong>
          </p>
          <p>APR  -%</p>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <AvatarGroup max={2}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnbx-light.d7fbd240.svg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src="https://www.staderlabs.com/bnb/_next/static/media/bnb-light.88a9463c.svg"
              />
            </AvatarGroup>
            <span >BNBx </span>
          </span>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

 export default ImageSwiper 