export interface ConfigPopover {
  isOpen: boolean;
  where?: DOMRect;
  content?: string;
}
export interface ConfigFormField {
  id: string;
  type: string;
  title: string;
  options?: string[];
  label?: string;
  display: boolean;
  popover?: ConfigPopover;
}

export enum FormFieldOptions {
  STYLE = 'style',
  DIRECTION = 'direction',
  COLOURS = 'colours',
  OUTPUT_FORMAT = 'outputFormat'
}

export enum FormFieldType {
  RADIO = 'radio',
  INPUT = 'input',
  COLOUR = 'colour',
}

export enum StyleType {
  LINEAR = 'linear-gradient',
  RADIAL = 'radial-gradient',
}

export enum DirectionIconsType {
  LEFT_TOP = 'to left top',
  TOP = 'to top',
  RIGHT_TOP = 'to right top',
  LEFT = 'to left',
  CENTER = 'at center center',
  RIGHT = 'to right',
  LEFT_BOTTOM = 'to left bottom',
  BOTTOM = 'to bottom',
  RIGHT_BOTTOM = 'to right bottom',
}

export enum CopyToClipboardType {
  CSS = 'CSS',
  SHARE_LINK = 'shareLink'
}
