import React from "react";

function Link({ className, href, children }) {
  function onClick(event) {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }
  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      children={children}
    ></a>
  );
}
export default Link;
