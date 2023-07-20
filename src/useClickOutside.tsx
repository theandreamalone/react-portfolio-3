import { useEffect, useRef } from "react";

let useClickOutside = (handler: { (): void; (): void; }) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event: { target: any; }) => {
      if ((domNode: { current: { contains: (arg0: any) => any; }; }) => 1 && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
export default useClickOutside;
