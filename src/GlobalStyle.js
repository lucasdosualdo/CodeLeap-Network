import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Roboto', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;      
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    box-sizing: border-box;
}

:root{
    --black-color: rgba(0, 0, 0, 1);
    --white-color: rgba(255, 255, 255, 1);
    --beige-color: rgba(221, 221, 221, 1);
    --blue-color: rgba(118, 149, 236, 1);
    --green-color: rgba(71, 185, 96, 1);
    --orange-color: rgba(255, 81, 81, 1);
}

h1 {
    font-size: 22px;
    font-weight: 700;
}
h2, p {
    font-size: 18px;
    font-weight: 700;
}
h3 {
    font-size: 16px;
    font-weight: 700;
}
h4 {
    font-size: 18px;
    font-weight: 400;
}
h5 {
    font-size: 16px;
    font-weight: 400;
}
h6 {
    font-size: 14px;
    font-weight: 400;
}
`

export default GlobalStyle;
