import JoditEditor from "jodit-react";

import { useRef, useState } from "react";

export const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    heigth: 400,
  };

  const handleUpdate = ({ target }: any) => {
    const editorContet = target.value;
    setContent(editorContet);
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
    </div>
  );
};
