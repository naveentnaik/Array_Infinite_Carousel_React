import React, { useEffect } from "react";

export const useVisibleNodes = (
  containerClassName,
  itemClassName,
  trigger = false
) => {
  const [visibleNodes, setVisibleNodes] = React.useState([]);

  useEffect(() => {
    const updateState = () => {
      const containerNode = document.querySelector(`.${containerClassName}`);
      if (!containerNode) {
        return;
      }

      const itemNodes = containerNode.querySelectorAll(`.${itemClassName}`);

      if (!itemNodes.length) {
        return;
      }

      const visibleNodes = [];
      itemNodes.forEach((node) => {
        const itemBounds = node.getBoundingClientRect();
        const carouselBounds = containerNode.getBoundingClientRect();
        const inView =
          itemBounds.left < carouselBounds.right &&
          itemBounds.right > carouselBounds.left &&
          itemBounds.top < carouselBounds.bottom &&
          itemBounds.bottom > carouselBounds.top;
        if (inView) {
          visibleNodes.push(node);
        }
      });

      setVisibleNodes(visibleNodes);
    };

    updateState();

    window.addEventListener("resize", updateState);
    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, [containerClassName, itemClassName, trigger]);

  return visibleNodes;
};
