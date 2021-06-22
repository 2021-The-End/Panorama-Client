import { css } from "@emotion/react";

const GlobalStyle = css`
  @font-face {
    font-family: "SF Pro KR";
    font-style: normal;
    font-weight: 300;
    src: local("â˜º"),
      url("https://www.apple.com/wss/fonts/SF-Pro-KR/v2/SFProKRDisplay_light.woff2")
        format("woff2");
    /* (C) 2018 Apple Inc. All rights reserved. */
  }

  @font-face {
    font-family: "SF Pro KR";
    font-style: normal;
    font-weight: 400;
    src: url("/wss/fonts/SF-Pro-KR/v2/SFProKRDisplay_regular.eot");
    src: local("â˜º"),
      url("https://www.apple.com/wss/fonts/SF-Pro-KR/v2/SFProKRDisplay_regular.woff2")
        format("woff2");
    /* (C) 2018 Apple Inc. All rights reserved. */
  }

  @font-face {
    font-family: "SF Pro KR";
    font-style: normal;
    font-weight: 600;
    src: local("â˜º"),
      url("https://www.apple.com/wss/fonts/SF-Pro-KR/v2/SFProKRDisplay_semibold.woff2")
        format("woff2");
    /* (C) 2018 Apple Inc. All rights reserved. */
  }

  @font-face {
    font-family: "SF Pro KR";
    font-style: normal;
    font-weight: 700;
    src: local("â˜º"),
      url("https://www.apple.com/wss/fonts/SF-Pro-KR/v2/SFProKRDisplay_bold.woff2")
        format("woff2");
    /* (C) 2018 Apple Inc. All rights reserved. */
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "SF Pro KR";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    font-family: "SF Pro KR";
  }
  body {
    line-height: 1;
    font-family: "SF Pro KR";
  }
  ol,
  ul {
    list-style: none;
    font-family: "SF Pro KR";
  }
  blockquote,
  q {
    quotes: none;
    font-family: "SF Pro KR";
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
    font-family: "SF Pro KR";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: "SF Pro KR";
  }
  body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
