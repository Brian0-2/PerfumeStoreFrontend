import { companyInfo } from "@/data/index";

type CardHeaderProps = {
    title?: string;
    subtitle?: string;
}

export default function CardHeader({ title, subtitle }: CardHeaderProps) {
    return (
        <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-xl">E</span>
                </div>
                <span className="font-bold text-2xl text-black">{companyInfo.name}</span>
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    )
}
