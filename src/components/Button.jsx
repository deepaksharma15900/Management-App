export default function Button({children, ...prop}){
  return(
    <div>
     <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100" {...prop}>
      {children}
     </button>
    </div>
  );
}