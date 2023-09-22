import MUICarousel from 'react-material-ui-carousel';
import CarouselItem, {
  CarouselItemType,
} from '@/components/Carousel/CarouselItem';

export type CarouselProps = {
  items: Array<CarouselItemType>;
};

function Carousel({ items }: CarouselProps) {
  return (
    <MUICarousel
      fullHeightHover
      autoPlay
      stopAutoPlayOnHover
      navButtonsAlwaysVisible
      animation="slide"
      indicators
      swipe={false}
    >
      {items.map((value) => (
        <CarouselItem item={value} />
      ))}
    </MUICarousel>
  );
}
export default Carousel;
