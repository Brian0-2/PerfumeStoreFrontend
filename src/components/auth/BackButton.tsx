import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type BackButtonProps = {
    to?: string;
    className?: string;
    text: string
}

export default function BackButton({ to, className,text }: BackButtonProps) {
  return (
      <div className={`w-full mb-6 ${className}`}>
        <Link to={to || "/"} className="inline-flex items-center text-gray-200 hover:text-white transition-colors">
          <ArrowLeft className="w-4 mr-2" />
          {text}
        </Link>
      </div>
  )
}
