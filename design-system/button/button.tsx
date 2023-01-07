import classNames from 'classnames';
import { ComponentProps } from 'react';

// get the button type and content
import { ButtonContent } from './button-content'
import type { ButtonContentProps } from './button-content';



export type ButtonSize = "sm" | "md";



// use the React library to derive intrinsic props, then add to it myself
type IntrinsicAnchorProps = ComponentProps<"a">;
type IntrinsicButtonProps = ComponentProps<"button">;


type CommonProps = {
  intent?: "primary" | "secondary" | "danger";
  variant?: "link" | "outline" | "solid";
} & ButtonContentProps;


type AnchorProps = {
  as: "a",
  href: IntrinsicAnchorProps["href"];
} & CommonProps;

type ButtonProps = {
  as?: "button";
  href?: never;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: IntrinsicButtonProps["onClick"];
  type?: IntrinsicButtonProps["type"];
} & CommonProps;

export type UseProps = AnchorProps | ButtonProps;


// if it turns out that the button is anchor, make sure result is AnchorProps
function isAnchor(props: UseProps) : props is AnchorProps {
  return (props as AnchorProps).as === "a";
}


// either return a button or an a tag
export function Button({ ...props } : UseProps) {
  // need to detect if a tag based on props

  // get the common props first
  const {
    children, iconLeft, iconRight,
    size, intent = "primary", variant = "solid",
  } = props;

  if (!("as" in props)) {
    props.as = "button";
  }

  const className = classNames("rounded-full transition-colors bg-[red]", {
    "text-sm py-2 px-6": size === "sm",
    "text-sm py-4 px-6": size === "md",
    "bg-[green] text-white": intent === "primary",
    "bg-[blue] text-white": intent === "secondary",
    "bg-[red]": intent === "danger",
  })


  if (isAnchor(props)) {
    const { href } = props;
    const isExternalLink = href?.startsWith("http");

    const anchorProps: IntrinsicAnchorProps = {
      className,
      href
    }

    return (
      <a {...anchorProps}>
        <ButtonContent iconLeft={iconLeft} iconRight={iconRight} >
          {children}
        </ButtonContent>
      </a>
    )

  }

  return (
    <button className={classNames(className, {})}>
      <ButtonContent 
        iconLeft={iconLeft}
        iconRight={iconRight}
      >
        { children }
      </ButtonContent>
    </button>
  );
}
