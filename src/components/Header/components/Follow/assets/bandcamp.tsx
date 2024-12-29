import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={34} height={33} fill="none" {...props}>
        <path fill="#10AAF4"
            d="M17.214 0C8.21 0 .912 7.299.912 16.302c0 9.004 7.298 16.303 16.302 16.303s16.303-7.299 16.303-16.302C33.517 7.298 26.217 0 17.214 0Zm5.324 23.635H5.112L11.89 8.97h17.426l-6.778 14.665Z" />
    </svg>
)

export default SvgComponent