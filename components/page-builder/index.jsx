import { useEffect, useState } from 'react'
import GrapesJS from 'grapesjs'
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import gjsBasicBlocks from 'grapesjs-blocks-basic'

const WebPages = () => {

  const [htmlString, setHtmlString] = useState(null)
  const [cssString, setCssString] = useState("")
  const [pluginLoaded, setPluginLoaded] = useState(false)
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if (!pluginLoaded) {
      setPluginLoaded(true);
    }
    else if (!editor) {
      const e = GrapesJS.init({
        container: `#example-editor`,
        fromElement: true,
        plugins: [gjsBasicBlocks, gjsPresetWebpage]
      })
      setEditor(e)
    }
  })

  return (
    <div id="example-editor" />
  )
}

export default WebPages;
