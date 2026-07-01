"use client";

import {
  FiClipboard,
  FiCopy,
  FiRefreshCw,
  FiDownload,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface Props {
  onPaste: () => void;
  onCopy: () => void;
  onSwap: () => void;
  onUpload: (file: File) => void;
  onDownload: () => void;
  onClear: () => void;
}

export default function UrlToolbar({
  onPaste,
  onCopy,
  onSwap,
  onUpload,
  onDownload,
  onClear,
}: Props) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);

    event.target.value = "";
  };

  return (
    <ToolActions>
      <ToolActionButton
        primary
        icon={<FiClipboard size={18} />}
        onClick={onPaste}
      >
        Paste
      </ToolActionButton>

      <ToolActionButton icon={<FiCopy size={18} />} onClick={onCopy}>
        Copy Output
      </ToolActionButton>

      <ToolActionButton icon={<FiRefreshCw size={18} />} onClick={onSwap}>
        Swap
      </ToolActionButton>

      <label className="cursor-pointer">
        <input hidden type="file" accept=".txt" onChange={handleUpload} />

        <div>
          <ToolActionButton icon={<FiUpload size={18} />}>
            Upload
          </ToolActionButton>
        </div>
      </label>

      <ToolActionButton icon={<FiDownload size={18} />} onClick={onDownload}>
        Download
      </ToolActionButton>

      <ToolActionButton icon={<FiTrash2 size={18} />} onClick={onClear}>
        Clear
      </ToolActionButton>
    </ToolActions>
  );
}
