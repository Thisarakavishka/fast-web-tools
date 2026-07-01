"use client";

import {
  FiCheckCircle,
  FiClipboard,
  FiCopy,
  FiDownload,
  FiMinimize2,
  FiUpload,
} from "react-icons/fi";
import { PiBracketsCurlyBold } from "react-icons/pi";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface Props {
  onFormat: () => void;
  onMinify: () => void;
  onValidate: () => void;
  onSortKeys: () => void;
  onPaste: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onUpload: (file: File) => void;
}

export default function JsonToolbar({
  onFormat,
  onMinify,
  onValidate,
  onSortKeys,
  onPaste,
  onCopy,
  onDownload,
  onUpload,
}: Props) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onUpload(file);

    // allow selecting the same file again
    e.target.value = "";
  };

  return (
    <ToolActions>
      <ToolActionButton
        primary
        icon={<PiBracketsCurlyBold />}
        onClick={onFormat}
      >
        Format
      </ToolActionButton>

      <ToolActionButton icon={<FiMinimize2 />} onClick={onMinify}>
        Minify
      </ToolActionButton>

      <ToolActionButton icon={<FiCheckCircle />} onClick={onValidate}>
        Validate
      </ToolActionButton>

      <ToolActionButton icon={<PiBracketsCurlyBold />} onClick={onSortKeys}>
        Sort Keys
      </ToolActionButton>

      <ToolActionButton icon={<FiClipboard />} onClick={onPaste}>
        Paste
      </ToolActionButton>

      <ToolActionButton icon={<FiCopy />} onClick={onCopy}>
        Copy
      </ToolActionButton>

      <label className="cursor-pointer">
        <input
          hidden
          type="file"
          accept=".json,application/json"
          onChange={handleUpload}
        />

        <div>
          <ToolActionButton icon={<FiUpload />}>Upload</ToolActionButton>
        </div>
      </label>

      <ToolActionButton icon={<FiDownload />} onClick={onDownload}>
        Download
      </ToolActionButton>
    </ToolActions>
  );
}
