import { css } from '@emotion/react'

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  input {
    width: 100%;
    border: none;
    overflow: visible;
  }
  textarea {
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  hr {
    border: 0;
  }
  b,
  strong {
    font-weight: inherit;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;

    &:not(:disabled) {
      cursor: pointer;
    }
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  [type="search"] {
    -webkit-appearance: none;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration,
  [type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  iframe {
    border: 0;
  }
  [hidden] {
    display: none !important;
  }
  dialog {
    border: none;
    background: none;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    height: auto;
  }
  details {
    summary {
      &::-webkit-details-marker {
        display: none;
      }
    }
  }
`
