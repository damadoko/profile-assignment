import React from 'react'
import Document, {DocumentContext, DocumentInitialProps} from 'next/document'
import {ServerStyleSheet as StyledComponentSheets} from 'styled-components'
import {ServerStyleSheets as MaterialUiServerStyleSheets} from '@material-ui/core/styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
            {flush() || null}
          </React.Fragment>
        ),
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}
