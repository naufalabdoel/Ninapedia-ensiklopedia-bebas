interface SidebarRightProps {
  textSize: string;
  setTextSize: (size: string) => void;
  layoutWidth: string;
  setLayoutWidth: (width: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export default function SidebarRight({
  textSize,
  setTextSize,
  layoutWidth,
  setLayoutWidth,
  theme,
  setTheme,
}: SidebarRightProps) {
  return (
    <aside className="w-48 flex-shrink-0 hidden xl:block py-6 pl-4 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-4 border-b border-[#a2a9b1] pb-1">
        <h2 className="font-bold text-[#202122] text-sm">Tampilan</h2>
      </div>
      
      <div className="space-y-6 text-[13px] text-[#202122]">
        <div>
          <h3 className="font-bold mb-2 border-b border-[#eaecf0] pb-1 text-gray-600 border-dotted">Teks</h3>
          <div className="space-y-1.5 ml-1">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="text_size" 
                className="accent-[#3366cc]" 
                checked={textSize === "sm"}
                onChange={() => setTextSize("sm")}
              />
              <span>Kecil</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="text_size" 
                className="accent-[#3366cc]" 
                checked={textSize === "base"}
                onChange={() => setTextSize("base")}
              />
              <span>Standar</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="text_size" 
                className="accent-[#3366cc]" 
                checked={textSize === "lg"}
                onChange={() => setTextSize("lg")}
              />
              <span>Besar</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 border-b border-[#eaecf0] pb-1 text-gray-600 border-dotted">Lebar</h3>
          <div className="space-y-1.5 ml-1">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="width" 
                className="accent-[#3366cc]" 
                checked={layoutWidth === "standard"}
                onChange={() => setLayoutWidth("standard")}
              />
              <span>Standar</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="width" 
                className="accent-[#3366cc]" 
                checked={layoutWidth === "wide"}
                onChange={() => setLayoutWidth("wide")}
              />
              <span>Lebar</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 border-b border-[#eaecf0] pb-1 text-gray-600 border-dotted">Warna (beta)</h3>
          <div className="space-y-1.5 ml-1">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="color" 
                className="accent-[#3366cc]" 
                checked={theme === "auto"}
                onChange={() => setTheme("auto")}
              />
              <span>Otomatis</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="color" 
                className="accent-[#3366cc]" 
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
              <span>Terang</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="radio" 
                name="color" 
                className="accent-[#3366cc]" 
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
              <span>Gelap</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
