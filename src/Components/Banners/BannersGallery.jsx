import Banner from "./Banner";
import Gallery from "./../Gallery";
import ErrorIcon from "../../assets/circle.svg?react";
import WarningIcon from "../../assets/Exclamation.svg?react";
import SuccessIcon from "../../assets/Check.svg?react";
import NeutralIcon from "../../assets/Icon.svg?react";
const bannerData = {
  success: {
    title: "Congratulations!",
    icon: <SuccessIcon />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  },
  warning: {
    title: "Attention",
    icon: <WarningIcon />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.vos informationsLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  },
  error: {
    title: "There is a problem with your application",
    icon: <ErrorIcon />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum..",
  },
  neutral: {
    title: "Update available",
    icon: <NeutralIcon />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  },
  purple: {
    title: "test purple single line banner",
    icon: "💜",
  },
  pink: {
    title: "pink banner",
    icon: "🐷",
    text: "pig banner",
  },
  indigo: {
    title: "indigo banner",
    icon: ":)",
  },
};

const bannerTypes = Object.keys(bannerData);

export default function BannerGallery() {
  return (
    <section className="showcase" aria-labelledby="banners-title">
      <h2 id="banners-title">Banners</h2>
      <div className="banner-type">
        <div className="banner-header">
          <div className="banner-col multi-col">
            <h3>Multi Line</h3>
          </div>
          <div className="banner-col single-col">
            <h3>Single Line</h3>
          </div>
        </div>
        <Gallery
          items={bannerTypes}
          renderItem={(type) => {
            const data = bannerData[type];
            return (
              data.text && (
                <div className="banner-pair" key={type}>
                  <div className="banner-col multi-col">
                    <div className="banner-row" key={type}>
                      <h4>{type}</h4>
                      <Banner
                        type={type}
                        icon={data.icon}
                        title={data.title}
                        text={data.text}
                      />
                    </div>
                  </div>
                  <div className="banner-col single-col">
                    <div className="banner-row">
                      <Banner type={type} icon={data.icon} title={data.title} />
                    </div>
                  </div>
                </div>
              )
            );
          }}
        />
        <Gallery
          items={bannerTypes}
          renderItem={(type) => {
            const data = bannerData[type];
            return (
              !data.text && (
                <div className="banner-pair" key={type}>
                  <div className="banner-col multi-col"></div>
                  <div className="banner-col single-col">
                    <div className="banner-row">
                      <h4>{type}</h4>
                      <Banner type={type} icon={data.icon} title={data.title} />
                    </div>
                  </div>
                </div>
              )
            );
          }}
        />
      </div>
    </section>
  );
}
