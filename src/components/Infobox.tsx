import { openAppImage } from './ImageLightbox';

export default function Infobox() {
  return (
    <table className="float-right clear-right ml-6 mb-4 border border-[#a2a9b1] bg-[#f8f9fa] w-[26em] text-[13px] leading-[1.4] m-0 border-spacing-0 border-collapse table-auto mt-2">
      <tbody>
        <tr>
          <th colSpan={2} className="text-center font-bold text-[1.2em] bg-[#eaecf0] py-2 px-1 border-b border-[#a2a9b1]">
            Rocky Gerung
          </th>
        </tr>
        <tr>
          <td colSpan={2} className="text-center p-2 border-b border-[#a2a9b1]">
             <div className="w-full flex flex-col items-center">
                <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg/500px-Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg" 
                   alt="Rocky Gerung" 
                   className="object-cover w-[250px] h-[300px] border border-gray-300 cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                   onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg/500px-Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg")}
                />
                <div className="text-[11px] text-[#202122] mt-1.5 italic">Rocky Gerung pada tahun 2015</div>
             </div>
          </td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122] w-24">Lahir</th>
          <td className="py-1.5 pr-3 align-top">
            20 Januari 1959 (umur 67)<br />
            <a href="#" className="text-[#0645ad] hover:underline">Manado</a>, <a href="#" className="text-[#0645ad] hover:underline">Sulawesi Utara</a>,<br />
            Indonesia
          </td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Almamater</th>
          <td className="py-1.5 pr-3 align-top">
            <a href="#" className="text-[#0645ad] hover:underline">Universitas Indonesia</a>
          </td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Pekerjaan</th>
          <td className="py-1.5 pr-3 align-top">
            <a href="#" className="text-[#0645ad] hover:underline">Akademikus</a>
          </td>
        </tr>
        <tr>
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Dikenal <br/> atas</th>
          <td className="py-1.5 pr-3 align-top">
            Filsafat <a href="#" className="text-[#0645ad] hover:underline">kontemporer</a> dan <a href="#" className="text-[#0645ad] hover:underline">aktivis<br/>masyarakat</a>
          </td>
        </tr>
        <tr>
          <th colSpan={2} className="text-center font-bold text-white bg-[#cc0000] p-1 border-y border-[#a2a9b1] shadow-sm">
            Informasi YouTube
          </th>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Kanal</th>
          <td className="py-1.5 pr-3 align-top">
            <a href="#" className="text-[#0645ad] hover:underline">Rocky Gerung Official</a>
          </td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Tahun aktif</th>
          <td className="py-1.5 pr-3 align-top">2019–sekarang</td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Genre</th>
          <td className="py-1.5 pr-3 align-top"><a href="#" className="text-[#0645ad] hover:underline">Berita</a></td>
        </tr>
        <tr className="border-b border-[#a2a9b1]/30">
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Pelanggan</th>
          <td className="py-1.5 pr-3 align-top">2,41 juta<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[1]</a></sup><br/><span className="text-[11px] text-[#54595d]">(Hingga 23 Desember 2025)</span></td>
        </tr>
        <tr>
          <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122]">Total tayang</th>
          <td className="py-1.5 pr-3 align-top">524.097.744<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[1]</a></sup><br/><span className="text-[11px] text-[#54595d]">(Hingga 23 Desember 2025)</span></td>
        </tr>
        <tr>
          <th colSpan={2} className="p-0 border-t border-[#a2a9b1]">
             <div className="bg-[#a62828] text-white px-3 py-1 flex justify-between items-center cursor-pointer">
                <span className="font-bold text-[13px] w-full text-center">Penghargaan Kreator</span>
                <span className="text-[11px] hover:underline">[tampil]</span>
             </div>
          </th>
        </tr>
        <tr>
          <td colSpan={2} className="text-center py-1.5 border-t border-[#a2a9b1] text-[11px] italic text-[#54595d]">
            Diperbarui: 23 Desember 2025
          </td>
        </tr>
      </tbody>
    </table>
  );
}
