declare type BaseColors =
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'blue'
  | 'indigo'
  | 'pink'
  | 'black'
  | 'white';
declare type BaseSize = 'small' | 'medium' | 'large';

type Handler = (event: MouseEvent) => void;
