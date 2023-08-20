import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface HeartIconSvgProps {
  svgProps: React.SVGProps<Svg>;
  GProps: React.SVGProps<Path>;
}
const HeartBottomIcon = (props: HeartIconSvgProps | any) => {
  const {svgProps, GProps} = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...svgProps}>
      <Path
        fill="#A6A6A6"
        d="M20.743 4.757a6 6 0 0 1 .236 8.236l-8.126 8.138a.5.5 0 0 1-.708 0l-8.124-8.138a6.002 6.002 0 0 1 8.135-8.751.568.568 0 0 0 .69 0 6 6 0 0 1 7.897.515ZM5.672 6.172a4 4 0 0 0-.192 5.451l6.666 6.677a.5.5 0 0 0 .708 0l6.666-6.676a4 4 0 0 0-5.646-5.64l-3.849 3.85a.5.5 0 0 1-.707 0l-.707-.708a.5.5 0 0 1 0-.707l2.395-2.397A.098.098 0 0 0 11 5.877a4 4 0 0 0-5.328.295Z"
        {...GProps}
      />
    </Svg>
  );
};
export default HeartBottomIcon;
