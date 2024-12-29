import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={47} height={33} fill="none" {...props}>
        <path fill="#10AAF4" fillRule="evenodd"
            d="M18.918 22.325V9.255c4.658 2.184 8.265 4.293 12.532 6.567-3.52 1.944-7.874 4.125-12.532 6.503Zm25.957-19.57C44.072 1.702 42.702.882 41.245.61c-4.286-.81-31.018-.813-35.3 0A6.221 6.221 0 0 0 2.84 2.175C-.927 5.659.253 24.34 1.161 27.368c.382 1.31.876 2.254 1.498 2.874.801.82 1.898 1.385 3.158 1.638 3.528.727 21.704 1.133 35.353.11a6.132 6.132 0 0 0 3.248-1.657c3.484-3.47 3.247-23.201.457-27.577Z"
            clipRule="evenodd" />
    </svg>
)

export default SvgComponent