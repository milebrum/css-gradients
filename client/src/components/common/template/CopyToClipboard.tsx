import RoutePaths from '../../../config/constants/route-paths';
import { CopyToClipboardType, StyleType } from './types';

const CopyToClipboard = (toCopy: string, gradient: any) => {
  switch (toCopy) {
    case CopyToClipboardType.CSS:
      navigator.clipboard.writeText(
        `/* Created with https://www.css-gradients.herokuapp.com */
        background: ${gradient.gradient.colours[0]};
        background: -webkit-${gradient.gradient.style}(${gradient.gradient.direction.replace(/to /g, '')}, ${gradient.gradient.colours});
        background: -moz-${gradient.gradient.style}(${gradient.gradient.direction.replace(/to /g, '')}, ${gradient.gradient.colours});
        background: ${gradient.gradient.style}(${gradient.gradient.style === StyleType.LINEAR ? gradient.gradient.direction : gradient.gradient.direction.replace(/to /g, 'at ')}, ${gradient.gradient.colours});`,
      );
      break;
    case CopyToClipboardType.SHARE_LINK:
      navigator.clipboard.writeText(
        `https://www.css-gradients.herokuapp.com${RoutePaths.main}?s=${gradient.gradient.style}&d=${gradient.gradient.direction.replace(/\s+/g, '-')}${gradient.gradient.colours.toString().replace(/,#|#+/g, '&c=')}`,
      );
      break;
    default:
      break;
  }
};

export default CopyToClipboard;
