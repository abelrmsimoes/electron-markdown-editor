import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'
import './editor.css'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = props => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refConteiner, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className="editor-wrapper" ref={refConteiner}></div>
}

export default Editor
