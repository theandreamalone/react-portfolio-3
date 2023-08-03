import { Tooltip as BsTooltip } from "bootstrap";
import React, { useEffect, useRef } from "react";

interface TooltipProps {
  text: string;
  placement: any;
  children: any;
}

export const Tooltip = (p: TooltipProps) => {
  const childRef: any = useRef(undefined);

  useEffect(() => {
    const t = new BsTooltip(childRef.current, {
      title: p.text,
      placement: p.placement,
      trigger: "hover",
    });
    return () => t.dispose();
  }, [p.text]);

  return React.cloneElement(p.children, { ref: childRef });
};
