import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
        fillRule: "evenodd", clipRule: "evenodd",
        strokeLinejoin: "round", strokeMiterlimit: 2,
    }} viewBox="0 0 1782 396" {...props}>
        <path
            d="M153 99c0 36.65-3.64 66.05-9.64 89.86H90.09v54h30.95c-28.92 45-66.95 45-66.95 45l.02 54s84.07 0 127.56-99h61.42v-54H198.6c2.34-11.17 4.26-23.15 5.67-36h83.81v135h-45v54h99v-189L342 99M612 99V54h-54v45H396v99h54v-45h108s0 135-135 135h-27v54h27s189 0 189-189h72V99h-72Z"
            style={{ fill: "#10aaf4", fillRule: "nonzero", }} />
        <path d="M846 153h153v108H846z" style={{ fill: "#10aaf4", }} />
        <path
            d="M738 0v396h1044V0H738Zm315 99v243h-54v-27H846v27h-54V99h261Zm295.42 239.75c-43.87-19.55-77.6-41.08-106.16-67.75l35.49-38.01c24.21 22.61 53.4 41.12 91.84 58.25l-21.17 47.5v.01Zm14.74-107.97c-21.57-4.04-37.03-12.03-48.11-21.41 9.04-15.52 16.33-34.12 20.86-56.37H1233v36c0 153-125.99 152.99-125.99 152.99V288c71.99 0 71.99-99 71.99-99v-36h-72V99h72V54h54v45h162s0 67.81-31.84 131.78ZM1728 153v189h-99v-54h45V153h-83.81c-1.41 12.85-3.33 24.83-5.67 36h44.49v54h-61.42c-43.49 99-127.56 99-127.56 99l-.02-54s38.03 0 66.95-45h-30.95v-54h53.27c6-23.81 9.73-53.35 9.73-90h189v54h-.01Z"
            style={{ fill: "#10aaf4", fillRule: "nonzero", }} />
        <path d="M846 153h153v108H846z" style={{ fill: "#10aaf4", fillRule: "nonzero", }} />
        <path d="M18 0h720v18H18zM18 378h720v18H18zM0 0h18v396H0z" style={{ fill: "#10aaf4", }} />
    </svg>
)
export default SvgComponent