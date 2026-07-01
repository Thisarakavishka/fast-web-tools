"use client";

import { FiRefreshCw, FiCopy, FiDownload, FiTrash2 } from "react-icons/fi";

import ToolActions from "../tool/ToolActions";
import ToolActionButton from "../tool/ToolActionButton";

interface Props {
  onGenerate: () => void;
  onCopyAll: () => void;
  onDownload: () => void;
  onClear: () => void;
}

export default function UuidToolbar({
  onGenerate,
  onCopyAll,
  onDownload,
  onClear,
}: Props) {
  return (
    <ToolActions>
      <ToolActionButton
        primary
        icon={<FiRefreshCw size={18} />}
        onClick={onGenerate}
      >
        Generate
      </ToolActionButton>

      <ToolActionButton icon={<FiCopy size={18} />} onClick={onCopyAll}>
        Copy All
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
