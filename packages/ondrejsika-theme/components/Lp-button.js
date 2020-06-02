import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Button = props => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: 0.475rem 2.25rem;
    font-weight: bold;

    background: #131480;
    box-shadow: 9px 9px 6px #00000029;
    border-radius: 54px;
    color: white;

    ${props =>
      props.inverse &&
      css`
        background: #c8bfb0;
        box-shadow: 9px 9px 6px #00000029;
        border-radius: 54px;
        color: #131480;
      `}
  `;
  return (
    <>
      <Link href={props.href}>
        <WrapperButton
          // site={props.site}
          href={props.href}
          inverse={props.inverse}
        >
          {props.children}
        </WrapperButton>
      </Link>
    </>
  );
};

export default Button;
