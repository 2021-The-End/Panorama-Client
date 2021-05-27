import { css } from "@emotion/react";

const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
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
    font-family: "Noto Sans KR", sans-serif;
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
    font-family: "Noto Sans KR", sans-serif;
  }
  body {
    line-height: 1;
    font-family: "Noto Sans KR", sans-serif;
  }
  ol,
  ul {
    list-style: none;
    font-family: "Noto Sans KR", sans-serif;
  }
  blockquote,
  q {
    quotes: none;
    font-family: "Noto Sans KR", sans-serif;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
    font-family: "Noto Sans KR", sans-serif;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: "Noto Sans KR", sans-serif;
  }
  body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
