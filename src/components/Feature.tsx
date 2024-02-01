import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import Link from "next/link";

import { classNames } from "@utils/functions";

export type HeroIcon = keyof typeof SolidIcons | keyof typeof OutlineIcons;

interface IconProps {
  icon: string;
  className?: string;
  outline?: boolean;
}

export const HeroIcon = (props: IconProps): JSX.Element => {
  const { icon, className, outline } = props;
  const Icon = outline
    ? OutlineIcons[icon as HeroIcon]
    : SolidIcons[icon as HeroIcon];
  return Icon ? <Icon className={className} /> : <></>;
};

interface FeatureProps {
  icon: string;
  text: string;
  description: string;
  className?: string;
  tags?: string[];
}

export default function Feature({
  icon,
  text,
  description,
  className,
}: // tags,
FeatureProps) {
  function extractTextBeforeLink(input: string) {
    const regex = /\[[^\]]*\]\([^\)]*\)/;
    const linkIndex = input.search(regex);
    if (linkIndex !== -1) {
      return input.slice(0, linkIndex).trim();
    } else {
      return input;
    }
  }
  function parseString(input: string) {
    const regex = /\[(.*?)\]\((.*?)\)/;
    const match = input.match(regex);
    if (match) {
      return {
        text: match[1], 
        link: match[2], 
      };
    } else {
      return null;
    }
  }
  return (
    <div
      className={classNames(
        className ? className : "",
        "relative  rounded-xl bg-white p-3 text-secondary shadow lg:p-4"
      )}
    >
      <div className="mb-2 flex flex-col items-start gap-2 whitespace-pre-line lg:flex xl:gap-6">
        <div className="mb-3 mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary p-1 text-center text-white lg:mb-0 lg:h-16 lg:w-16 xl:p-3">
          <HeroIcon icon={icon} className="w-4 lg:w-7" outline />
        </div>
        <div>
          <span className="text-base font-semibold capitalize leading-normal tracking-wider xl:text-2xl xl:leading-loose">
            {text}
          </span>
          <p className="text-xxs lg:text-xs 2xl:text-sm leading-relaxed">
            <span>{extractTextBeforeLink(description)}</span>
            {parseString(description) && (
              <Link className="mx-1 text-primary font-semibold" href={`${parseString(description)?.link}`}>
                {parseString(description)?.text}
              </Link>
            )}
          </p>
        </div>
      </div>

      {/* <div className="absolute bottom-4 right-1">
        {
          tags?.map((tag, index) => {
            return <span key={index} className="p-1 px-3 mr-2 bg-secondary rounded-full text-xxs font-semibold tracking-widest text-white">{tag}</span>
          })
        }
      </div> */}
    </div>
  );
}
