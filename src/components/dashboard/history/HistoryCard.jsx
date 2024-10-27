import { CheckSquare, ExclamationMark, HourglassMedium } from "@phosphor-icons/react";
import { format } from "date-fns";

export default function HistoryCard({ status }) {
  const timestamp = Date.now();
  const formattedDate = format(new Date(timestamp), "dd MMMM yyyy, HH:mm");

  if (status.toLowerCase() === "gagal") {
    status = (
      <>
        <ExclamationMark size={30} color="#c70000" weight="fill" />
        <p className="text-[#c70000] font-bold text-lg">Gagal</p>
      </>
    );
  } else if (status.toLowerCase() === "berhasil") {
    status = (
      <>
        <CheckSquare size={30} color="#0ea418" weight="fill" />
        <p className="text-[#0ea418] font-bold text-lg">Berhasil</p>
      </>
    );
  } else {
    status = (
      <>
        <HourglassMedium size={30} color="#bdb600" weight="fill" />
        <p className="text-[#bdb600] font-bold text-lg">Menunggu</p>
      </>
    );
  }
  return (
    <section className="w-full h-fit bg-white shadow-xl rounded-xl border px-8 py-4 flex flex-col justify-between gap-2">
      <h2 className="text-xl">Pembelian Token Rp. 100.000</h2>
      <span className="flex items-center gap-2">{status}</span>
      <p className="text-black opacity-50">{formattedDate}</p>
    </section>
  );
}
