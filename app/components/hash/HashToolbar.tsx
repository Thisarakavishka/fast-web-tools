"use client";

import { FiClipboard, FiDownload, FiTrash2 } from "react-icons/fi";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface Props {
  onPaste: () => void;
  onDownload: () => void;
  onClear: () => void;
}

export default function HashToolbar({ onPaste, onDownload, onClear }: Props) {
  return (
    <ToolActions>
      <ToolActionButton
        primary
        icon={<FiClipboard size={18} />}
        onClick={onPaste}
      >
        Paste
      </ToolActionButton>

      <ToolActionButton icon={<FiDownload size={18} />} onClick={onDownload}>
        Download
      </ToolActionButton>

      <ToolActionButton icon={<FiTrash2 size={18} />} onClick={onClear}>
        Clear
      </ToolActionButton>
    </ToolActions>
  );
}
