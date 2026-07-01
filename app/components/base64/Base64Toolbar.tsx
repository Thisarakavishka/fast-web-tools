"use client";

import {
  FiArrowRight,
  FiClipboard,
  FiCopy,
  FiDownload,
  FiUpload,
} from "react-icons/fi";

import { MdOutlineLockOpen, MdOutlineLock } from "react-icons/md";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface Props {
  onEncode: () => void;
  onDecode: () => void;
  onPaste: () => void;
  onCopy: () => void;
  onSwap: () => void;
  onDownload: () => void;
  onUpload: (file: File) => void;
}

export default function Base64Toolbar({
  onEncode,
  onDecode,
  onPaste,
  onCopy,
  onSwap,
  onDownload,
  onUpload,
}: Props) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onUpload(file);

    e.target.value = "";
  };

  return (
    <ToolActions>
      {/* Encode */}

      <ToolActionButton
        primary
        icon={<MdOutlineLock size={18} />}
        onClick={onEncode}
      >
        Encode
      </ToolActionButton>

      {/* Decode */}

      <ToolActionButton
        icon={<MdOutlineLockOpen size={18} />}
        onClick={onDecode}
      >
        Decode
      </ToolActionButton>

      {/* Swap */}

      <ToolActionButton icon={<FiArrowRight size={18} />} onClick={onSwap}>
        Swap
      </ToolActionButton>

      {/* Paste */}

      <ToolActionButton icon={<FiClipboard size={18} />} onClick={onPaste}>
        Paste
      </ToolActionButton>

      {/* Copy */}

      <ToolActionButton icon={<FiCopy size={18} />} onClick={onCopy}>
        Copy
      </ToolActionButton>

      {/* Upload */}

      <label className="cursor-pointer">
        <input
          hidden
          type="file"
          onChange={handleUpload}
          accept=".txt,.text,*/*"
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
    </ToolActions>
  );
}
