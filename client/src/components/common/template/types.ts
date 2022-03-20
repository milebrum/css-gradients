export interface ConfigPopover {
  isOpen: boolean;
  where?: DOMRect;
  content?: string;
}
export interface ConfigFormField {
  id: string;
  type: string;
  title: string;
  optionsType?: string;
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

export enum RadioButtonType {
  TEXT = 'text',
  ICON = 'icon',
}

export enum DirectionIconsType {
  ARROW_UP_LEFT = 'arrow-up-left',
  ARROW_UP = 'arrow-up',
  ARROW_UP_RIGHT = 'arrow-up-right',
  ARROW_LEFT = 'arrow-left',
  CIRCLE_MIDDLE = 'circle_middle',
  ARROW_RIGHT = 'arrow-right',
  ARROW_DOWN_LEFT = 'arrow-down-left',
  ARROW_DOWN = 'arrow-down',
  ARROW_DOWN_RIGHT = 'arrow-down-right',
}
