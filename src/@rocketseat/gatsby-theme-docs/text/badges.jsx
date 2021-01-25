/**@jsx jsx */

import { css, jsx } from '@emotion/core'

export function Badges() {
  return (
    <div css={css({ display: 'flex', a: { marginRight: '5px' } })}>
      <a href="https://docs.rs/crate/napi" target="_blank" rel="noreferrer">
        <img src="https://docs.rs/napi/badge.svg" alt="rust doc" />
      </a>
      <a href="https://crates.io/crates/napi" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/crates/v/napi.svg" alt="rust crates" />
      </a>
      <a
        href="https://www.npmjs.com/package/@napi-rs/cli"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="npm Downloads"
          src="https://img.shields.io/npm/dm/@napi-rs/cli"
        />
      </a>
      <a
        href="https://github.com/napi-rs/napi-rs"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Github stars"
          src="https://img.shields.io/github/stars/napi-rs/napi-rs?style=social"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/sponsors/Brooooooklyn?o=esb"
        css={css({
          display: 'flex',
          borderRadius: '3px',
          background: 'white',
          alignItems: 'center',
          fontSize: '12px',
          color: 'black',
          padding: '0 5px',
          height: '20px',
          svg: {
            fill: '#ea4aaa',
            marginRight: '5px',
          },
        })}
      >
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
          />
        </svg>
        <span>Sponsor</span>
      </a>
    </div>
  )
}
