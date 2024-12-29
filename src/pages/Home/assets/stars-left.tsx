import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
        fillRule: "evenodd", clipRule: "evenodd",
        strokeLinejoin: "round", strokeMiterlimit: 2,
    }} viewBox="0 0 78 69" {...props}>
        <path
            d="M0 182.7h3.6c1.1 0 2.3 0 3.4-.1 1.2 0 2.3-.1 3.5-.2 1 0 2-.1 3-.2s1.9-.2 2.9-.4c1.5-.2 3-.4 4.4-.8 1.6-.4 3.2-.9 4.6-1.8 1.2-.8 2.2-1.7 3-2.8 1-1.6 1.7-3.3 2.1-5.1.2-1 .4-1.9.6-2.9l.3-2.7c.1-1 .2-2.1.3-3.1 0-.6.1-1.2.1-1.8v-2.4c0-1.1.1-2.2.1-3.3v-.5h.2v2.8c0 1.2.1 2.4.2 3.7 0 1 .1 2.1.2 3.1.1 1.4.3 2.7.5 4.1.2 1.6.5 3.1 1 4.7.5 1.4 1.1 2.8 2 4 .8 1 1.8 1.8 3 2.5 1.8 1 3.7 1.6 5.7 1.9l3.9.6 3.3.3c1 0 2 .2 3 .2s2.1.1 3.1.1c1.3 0 2.6.1 4 .1h1.6c.1 0 .2 0 .4.1-.6 0-1.2 0-1.8.1-1.3 0-2.7.1-4 .1-1 0-2 0-2.9.1-1.3 0-2.5.2-3.8.3-.7 0-1.4 0-2.1.2-1 .1-1.9.2-2.9.4-1.2.2-2.5.4-3.6.7-2 .5-3.8 1.2-5.4 2.6-1.2 1-2.1 2.3-2.8 3.7-.5 1.2-.9 2.4-1.2 3.6-.2 1.1-.4 2.1-.6 3.2-.2 1.2-.3 2.4-.4 3.5v.9c0 1-.1 2-.1 3 0 1.3-.1 2.5-.2 3.8v2h-.1c0-.2 0-.4-.1-.6v-2.6c0-1 0-2-.1-3 0-.9-.1-1.8-.2-2.7-.1-1.4-.3-2.8-.5-4.2-.3-2.1-.6-4.1-1.4-6-.5-1.3-1.1-2.4-2-3.5-1.4-1.7-3.3-2.7-5.3-3.3-1.4-.4-2.7-.8-4.1-1-1.2-.2-2.4-.4-3.6-.5-.9-.1-1.9-.2-2.8-.2-1.3 0-2.6-.1-3.9-.2-1 0-2.1-.1-3.1-.1-1.1 0-2.3-.1-3.5-.1H0v-.3Z"
            style={{ fill: "orange", fillRule: "nonzero", }} transform="translate(0 -142.3)" />
        <path
            d="M50.7 141.9h5.9c.4 0 .8 0 1.3-.2.6-.1 1.3-.2 1.9-.3.7-.2 1.4-.4 2-.8.5-.3 1-.7 1.3-1.3.5-.7.7-1.5.9-2.3 0-.4.2-.9.3-1.3 0-.4 0-.8.1-1.2 0-.5 0-.9.1-1.4v-3.5 2.9c0 .5 0 .9.1 1.4 0 .6.1 1.2.2 1.8 0 .7.2 1.4.5 2.1.2.6.5 1.2.9 1.8.4.5.8.8 1.3 1.1.8.4 1.6.7 2.5.8.6 0 1.1.2 1.7.3.5 0 1 0 1.5.1h5.3-3.9c-.6 0-1.1 0-1.7.1H72c-.4 0-.8 0-1.3.2-.5 0-1.1.2-1.6.3-.9.2-1.7.5-2.4 1.1-.5.4-.9 1-1.2 1.6-.2.5-.4 1-.5 1.6-.1.5-.2 1-.2 1.4 0 .5-.1 1-.2 1.6v4.4-4c0-.6-.1-1.2-.2-1.9-.1-.9-.3-1.8-.6-2.7-.2-.6-.5-1.1-.9-1.6-.6-.7-1.4-1.2-2.3-1.5-.6-.2-1.2-.3-1.8-.4-.5 0-1-.2-1.6-.2-.4 0-.8 0-1.2-.1h-5.2l-.1.1Z"
            style={{ fill: "orange", fillRule: "nonzero", stroke: "orange", strokeWidth: ".3px", }}
            transform="translate(-.6 -129.6)" />
    </svg>
);

export default SvgComponent;