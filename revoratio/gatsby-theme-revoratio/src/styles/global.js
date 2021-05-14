import React from 'react';
import { useTheme, Global, css } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-size: 16px;
          font-family: ${theme.fonts.primary}, sans-serif;
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
          color: ${theme.colors.text};
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        h1 {
          font-size: 32px;
          color: ${theme.colors.title};
          font-weight: 400;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
        }

        h3 {
          font-size: 20px;
          font-weight:600;
        }

        h4 {
          font-size: 16px;
          font-weight: 600;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.title};
          margin: 24px 0 16px 0;
        }

        p {
          color: ${theme.colors.text};
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em;
          background-color: #44475a;
          color: rgba(248, 248, 242);
          font-size: 14px;
          border-radius: 3px;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        h1 code.inline-code,
        h2 code.inline-code {
          font-size: calc(100% - 5px);
          padding: 4px;
        }

        a {
          color: ${theme.colors.primary};
          font-weight: 500;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        blockquote {
          margin: 32px 24px;
          width: 100%;
          border-left: 2px solid ${theme.colors.primary};
          stroke-linecap: round;
          padding-left: 16px;

            a {
              color: ${theme.colors.primary};
            }
        }

        hr {
          border: 0;
          height: 0;
          margin:48px 0px;
          border-top: 1px solid ${theme.colors.soft};
          border-bottom: none;
        }

        table {
          border-collapse: collapse;
          margin-bottom: 24px;
          width: 100%;

          th,
          td {
            margin: 0;
            color: ${theme.colors.text};
            border-bottom: 1px solid ${theme.colors.soft};
            padding: 8px 2px;

          }

          tr {
            th {
              color: ${theme.colors.title};
              border-bottom: 1px solid ${theme.colors.text};
              font-weight: bold;

              :empty {
                display:none;
              }
            }
          }
        }

        iframe {
          margin-bottom: 16px;
        }

        img {
          max-width: 100%;
        }

        .gatsby-resp-image-wrapper {
          margin:0px 12px;
        }

        ul{
          color: ${theme.colors.text};
          padding-left: 36px;

          li {
            line-height: 32px;

            ::marker {
              color: ${theme.colors.primary};
            }
          }
        }

       ol {
          color: ${theme.colors.text};
          padding-left: 40px;

          li {
            line-height: 32px;

            ::marker {
              color: ${theme.colors.grey};
            }
          }
        }

        li ul,
        li ol {
          margin-bottom: 0;
        }

        .gatsby-highlight {
          font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;

          position: relative;
          z-index: 0;
          margin: 0 0 16px 0;
          overflow: auto;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-'] code {
          font-family: inherit;
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 12px;
          font-family: inherit;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before,
        pre[class~='language-yml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }
      `}
    />
  );
}
