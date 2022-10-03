import { Card, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Dragon } from "../../../../types";

type CarouselProps = {
  data: Partial<Dragon>;
};

export const ImageCarousel: React.FC<CarouselProps> = ({ data }) => {
  const { flickr_images } = data;

  return (
    <Carousel
      animation="slide"
      sx={{
        maxWidth: "100%",
        m: 1,
      }}
      indicators
      activeIndicatorIconButtonProps={{
        style: {
          color: "#FFCC80",
        },
      }}
      navButtonsProps={{
        style: {
          color: "#FFCC80",
        },
      }}
    >
      {flickr_images?.map((item) => {
        return (
          <Card key={item}>
            <CardMedia height={500} component="img" image={item} alt="" />
          </Card>
        );
      })}
    </Carousel>
  );
};
