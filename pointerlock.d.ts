interface HTMLElement {
  requestPointerLock(): void;
}

interface Document {
  onpointerlockchange: (ev: Event) => any;
  onpointerlockerror: (ev: Event) => any;
  pointerLockElement?: HTMLElement;
  exitPointerLock(): void;
}

interface MouseEvent {
  movementX?: number;
  movementY?: number;
}
