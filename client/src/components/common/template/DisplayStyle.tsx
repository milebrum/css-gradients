import { StyleType } from './types';

const DisplayStyle = ({ style, direction, colours }: any) => {
  switch (style) {
    case StyleType.LINEAR:
      return (`${style}(${direction}, ${colours.toString()})`);
    case StyleType.RADIAL:
      return (`${style}(${direction.replace(/to /g, 'at ')}, ${colours.toString()})`);
    default:
      return '';
  }
};

export default DisplayStyle;
