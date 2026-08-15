import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-900 text-gray-100 px-4 py-2 rounded-t-md">
        <span className="text-xs font-mono uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-2 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-gray-50 border border-t-0 border-gray-200 p-4 rounded-b-md overflow-x-auto">
        <code className="text-sm text-gray-800">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
