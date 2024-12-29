import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
        fillRule: "evenodd", clipRule: "evenodd",
        strokeLinejoin: "round", strokeMiterlimit: 2,
    }} viewBox="0 0 50 24" {...props}>
        <path d="M154.263 11.875 131.984.001v23.748l22.279-11.874ZM181 12.126 158.721.251V24L181 12.126Z" style={{
            fill: "#f45397", fillRule: "nonzero",
        }} transform="translate(-131.984)" />
    </svg>
)
export default SvgComponent