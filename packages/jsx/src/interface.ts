declare global {
  namespace JSX {
    interface Element {
      type: string;
      props: any;
      style: any;
      children: any;
      key: string;
      [propName: string]: any;
    }
    interface ElementClass {
      render(): any;
    }
    interface IntrinsicElements {
      group: any;
      rect: any;
      circle: any;
      text: any;
    }
  }
}

export default JSX;
