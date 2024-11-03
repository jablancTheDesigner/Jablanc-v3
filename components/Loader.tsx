const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-dark text-dark text-4xl fixed z-[1001]">
      <div className="loader relative"></div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 text-primary text-xl uppercase">
        Loading
      </div>
    </div>
  );
};

export default Loader;
