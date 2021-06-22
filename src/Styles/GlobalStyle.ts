import { css } from "@emotion/react";

const GlobalStyle = css`
  @font-face {
    font-family: "AppleSDGothicNeo";
    src: url("./fonts/AppleSDGothicNeoM.ttf") format("ttf");
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
    font-family: "AppleSDGothicNeo";
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
    font-family: "AppleSDGothicNeo";
  }
  body {
    line-height: 1;
    font-family: "AppleSDGothicNeo";
  }
  ol,
  ul {
    list-style: none;
    font-family: "AppleSDGothicNeo";
  }
  blockquote,
  q {
    quotes: none;
    font-family: "AppleSDGothicNeo";
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
    font-family: "AppleSDGothicNeo";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: "AppleSDGothicNeo";
  }
  body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
