import { useEffect, useState } from "react";

import { ExclamationMark } from "@phosphor-icons/react";
import { format } from "date-fns";
import HistoryCard from "../components/dashboard/history/HistoryCard";
import HistoryFilter from "../components/dashboard/history/HistoryFilter";

export default function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [status, setStatus] = useState("all");
  let items;
  if (status === "all") {
    items = (
      <>
        <HistoryCard status={"Berhasil"} />
        <HistoryCard status={"Menunggu"} />
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
      </>
    );
  }
  if (status === "berhasil") {
    items = <HistoryCard status={"Berhasil"} />;
  }
  if (status === "gagal") {
    items = (
      <>
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
        <HistoryCard status={"Gagal"} />
      </>
    );
  }
  if (status === "menunggu") {
    items = <HistoryCard status={"Menunggu"} />;
  }

  return (
    <div className="h-fit w-full  flex flex-col gap-5">
      <section className="h-fit w-fit gap-12 flex items-center justify-evenly bg-white border shadow-xl rounded-xl px-8 py-4">
        <HistoryFilter
          status={"Semua"}
          isActive={status === "all"}
          onClick={() => setStatus("all")}
        />
        <HistoryFilter
          status={"Berhasil"}
          isActive={status === "berhasil"}
          onClick={() => setStatus("berhasil")}
        />
        <HistoryFilter
          status={"Menunggu"}
          isActive={status === "menunggu"}
          onClick={() => setStatus("menunggu")}
        />
        <HistoryFilter
          status={"Gagal"}
          isActive={status === "gagal"}
          onClick={() => setStatus("gagal")}
        />
      </section>
      {items}
    </div>
  );
}
