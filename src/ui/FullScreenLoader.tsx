
export default function FullScreenLoader() {
return (
    <div className="fixed bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_80%)] inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="flex flex-col items-center">
        {/* Animación circular */}
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-700 border-solid rounded-full animate-spin"></div>
        
        {/* Texto con animación */}
        <p className="mt-4 text-lg font-semibold bg-gradient-to-r from-purple-700 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
}
