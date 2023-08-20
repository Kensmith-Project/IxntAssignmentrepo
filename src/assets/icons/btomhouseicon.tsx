import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

interface AccountIconSvgProps{
    svgProps?: React.SVGProps<Svg>
    PathProps?: React.SVGProps<Path>
    LinearProps?:React.SVGProps<LinearGradient>
    StopProps?:React.SVGProps<Stop>
}
const BtomHouseIcon = (props: AccountIconSvgProps) => {
    const {svgProps,  PathProps, LinearProps , StopProps} = props
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={24}
          fill="none"
          {...svgProps}
        >
          <Path
            fill="url(#a)"
            fillRule="evenodd"
            d="M18 19a.5.5 0 0 0 .5-.5V9.378a.5.5 0 0 0-.164-.37l-5.5-5a.5.5 0 0 0-.672 0l-5.5 5a.5.5 0 0 0-.164.37V18.5a.5.5 0 0 0 .5.5h11Zm1.5 2h-14a1 1 0 0 1-1-1v-8.5A.5.5 0 0 0 4 11H2.793a.5.5 0 0 1-.336-.87l9.37-8.518a1 1 0 0 1 1.346 0l9.37 8.518a.5.5 0 0 1-.336.87H21a.5.5 0 0 0-.5.5V20a1 1 0 0 1-1 1Z"
            clipRule="evenodd"
            {...PathProps}
          />
          <Path
            fill="url(#b)"
            d="M8.5 14.5c0-.276.225-.504.498-.458a3 3 0 0 1 2.46 2.46c.046.273-.182.498-.458.498H9a.5.5 0 0 1-.5-.5v-2Z"
            {...PathProps}
          />
          <Path
            fill="url(#c)"
            d="M8.5 10.5c0-.276.224-.502.5-.482a7 7 0 0 1 6.482 6.482c.02.276-.206.5-.482.5h-1a.542.542 0 0 1-.525-.5 5 5 0 0 0-4.476-4.475.542.542 0 0 1-.499-.525v-1Z"
            {...PathProps}
          />
          <Defs>
            <LinearGradient
              id="a"
              x1={1.5}
              x2={33.025}
              y1={1.352}
              y2={21.446}
              gradientUnits="userSpaceOnUse"
              {...LinearProps}
            >
              <Stop stopColor="#FF3A44"   {...StopProps}/>
              <Stop offset={1} stopColor="#FF8086" {...StopProps}/>
            </LinearGradient>
            <LinearGradient
              id="b"
              x1={1.5}
              x2={33.025}
              y1={1.352}
              y2={21.446}
              gradientUnits="userSpaceOnUse"
              {...LinearProps}
            >
              <Stop stopColor="#FF3A44" {...StopProps} />
              <Stop offset={1} stopColor="#FF8086"  {...StopProps}/>
            </LinearGradient>
            <LinearGradient
             {...LinearProps}
              id="c"
              x1={1.5}
              x2={33.025}
              y1={1.352}
              y2={21.446}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#FF3A44" {...StopProps} />
              <Stop offset={1} stopColor="#FF8086" {...StopProps}/>
            </LinearGradient>
          </Defs>
        </Svg>
      )
}
export default BtomHouseIcon
