"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

export default function CKEditorField({
  defaultValue = "",
  name = "description",
}) {
  const [data, setData] = useState(defaultValue);

  return (
    <div className="space-y-2">
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        onChange={(event, editor) => {
          const value = editor.getData();
          setData(value);
        }}
      />

      {/* Hidden input for form submit */}
      <input type="hidden" name={name} value={data} />
    </div>
  );
}
