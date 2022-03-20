import { CopyToClipboardType } from './types';

const CopyToClipboard = (toCopy: string, gradient: any) => {
  switch (toCopy) {
    case CopyToClipboardType.CSS:
      navigator.clipboard.writeText(
        `/* Created with https://www.css-gradients.herokuapp.com */
        background: ${gradient.gradient.colours[0]};
        background: -webkit-${gradient.gradient.style}(${gradient.gradient.direction}, ${gradient.gradient.colours.toString()});
        background: -moz-${gradient.gradient.style}(${gradient.gradient.direction}, ${gradient.gradient.colours.toString()});
        background: ${gradient.gradient.style}(${gradient.gradient.direction}, ${gradient.gradient.colours.toString()});`,
      );
      break;
    case CopyToClipboardType.SHARE_LINK:
      break;
    default:
      break;
  }
};

export default CopyToClipboard;
