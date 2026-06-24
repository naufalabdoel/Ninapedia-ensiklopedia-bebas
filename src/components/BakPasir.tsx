import { useState } from "react";
import { Edit2, Eye, Info, RefreshCw } from "lucide-react";

export default function BakPasir() {
  const [wikiText, setWikiText] = useState<string>(
    `== Selamat Datang di Bak Pasir Ninapedia ==\n\nIni adalah sebuah '''bak pasir''' (sandbox) tempat Anda mencoba menyunting artikel sesuka hati Anda! Tulisan di sini tidak akan merusak artikel asli.\n\n=== Panduan Memformat ===\n* Untuk menebalkan teks, apit dengan tiga tanda kutip tunggal: \`'''teks tebal'''\` akan menghasilkan '''teks tebal'''.\n* Untuk memiringkan teks, apit dengan dua tanda kutip tunggal: \`''teks miring''\` akan menghasilkan ''teks miring''.\n* Untuk membuat heading baru, gunakan tanda sama dengan: \`== Judul Seksi ==\`.\n\n=== Cobalah Tulis Sesuatu di Sini! ===\nSilakan hapus teks ini dan mulai berkreasi dengan imajinasi Anda.`
  );
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [articleTitle, setArticleTitle] = useState<string>("Bak Pasir Pengguna");

  // Primitive parser for simple wiki syntax formatting
  const parseWikiText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let trimmed = line.trim();

      // Heading 3: === title ===
      if (trimmed.startsWith("===") && trimmed.endsWith("===")) {
        const title = trimmed.slice(3, -3).trim();
        return (
          <h4 key={idx} className="text-[1.25em] font-bold mt-4 mb-2 text-[#202122] border-b border-[#eaecf0] pb-0.5">
            {title}
          </h4>
        );
      }

      // Heading 2: == title ==
      if (trimmed.startsWith("==") && trimmed.endsWith("==")) {
        const title = trimmed.slice(2, -2).trim();
        return (
          <h3 key={idx} className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-6 mb-3 pb-1" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            {title}
          </h3>
        );
      }

      // List item: * item
      if (trimmed.startsWith("*")) {
        const content = trimmed.substring(1).trim();
        return (
          <ul key={idx} className="list-disc pl-6 my-1">
            <li dangerouslySetInnerHTML={{ __html: parseInlineStyles(content) }} />
          </ul>
        );
      }

      if (trimmed === "") {
        return <div key={idx} className="h-2" />;
      }

      // Normal paragraph
      return (
        <p key={idx} className="mb-2 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineStyles(trimmed) }} />
      );
    });
  };

  const parseInlineStyles = (str: string): string => {
    let html = str;
    // Replace bold-italic '''''text'''''
    html = html.replace(/'''''(.*?)'''''/g, "<strong><em>$1</em></strong>");
    // Replace bold '''text'''
    html = html.replace(/'''(.*?)'''/g, "<strong>$1</strong>");
    // Replace italic ''text''
    html = html.replace(/''(.*?)''/g, "<em>$1</em>");
    // Replace inline code block `code`
    html = html.replace(/`(.*?)`/g, "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono text-xs text-red-600'>$1</code>");
    return html;
  };

  const handleReset = () => {
    if (window.confirm("Apakah Anda yakin ingin mengatur ulang bak pasir ke teks contoh?")) {
      setWikiText(
        `== Selamat Datang di Bak Pasir Ninapedia ==\n\nIni adalah sebuah '''bak pasir''' (sandbox) tempat Anda mencoba menyunting artikel sesuka hati Anda! Tulisan di sini tidak akan merusak artikel asli.\n\n=== Panduan Memformat ===\n* Untuk menebalkan teks, apit dengan tiga tanda kutip tunggal: \`'''teks tebal'''\` akan menghasilkan '''teks tebal'''.\n* Untuk memiringkan teks, apit dengan dua tanda kutip tunggal: \`''teks miring''\` akan menghasilkan ''teks miring''.\n* Untuk membuat heading baru, gunakan tanda sama dengan: \`== Judul Seksi ==\`.\n\n=== Cobalah Tulis Sesuatu di Sini! ===\nSilakan hapus teks ini dan mulai berkreasi dengan imajinasi Anda.`
      );
      setArticleTitle("Bak Pasir Pengguna");
    }
  };

  return (
    <div className="space-y-4">
      {/* Sandbox Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#a2a9b1] pb-2">
        <div>
          <h2 className="text-xl font-serif text-[#202122] font-semibold" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            Bak Pasir Ninapedia
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Halaman uji coba untuk berlatih menyunting dan melakukan eksperimen pemformatan artikel.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Atur Ulang
          </button>
        </div>
      </div>

      <div className="flex border-b border-[#a2a9b1]">
        <button
          onClick={() => setActiveTab("edit")}
          className={`flex items-center gap-2 px-4 py-2 border-t border-x rounded-t-sm text-[13px] font-medium transition-colors cursor-pointer ${
            activeTab === "edit"
              ? "bg-white border-[#a2a9b1] border-b-white -mb-[1px] text-[#202122]"
              : "bg-gray-50 border-transparent border-b-[#a2a9b1] text-[#0645ad] hover:text-[#0b0080]"
          }`}
        >
          <Edit2 className="w-4 h-4" />
          Sunting Sumber
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 px-4 py-2 border-t border-x rounded-t-sm text-[13px] font-medium transition-colors cursor-pointer ${
            activeTab === "preview"
              ? "bg-white border-[#a2a9b1] border-b-white -mb-[1px] text-[#202122]"
              : "bg-gray-50 border-transparent border-b-[#a2a9b1] text-[#0645ad] hover:text-[#0b0080]"
          }`}
        >
          <Eye className="w-4 h-4" />
          Lihat Pratinjau
        </button>
      </div>

      {activeTab === "edit" ? (
        <div className="space-y-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">Judul Artikel:</label>
            <input
              type="text"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              className="w-full bg-white border border-[#a2a9b1] rounded p-2 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc]"
              placeholder="Ketik judul artikel..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">Isi Naskah (Sintaks Nina):</label>
            <textarea
              value={wikiText}
              onChange={(e) => setWikiText(e.target.value)}
              rows={12}
              className="w-full bg-white border border-[#a2a9b1] rounded p-3 text-sm font-mono text-[#202122] focus:outline-none focus:border-[#3366cc]"
              placeholder="Tulis artikel dengan sintaks nina..."
            />
          </div>
          <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-3 text-xs text-gray-600 rounded-sm flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Informasi Kebijakan:</p>
              <p>Meskipun ini adalah bak pasir uji coba lokal, harap tetap menjaga ketertiban, estetika, dan tata krama penulisan yang santun demi membiasakan penulisan berstandar ensiklopedia.</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab("preview")}
            className="px-4 py-2 bg-[#3366cc] hover:bg-[#2a52be] text-white text-xs font-bold rounded-sm transition-colors cursor-pointer shadow-sm"
          >
            Tampilkan Pratinjau
          </button>
        </div>
      ) : (
        <div className="bg-white border border-dashed border-[#a2a9b1] rounded p-6 min-h-[300px]">
          {/* Article Page Title container */}
          <div className="border-b border-[#a2a9b1] pb-1 mb-4">
            <h1
              className="text-2xl md:text-3xl font-serif font-normal"
              style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}
            >
              {articleTitle || "Tanpa Judul"}
            </h1>
            <div className="text-[12px] text-gray-500 mt-1">
              Dari Ninapedia bahasa Indonesia, ensiklopedia uji coba bebas
            </div>
          </div>
          {/* Render parsed elements */}
          <div className="space-y-2 mt-4 text-[14px] leading-relaxed text-[#202122]">
            {parseWikiText(wikiText)}
          </div>
        </div>
      )}
    </div>
  );
}
