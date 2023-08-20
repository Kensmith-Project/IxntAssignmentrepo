import * as React from "react"
import Svg, {SvgProps, Path} from 'react-native-svg';
interface AccountIconSvgProps{
    svgProps: React.SVGProps<Svg>
    GProps: React.SVGProps<Path>
}
const AccountIcon = (props: AccountIconSvgProps | any) => {

    const { svgProps, GProps } = props;
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...svgProps}
  >
    <Path
      fill="#A6A6A6"
      {...GProps}
      d="M12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12.5 20Zm-4.975-7.5c-.028-.276.199-.5.475-.5h1c.276 0 .496.225.542.498a3 3 0 0 0 5.916 0c.046-.273.266-.498.542-.498h1c.276 0 .503.224.475.5a5 5 0 0 1-9.95 0Z"
    />
  </Svg>
)}
export default AccountIcon
