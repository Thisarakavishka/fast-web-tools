"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import JwtEditor from "../../components/jwt/JwtEditor";
import JwtToolbar from "../../components/jwt/JwtToolbar";
import JwtHeader from "../../components/jwt/JwtHeader";
import JwtPayload from "../../components/jwt/JwtPayload";
import JwtStatistics from "../../components/jwt/JwtStatistics";
import JwtFAQ from "../../components/jwt/JwtFAQ";

import {
  decodeJWT,
  getJWTStatistics,
  pasteJWT,
  copyJWT,
  uploadJWT,
  downloadJWT,
} from "../../lib/jwt";

export default function JwtPage() {
  const [token, setToken] = useState("");

  const decoded = useMemo(() => decodeJWT(token), [token]);

  const statistics = useMemo(() => getJWTStatistics(token), [token]);

  /* ----------------------------- */

  const handlePaste = async () => {
    const clipboard = await pasteJWT();

    setToken(clipboard);
  };

  const handleUpload = async (file: File) => {
    const content = await uploadJWT(file);

    setToken(content);
  };

  const handleDownload = () => {
    downloadJWT(token);
  };

  const handleClear = () => {
    setToken("");
  };

  const handleCopyHeader = async () => {
    if (!decoded.header) return;

    await copyJWT(JSON.stringify(decoded.header, null, 2));
  };

  const handleCopyPayload = async () => {
    if (!decoded.payload) return;

    await copyJWT(JSON.stringify(decoded.payload, null, 2));
  };

  /* ----------------------------- */

  return (
    <ToolLayout>
      <ToolHeader
        title="JWT Decoder"
        description="Decode JSON Web Tokens instantly inside your browser. Inspect the Header, Payload and Token Information without sending your JWT to any server."
      />

      {/* Editor */}

      <JwtEditor
        value={token}
        onChange={setToken}
        onPaste={handlePaste}
        onClear={handleClear}
      />

      {/* Toolbar */}

      <JwtToolbar
        onPaste={handlePaste}
        onCopyHeader={handleCopyHeader}
        onCopyPayload={handleCopyPayload}
        onUpload={handleUpload}
        onDownload={handleDownload}
        onClear={handleClear}
      />

      {/* Header + Payload */}

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <JwtHeader
          header={decoded.header}
          error={decoded.valid ? undefined : token ? decoded.error : undefined}
          onCopy={handleCopyHeader}
        />

        <JwtPayload
          payload={decoded.payload}
          error={decoded.valid ? undefined : token ? decoded.error : undefined}
          onCopy={handleCopyPayload}
        />
      </section>

      {/* Token Information */}

      <section className="mt-12">
        <JwtStatistics
          algorithm={statistics.algorithm}
          type={statistics.type}
          issuer={statistics.issuer}
          subject={statistics.subject}
          audience={statistics.audience}
          issuedAt={statistics.issuedAt}
          expiresAt={statistics.expiresAt}
          notBefore={statistics.notBefore}
          expired={statistics.expired}
          signature={statistics.signature}
          tokenSize={statistics.tokenSize}
        />
      </section>

      {/* FAQ */}

      <section className="mt-20">
        <JwtFAQ />
      </section>

      {/* Related Tools */}

      <section className="mt-20">
        <RelatedTools
          tools={[
            {
              title: "JSON Formatter",
              description: "Beautify, validate and minify JSON instantly.",
              href: "/tools/json-formatter",
            },
            {
              title: "Base64 Encoder",
              description: "Encode and decode Base64 strings securely.",
              href: "/tools/base64",
            },
            {
              title: "Regex Tester",
              description: "Test and debug regular expressions in real time.",
              href: "/tools/regex",
            },
          ]}
        />
      </section>
    </ToolLayout>
  );
}
