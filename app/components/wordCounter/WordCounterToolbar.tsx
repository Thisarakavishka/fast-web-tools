"use client";

import {
  FiClipboard,
  FiCopy,
  FiTrash2,
  FiUpload,
  FiDownload,
} from "react-icons/fi";

import ToolActionButton from "../tool/ToolActionButton";
import ToolActions from "../tool/ToolActions";

interface Props {
  onPaste: () => void;
  onCopy: () => void;
  onClear: () => void;
  onUpload: (file: File) => void;
  onDownload: () => void;
}

export default function WordCounterToolbar({
  onPaste,
  onCopy,
  onClear,
  onUpload,
  onDownload,
}: Props) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <ToolActions>
      <ToolActionButton primary icon={<FiClipboard />} onClick={onPaste}>
        Paste
      </ToolActionButton>

      <ToolActionButton icon={<FiCopy />} onClick={onCopy}>
        Copy
      </ToolActionButton>

      <ToolActionButton icon={<FiTrash2 />} onClick={onClear}>
        Clear
      </ToolActionButton>

      <label>
        <input hidden type="file" accept=".txt" onChange={handleUpload} />

        <div>
          <ToolActionButton icon={<FiUpload />}>Upload TXT</ToolActionButton>
        </div>
      </label>

      <ToolActionButton icon={<FiDownload />} onClick={onDownload}>
        Download TXT
      </ToolActionButton>
    </ToolActions>
  );
}
