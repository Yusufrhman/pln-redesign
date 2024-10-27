const FormSection = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center w-full">
      <h2 className="w-fit font-bold text-2xl text-left text-teal-950 rounded-full relative mx-auto">
        {title}
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full -bottom-2 left-0"></span>
      </h2>
      <div className="space-y-4 md:space-y-6 w-full">{children}</div>
    </section>
  );
};

export default FormSection;
