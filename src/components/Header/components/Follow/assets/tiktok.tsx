import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={29} height={33} fill="none" {...props}>
        <path fill="#10AAF4"
            d="M15.5.027C17.28 0 19.045.014 20.809 0a8.445 8.445 0 0 0 2.378 5.668l-.002-.002a9.522 9.522 0 0 0 5.725 2.43l.03.003v5.475a14.464 14.464 0 0 1-5.79-1.355l.089.036c-.852-.41-1.572-.83-2.256-1.3l.056.037c-.013 3.968.013 7.935-.027 11.889a10.35 10.35 0 0 1-1.854 5.387l.022-.034c-1.795 2.573-4.702 4.261-8.007 4.361h-.015a9.846 9.846 0 0 1-5.582-1.424l.043.025c-2.725-1.641-4.604-4.449-4.951-7.714l-.005-.044c-.027-.68-.04-1.36-.013-2.025.533-5.196 4.882-9.216 10.169-9.216.594 0 1.176.05 1.742.148l-.06-.01c.026 2.011-.055 4.023-.055 6.034a4.66 4.66 0 0 0-5.936 2.848l-.01.032a5.281 5.281 0 0 0-.228 1.55c0 .224.014.446.04.664l-.002-.026c.36 2.224 2.266 3.903 4.563 3.903.066 0 .132-.001.197-.004h-.01a4.559 4.559 0 0 0 3.748-2.168l.011-.02a3.11 3.11 0 0 0 .556-1.425v-.016c.136-2.432.082-4.85.095-7.283.013-5.476-.013-10.938.027-16.4l.005.003Z" />
    </svg>
)

export default SvgComponent