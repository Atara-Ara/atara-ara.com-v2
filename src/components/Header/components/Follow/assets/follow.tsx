import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={181} height={24} fill="none" {...props}>
        <path fill="#F45397"
            d="M10.314 7.542h7.546v4.434h-7.559V24H2.748V11.976H0V7.542h2.755c.18-6.22 3.207-8.8 17.168-6.96v5.064c-8.298-1.143-9.482-.705-9.602 1.896h-.007ZM44.345 15.367c0 6.166-4.465 8.633-12.71 8.633-8.245 0-12.71-2.467-12.71-8.633 0-6.167 4.465-8.633 12.71-8.633 8.245 0 12.71 2.466 12.71 8.633Zm-7.56 0c0-3.087-1.716-4.32-5.15-4.32s-5.15 1.233-5.15 4.32c0 3.086 1.716 4.313 5.15 4.313s5.15-1.233 5.15-4.313ZM46.308 24V0h7.56v24h-7.56ZM56.416 24V0h7.56v24h-7.56ZM91.338 15.367c0 6.166-4.465 8.633-12.71 8.633-8.244 0-12.71-2.467-12.71-8.633 0-6.167 4.466-8.633 12.71-8.633 8.245 0 12.71 2.466 12.71 8.633Zm-7.559 0c0-3.087-1.717-4.32-5.15-4.32-3.434 0-5.151 1.233-5.151 4.32 0 3.086 1.717 4.313 5.15 4.313 3.434 0 5.151-1.233 5.151-4.313ZM127.492 7.347 121.11 24h-7.559l-4.126-10.892L105.306 24h-7.56l-6.38-16.653h7.066l3.78 9.93 3.779-9.93h6.868l3.78 9.93 3.779-9.93h7.074ZM154.263 11.875 131.984 0v23.748l22.279-11.874ZM181 12.126 158.721.25V24L181 12.126Z" />
    </svg>
)
export default SvgComponent