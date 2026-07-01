"use client";

import {
  FiClipboard,
  FiCopy,
  FiDownload,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface JwtToolbarProps {
  onPaste: () => void;
  onCopyHeader: () => void;
  onCopyPayload: () => void;
  onUpload: (file: File) => void;
  onDownload: () => void;
  onClear: () => void;
}

export default function JwtToolbar({
  onPaste,
  onCopyHeader,
  onCopyPayload,
  onUpload,
  onDownload,
  onClear,
}: JwtToolbarProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);

    event.target.value = "";
  };

  return (
    <ToolActions>
      {/* Paste */}

      <ToolActionButton
        primary
        icon={<FiClipboard size={18} />}
        onClick={onPaste}
      >
        Paste
      </ToolActionButton>

      {/* Copy Header */}

      <ToolActionButton icon={<FiCopy size={18} />} onClick={onCopyHeader}>
        Header
      </ToolActionButton>

      {/* Copy Payload */}

      <ToolActionButton icon={<FiCopy size={18} />} onClick={onCopyPayload}>
        Payload
      </ToolActionButton>

      {/* Upload */}

      <label className="cursor-pointer">
        <input
          hidden
          type="file"
          accept=".txt,.jwt,.token"
          onChange={handleFileUpload}
        />

        <div>
          <ToolActionButton icon={<FiUpload size={18} />}>
            Upload
          </ToolActionButton>
        </div>
      </label>

      {/* Download */}

      <ToolActionButton icon={<FiDownload size={18} />} onClick={onDownload}>
        Download
      </ToolActionButton>

      {/* Clear */}

      <ToolActionButton icon={<FiTrash2 size={18} />} onClick={onClear}>
        Clear
      </ToolActionButton>
    </ToolActions>
  );
}
