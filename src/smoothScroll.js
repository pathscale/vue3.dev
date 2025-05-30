globalThis.smoothScroll = (target) => {
  let scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) {
      return;
    }
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop === 0);

  let targetY = 0;
  do {
    if (target === scrollContainer) {
      break;
    }
    targetY += target.offsetTop;
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    // biome-ignore lint/style/noParameterAssign: <explanation>
  } while ((target = target.offsetParent));

  const scroll = (c, a, b, i) => {
    // biome-ignore lint/style/noParameterAssign: <explanation>
    i++;
    if (i > 30) {
      return;
    }
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(() => {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
