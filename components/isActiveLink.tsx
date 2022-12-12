import React from "react";
import { withRouter } from "next/router";

type Props = {
  router: any;
  href: any;
  children: any;
};

const isActiveLink = ({ router, href, children }: Props) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      className={`${isCurrentPath ? "underline" : "underline-none"}`}
      href={href}
      onClick={() => handleClick}
    >
      {children}
    </a>
  );
};

export default withRouter(isActiveLink);
