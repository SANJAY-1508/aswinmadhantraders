import React ,{useState,useEffect} from "react";
import API_DOMAIN from "../../config/config";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [banner, setbanner] = useState([]);

  useEffect(() => {
    fetch(`${API_DOMAIN}/home_banner.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setbanner(data.body.banner);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log("banner", banner);
  return (
    <div>
      <Carousel>
          {banner.length > 0 ? (
            banner.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  src={item.img}
                  className="img-fluid w-100"
                  alt={`Banner ${item.id}`}
                  style={{
                    width: "1500px",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
              </Carousel.Item>
            ))
          ) : (
            <>
              {/* <Carousel.Item>
                <img
                  src={require("../assets/images/banner_two.jpg")}
                  className="img-fluid w-100"
                  alt="product name"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require("../assets/images/banner_four.jpg")}
                  className="img-fluid w-100"
                  alt="product name"
                />
              </Carousel.Item> */}
            </>
          )}
        </Carousel>
    </div>
  );
};

export default Banner;
