import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logoLight from '../assets/logo-symbol.png';
import logoDark from '../assets/logo-symbol-dark.png';

export default function AboutMe() {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const css = `/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: ${isDarkMode ? 'rgb(230, 230, 230)' : 'rgb(55, 53, 47)'};
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: ${isDarkMode ? '#a0a0a0' : '#444'};
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

/* Override strong tags inside headings to maintain consistent weight */
h1 strong,
h2 strong,
h3 strong {
	font-weight: 600;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ddd'};
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 10px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.09)' : 'rgba(55, 53, 47, 0.09)'};
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.collection-content td {
	white-space: pre-wrap;
	word-break: break-word;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.18)' : 'rgba(55, 53, 47, 0.18)'};
}

table,
th,
td {
	border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.09)' : 'rgba(55, 53, 47, 0.09)'};
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: ${isDarkMode ? 'rgba(230, 230, 230, 0.6)' : 'rgba(55, 53, 47, 0.6)'};
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	padding-inline-start: 0;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(206, 205, 202, 0.5)'};
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.page-description {
	margin-bottom: 2em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgb(247, 246, 243)'};
	color: ${isDarkMode ? '#e6e6e6' : 'black'};
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.callout img.notion-static-icon {
	width: 1em;
	height: 1em;
}

.callout p {
	margin: 0;
}

.callout h1,
.callout h2,
.callout h3 {
	margin: 0 0 0.6rem;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : '#000'};
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(135, 131, 120, 0.15)'};
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: ${isDarkMode ? '#ff6b6b' : '#eb5757'};
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgb(55, 53, 47)'};
}

blockquote.quote-large {
	font-size: 1.25em;
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: ${isDarkMode ? 'rgba(230, 230, 230, 0.6)' : 'rgba(55, 53, 47, 0.6)'};
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: ${isDarkMode ? 'rgba(230, 230, 230, 1)' : 'rgba(44, 44, 43, 1)'};
}
.highlight-gray {
	color: ${isDarkMode ? 'rgba(160, 160, 160, 1)' : 'rgba(125, 122, 117, 1)'};
	fill: ${isDarkMode ? 'rgba(160, 160, 160, 1)' : 'rgba(125, 122, 117, 1)'};
}
.highlight-brown {
	color: rgba(159, 118, 90, 1);
	fill: rgba(159, 118, 90, 1);
}
.highlight-orange {
	color: rgba(210, 123, 45, 1);
	fill: rgba(210, 123, 45, 1);
}
.highlight-yellow {
	color: rgba(203, 148, 52, 1);
	fill: rgba(203, 148, 52, 1);
}
.highlight-teal {
	color: rgba(80, 148, 110, 1);
	fill: rgba(80, 148, 110, 1);
}
.highlight-blue {
	color: rgba(56, 125, 201, 1);
	fill: rgba(56, 125, 201, 1);
}
.highlight-purple {
	color: rgba(154, 107, 180, 1);
	fill: rgba(154, 107, 180, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(207, 81, 72, 1);
	fill: rgba(207, 81, 72, 1);
}
.highlight-default_background {
	color: ${isDarkMode ? 'rgba(230, 230, 230, 1)' : 'rgba(44, 44, 43, 1)'};
}
.highlight-gray_background {
	background: ${isDarkMode ? 'rgba(255, 255, 255, 0.07)' : 'rgba(42, 28, 0, 0.07)'};
}
.highlight-brown_background {
	background: rgba(139, 46, 0, 0.086);
}
.highlight-orange_background {
	background: rgba(224, 101, 1, 0.129);
}
.highlight-yellow_background {
	background: rgba(211, 168, 0, 0.137);
}
.highlight-teal_background {
	background: rgba(0, 100, 45, 0.09);
}
.highlight-blue_background {
	background: rgba(0, 124, 215, 0.094);
}
.highlight-purple_background {
	background: rgba(102, 0, 178, 0.078);
}
.highlight-pink_background {
	background: rgba(197, 0, 93, 0.086);
}
.highlight-red_background {
	background: rgba(223, 22, 0, 0.094);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: ${isDarkMode ? 'rgba(160, 160, 160, 1)' : 'rgba(125, 122, 117, 1)'};
	fill: ${isDarkMode ? 'rgba(160, 160, 160, 1)' : 'rgba(125, 122, 117, 1)'};
}
.block-color-brown {
	color: rgba(159, 118, 90, 1);
	fill: rgba(159, 118, 90, 1);
}
.block-color-orange {
	color: rgba(210, 123, 45, 1);
	fill: rgba(210, 123, 45, 1);
}
.block-color-yellow {
	color: rgba(203, 148, 52, 1);
	fill: rgba(203, 148, 52, 1);
}
.block-color-teal {
	color: rgba(80, 148, 110, 1);
	fill: rgba(80, 148, 110, 1);
}
.block-color-blue {
	color: rgba(56, 125, 201, 1);
	fill: rgba(56, 125, 201, 1);
}
.block-color-purple {
	color: rgba(154, 107, 180, 1);
	fill: rgba(154, 107, 180, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(207, 81, 72, 1);
	fill: rgba(207, 81, 72, 1);
}
.block-color-default_background {
	color: inherit;
	fill: inherit;
}
.block-color-gray_background {
	background: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(240, 239, 237, 1)'};
}
.block-color-brown_background {
	background: rgba(245, 237, 233, 1);
}
.block-color-orange_background {
	background: rgba(251, 235, 222, 1);
}
.block-color-yellow_background {
	background: rgba(249, 243, 220, 1);
}
.block-color-teal_background {
	background: rgba(232, 241, 236, 1);
}
.block-color-blue_background {
	background: rgba(229, 242, 252, 1);
}
.block-color-purple_background {
	background: rgba(243, 235, 249, 1);
}
.block-color-pink_background {
	background: rgba(250, 233, 241, 1);
}
.block-color-red_background {
	background: rgba(252, 233, 231, 1);
}
.select-value-color-default { background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.07)' : 'rgba(42, 28, 0, 0.07)'}; }
.select-value-color-gray { background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.11)' : 'rgba(28, 19, 1, 0.11)'}; }
.select-value-color-brown { background-color: rgba(127, 51, 0, 0.156); }
.select-value-color-orange { background-color: rgba(196, 88, 0, 0.203); }
.select-value-color-yellow { background-color: rgba(209, 156, 0, 0.282); }
.select-value-color-green { background-color: rgba(0, 96, 38, 0.156); }
.select-value-color-blue { background-color: rgba(0, 118, 217, 0.203); }
.select-value-color-purple { background-color: rgba(92, 0, 163, 0.141); }
.select-value-color-pink { background-color: rgba(183, 0, 78, 0.152); }
.select-value-color-red { background-color: rgba(206, 24, 0, 0.164); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	`;

  const htmlContent = `<article id="2c267ccc-6bef-8082-ba66-df87a290220d" class="page sans"><header><h1 class="page-title" dir="auto">Vishal Mehta </h1><p class="page-description" dir="auto"></p></header><div class="page-body"><div style="display:contents" dir="auto"><h3 id="2c267ccc-6bef-8020-bdac-dead6ad25d2d" class="">Founder, IDYeah Studio</h3></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80dc-9280-e0dc8dc88bb2" class="">Design Leader • Human Centered AI Practitioner • Author • Mentor • Speaker</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-8035-b362-c773820ebaf3"/></div><div style="display:contents" dir="ltr"><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="2c267ccc-6bef-80ce-abd9-d44e6c78b248"><div style="font-size:1.5em"><span class="icon">✨</span></div><div style="width:100%"><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-802f-aa4f-e372c280170c" class=""><strong>I blend engineering depth, design clarity, and AI-driven acceleration to help teams move forward with confidence.</strong></p></div></div></figure></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-80c8-a0ac-dbda065e17dd" class="">About Me</h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80cc-8628-c36e2339b6a2" class="">I'm a Design Leader with 25 years across engineering, UX, HCI, and product innovation. My work sits at the intersection of <strong>clarity, usability, and storytelling</strong>, helping teams build products that feel intentional, trustworthy, and human.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80c1-a856-c9d08f754a3e" class="">My journey has taken me through engineering roles, entrepreneurship, enterprise design leadership, academic research, and AI-driven innovation. Today, I bring this mix of experience into <strong>IDYeah Studio</strong>, where I help founders and teams express their product's truth—and ship with confidence.</p></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-8029-8b5c-dd4f84738e00" class="">A Career Built on Two Worlds: Engineering + Design</h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-802f-a261-fa47d9fdd6f0" class="">I began my career as a software engineer, spending nearly a decade building enterprise systems and learning how large organizations function from the inside. That technical foundation eventually led me toward UX, where I found the ability to shape not just how software works, but how people <em>experience</em> it.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80bd-a7d5-c4e54beffc9c" class="">This dual background still defines my work:</p></div><div style="display:contents" dir="auto"><blockquote id="2c267ccc-6bef-8073-8e07-dee850489c5c" class=""><strong>technical depth + design clarity = practical, real-world solutions.</strong></blockquote></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-807a-a9a5-cad18bfb6fe6" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-807a-b4ec-f328db684af4"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-80a9-b1f6-cd3f5613ddb9" class="">Enterprise Impact</h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8072-8b2e-e404e33e6263" class="">Across roles at <strong>Apple, Walmart, Intuitive Surgical, Ionate, Seagate, and Synactive</strong>, I've led high-stakes design initiatives that improved workflows, reduced friction, and aligned diverse teams.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8005-a729-fc6b5dcdd425" class="">A few highlights:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8002-be75-fb56eb7f8131" class="bulleted-list"><li style="list-style-type:disc">At <strong>Apple Pay</strong>, I redesigned internal engineering platforms, improved release visibility, applied ML for automation, and shaped narratives for internal adoption.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8081-b2d8-ffe0072d3217" class="bulleted-list"><li style="list-style-type:disc">At <strong>Walmart</strong>, I led the creation of the DV Design System—Walmart's first AI-powered enterprise design framework—enabling record launches with zero design debt and widespread adoption across teams.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80a9-91c8-c11523ddf4bf" class="bulleted-list"><li style="list-style-type:disc">At <strong>Intuitive Surgical</strong>, I helped deliver Customer Portal 2.0 and pioneered design system adoption that accelerated product launches.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-809b-ba96-fe34ee3c09bf" class="bulleted-list"><li style="list-style-type:disc">At <strong>Ionate</strong>, I transformed the company's product and brand story, improved AI/ML front-end pipelines, and helped secure funding and partnerships including Accenture.</li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-806b-b4a7-f3deac30e9ad" class="">Across these roles, the theme remained constant:</p></div><div style="display:contents" dir="auto"><blockquote id="2c267ccc-6bef-80ba-89f5-c3d591a3d700" class=""><strong>create clarity, remove complexity, and move the product forward.</strong></blockquote></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-804e-ab7e-d6439b67520d" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-806a-85a8-e37ce0890e5b"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-8095-86cb-d37d5d13e969" class=""><strong>Entrepreneurship: IDYeah Creations (India)</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8089-b74d-f6afe54b203b" class="">Before moving to the U.S., I spent six years running <strong>IDYeah Creations</strong>, a UX and branding consultancy in India.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80af-9e3e-d5574b982931" class="">Key contributions include:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80dd-98de-ff70eed2d468" class="bulleted-list"><li style="list-style-type:disc">Introducing Synactive's GuiXT to India and transforming SAP workflows for enterprise clients like <strong>Essar, Raymond, Liberty Shoes, Mercedes Benz, Suzlon</strong>.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8057-a4f7-da18b72fef2d" class="bulleted-list"><li style="list-style-type:disc">Creating the full brand identity for <strong>Midas Touch Consultants</strong>, which went on to become an award-winning digital marketing firm.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8063-a4f1-ee176f957aac" class="bulleted-list"><li style="list-style-type:disc">Publishing early UX thought-leadership (200+ articles) and helping clients adopt UX long before it became mainstream.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8048-8d36-e1a72f7b1cae" class="bulleted-list"><li style="list-style-type:disc">Leading research collaborations with <strong>VIT Pune</strong>, co-authoring ACM papers, mentoring students, and sponsoring the APCHI conference.</li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8051-a051-c6deb5df7c46" class="">This chapter shaped my ability to combine <strong>UX, brand, storytelling, and product strategy</strong>—the same blend I bring to IDYeah Studio today—augmented with <strong>human-centered AI</strong>.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-800e-bb82-e4b1f024b284" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-8006-a846-c218e2725c5a"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-80b2-876d-d34722463779" class=""><strong>Research, Speaking, and Thought Leadership</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8074-b910-c48f76d7bf79" class="">My work also extends into academia and global design communities:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80f1-abc3-f910f26b6cbc" class="bulleted-list"><li style="list-style-type:disc">Co-authored <strong>peer-reviewed research papers and book chapters</strong> in human-computer interaction, accessibility, emotional design, AR/VR interaction, and ethical AI.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-803f-a5de-dfe012c31d70" class="bulleted-list"><li style="list-style-type:disc">Published <strong>200+ articles</strong> across UX Matters, Bootcamp, All Tech Magazine, SAP Community, UX Booth, and Medium.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8031-b7ae-cfcfebe04802" class="bulleted-list"><li style="list-style-type:disc">Speaker at conferences including <strong>World Usability Congress (2025)</strong>, <strong>APCHI</strong>, and international HCI workshops.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-802a-b710-d5a4b0c85014" class="bulleted-list"><li style="list-style-type:disc">Interviewed and profiled by <strong>Authority Magazine, Tech Bullion, All Tech Magazine</strong>, and Business Wire.</li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8062-aad9-c225c53c88b1" class="">These experiences help me bring a broader, future-forward perspective to founders and teams.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8078-8274-c962296d0855" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-807a-8054-c768f74f9616"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-808b-8c81-d2d323cfa1e8" class=""><strong>Judge, Reviewer & Mentor</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80d7-bd78-fee015f0337e" class="">I regularly judge and review work across design, AI, engineering education, and human-computer interaction:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-802b-968b-d80e521f10c3" class="bulleted-list"><li style="list-style-type:disc">Judge at <strong>TreeHacks (Stanford)</strong>, <strong>CalHacks (Berkeley)</strong>, <strong>UI/UX Hackathons</strong>, <strong>Hack for Humanity</strong>, and the <strong>International Customer Experience Awards (ICXA)</strong>.</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-803c-9bad-f81874b8f27c" class="bulleted-list"><li style="list-style-type:disc">Reviewer for major conferences including <strong>IEEE EDUCON</strong>, <strong>IndiaHCI</strong>, <strong>ICEI</strong>, and the <strong>ICAD Workshop on Wellbeing & Peace</strong>.</li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80e1-b265-f602a868a1a2" class="">This keeps me connected to emerging talent, new ideas, and future design leaders.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80a5-a43a-cd0caf417b9c" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-80f0-ae40-c8d991bff8d6"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-80ff-aac6-c7bbbaca0b4a" class=""><strong>Now: IDYeah Studio</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8029-b652-e39cbb82b9a3" class="">IDYeah Studio is where all of this converges—enterprise depth, startup speed, UX craft, brand clarity, product storytelling, and human-centered AI.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80ca-846e-ed774324cc42" class="">I work directly with founders and teams to help them:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80d0-aff2-c36099160f7b" class="bulleted-list"><li style="list-style-type:disc">position their product and narrative clearly</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80ed-bde2-c5875453b62a" class="bulleted-list"><li style="list-style-type:disc">strengthen their brand and UX</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8073-ac89-d5f32882b16a" class="bulleted-list"><li style="list-style-type:disc">remove complexity from their product experience</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8009-85c2-dfa9e69a376d" class="bulleted-list"><li style="list-style-type:disc">adopt AI thoughtfully and ethically</li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8066-80d8-d2a325cc5129" class="bulleted-list"><li style="list-style-type:disc">move faster without losing quality</li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8032-a58f-fefc5b6da1cf" class="">My goal is simple:</p></div><div style="display:contents" dir="auto"><blockquote id="2c267ccc-6bef-80de-8dcc-e09b144987cf" class=""><strong>Give teams the clarity they need to build products that make sense, feel trustworthy, and ship confidently.</strong></blockquote></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8071-89c9-c672795f3c54" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-802c-9712-ef9311e904a2"/></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-8023-bbfb-f6e152804313" class=""><strong>Philosophy</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8008-b574-da20529c99cd" class="">I design for the real world—constraints, deadlines, imperfect information, and evolving products.</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80d6-a6e9-d8d6f1638146" class="">Three beliefs guide my work:</p></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-8028-b0d0-c3f1cb2e1e49" class="bulleted-list"><li style="list-style-type:disc"><strong>Clarity builds confidence.</strong></li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-80f3-a8c9-f2de5d76ba6f" class="bulleted-list"><li style="list-style-type:disc"><strong>Consistency builds trust.</strong></li></ul></div><div style="display:contents" dir="auto"><ul id="2c267ccc-6bef-805d-aa55-d2192a77aa33" class="bulleted-list"><li style="list-style-type:disc"><strong>Products succeed when they converge, not when they expand.</strong></li></ul></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80b0-9185-f5deab9bf0a2" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2c267ccc-6bef-80ec-a5ba-f16eb457bd6d"/></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8097-ab0a-f46e87229135" class="">
</p></div><div style="display:contents" dir="auto"><h2 id="2c267ccc-6bef-8048-894e-fc03f6b080dd" class=""><strong>Let's Connect</strong></h2></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-806d-867a-f2f6c9a775e9" class=""><strong>Vishal Mehta</strong></p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-80e1-8112-d99b969162bf" class="">Founder, IDYeah Studio</p></div><div style="display:contents" dir="auto"><p id="2c267ccc-6bef-8080-b7be-fcfed8870cf8" class=""><a href="mailto:vishal@idyeah.studio">vishal@idyeah.studio</a> • <a href="https://www.linkedin.com/in/vishalme">LinkedIn</a></p></div></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span>`;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      minHeight: '100vh',
      backgroundColor: theme.bg,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
      transition: 'background-color 0.3s ease'
    }}>
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          right: '24px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Theme Toggle - Left Side */}
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '9999px',
            border: `1px solid ${theme.borderStrong}`,
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '14px',
            fontWeight: 400,
            color: theme.text
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
          }}
        >
          {isDarkMode ? (
            // Moon icon for dark mode
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 8.5C14.5 11.8137 11.8137 14.5 8.5 14.5C5.18629 14.5 2.5 11.8137 2.5 8.5C2.5 5.18629 5.18629 2.5 8.5 2.5C8.67742 2.5 8.85323 2.50806 9.02694 2.52387C7.91935 3.28226 7.21774 4.56452 7.21774 6C7.21774 8.34032 9.08871 10.2113 11.429 10.2113C12.8645 10.2113 14.1468 9.50968 14.9052 8.40209C14.921 8.57581 14.929 8.75161 14.929 8.92903C14.929 8.95242 14.9145 8.97581 14.9145 8.99919L14.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            // Sun icon for light mode
            <svg width="16" height="16" viewBox="0 0 19.6875 19.3457" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66797 2.03125C10.2246 2.03125 10.6836 1.58203 10.6836 1.01562C10.6836 0.449219 10.2246 0 9.66797 0C9.10156 0 8.65234 0.449219 8.65234 1.01562C8.65234 1.58203 9.10156 2.03125 9.66797 2.03125ZM15.791 4.56055C16.3477 4.56055 16.7969 4.11133 16.7969 3.54492C16.7969 2.97852 16.3477 2.5293 15.791 2.5293C15.2246 2.5293 14.7754 2.97852 14.7754 3.54492C14.7754 4.11133 15.2246 4.56055 15.791 4.56055ZM18.3203 10.6836C18.877 10.6836 19.3262 10.2344 19.3262 9.66797C19.3262 9.10156 18.877 8.65234 18.3203 8.65234C17.7539 8.65234 17.3047 9.10156 17.3047 9.66797C17.3047 10.2344 17.7539 10.6836 18.3203 10.6836ZM15.791 16.8066C16.3477 16.8066 16.7969 16.3574 16.7969 15.791C16.7969 15.2246 16.3477 14.7754 15.791 14.7754C15.2246 14.7754 14.7754 15.2246 14.7754 15.791C14.7754 16.3574 15.2246 16.8066 15.791 16.8066ZM9.66797 19.3359C10.2246 19.3359 10.6836 18.8867 10.6836 18.3203C10.6836 17.7539 10.2246 17.3047 9.66797 17.3047C9.10156 17.3047 8.65234 17.7539 8.65234 18.3203C8.65234 18.8867 9.10156 19.3359 9.66797 19.3359ZM3.54492 16.8066C4.11133 16.8066 4.56055 16.3574 4.56055 15.791C4.56055 15.2246 4.11133 14.7754 3.54492 14.7754C2.97852 14.7754 2.5293 15.2246 2.5293 15.791C2.5293 16.3574 2.97852 16.8066 3.54492 16.8066ZM1.01562 10.6836C1.58203 10.6836 2.03125 10.2344 2.03125 9.66797C2.03125 9.10156 1.58203 8.65234 1.01562 8.65234C0.449219 8.65234 0 9.10156 0 9.66797C0 10.2344 0.449219 10.6836 1.01562 10.6836ZM3.54492 4.56055C4.11133 4.56055 4.56055 4.11133 4.56055 3.54492C4.56055 2.97852 4.11133 2.5293 3.54492 2.5293C2.97852 2.5293 2.5293 2.97852 2.5293 3.54492C2.5293 4.11133 2.97852 4.56055 3.54492 4.56055Z" fill="currentColor" fillOpacity="0.85"/>
              <path d="M9.66797 14.6387C12.4121 14.6387 14.6387 12.4121 14.6387 9.66797C14.6387 6.92383 12.4121 4.6875 9.66797 4.6875C6.92383 4.6875 4.6875 6.92383 4.6875 9.66797C4.6875 12.4121 6.92383 14.6387 9.66797 14.6387ZM9.66797 13.1543C7.73438 13.1543 6.17188 11.6016 6.17188 9.66797C6.17188 7.73438 7.73438 6.17188 9.66797 6.17188C11.6016 6.17188 13.1543 7.73438 13.1543 9.66797C13.1543 11.6016 11.6016 13.1543 9.66797 13.1543Z" fill="currentColor" fillOpacity="0.85"/>
            </svg>
          )}
        </button>

        {/* Home Link - Right Side */}
        <Link
          to="/"
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: theme.text,
            textDecoration: 'none',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: `1px solid ${theme.borderStrong}`,
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = theme.buttonBg;
            target.style.color = theme.buttonText;
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)';
            target.style.color = theme.text;
          }}
        >
          IDYeah.Studio
        </Link>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          padding: '64px 16px 0'
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif !important;
            max-width: 720px !important;
            line-height: 1.7 !important;
          }
          h1, h2, h3 {
            text-align: center !important;
            color: ${theme.text} !important;
          }
          h2 {
            margin-top: 1rem !important;
            margin-bottom: 96px !important;
            padding-top: 96px !important;
            position: relative !important;
          }
          h2:before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 1px;
            background-color: ${theme.divider};
          }
          p, ul, ol {
            text-align: left !important;
          }
          p[id="2c267ccc-6bef-80dc-9280-e0dc8dc88bb2"] {
            text-align: center !important;
          }
          .callout {
            padding: 1.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .callout .icon {
            display: none !important;
          }
          hr {
            display: none !important;
          }
          p {
            margin-top: 0 !important;
            margin-bottom: clamp(20px, 5vw, 24px) !important;
            font-size: clamp(15px, 3.5vw, 16px) !important;
            font-weight: 400 !important;
            color: ${theme.textSecondary} !important;
          }
          ul li, ol li {
            color: ${theme.textSecondary} !important;
          }
          strong {
            color: ${theme.text} !important;
          }
          blockquote {
            color: ${theme.text} !important;
          }
          p[id="2c267ccc-6bef-806d-867a-f2f6c9a775e9"],
          p[id="2c267ccc-6bef-80e1-8112-d99b969162bf"],
          p[id="2c267ccc-6bef-8080-b7be-fcfed8870cf8"] {
            text-align: center !important;
          }
          p[id="2c267ccc-6bef-80e1-8112-d99b969162bf"] {
            display: none !important;
          }
        ` }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      </div>
    </div>
  );
}
