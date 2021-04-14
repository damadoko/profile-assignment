import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: Mulish ;
	src: url("/fonts/Mulish/Mulish-Regular.ttf");
	src: url("/fonts/Mulish/Mulish-Medium.ttf");
	src: url("/fonts/Mulish/Mulish-Black.ttf");
	src: url("/fonts/Mulish/Mulish-Bold.ttf");
	font-style: normal;
  font-weight: 400;
}

html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(black, 0);
}

body {
  padding: 0;
  margin: 0;
  font-family: Mulish, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	color: #A1D6FA;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`

export default GlobalStyle
