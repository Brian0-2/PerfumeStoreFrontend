'use client';
import { Toaster, toast as sonnerToast } from 'sonner';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoIosWarning } from 'react-icons/io';
import LoadingSpinner from './LoadingSpinner';

interface ToastProps {
  id: string | number;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'loading';
}

const toastClasses = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  loading: 'bg-gray-100 border-gray-300 text-gray-900',
};

const toastIcons = {
  success: <FaCheck className="text-green-500" />,
  error: <FaTimes className="text-red-500" />,
  warning: <IoIosWarning className="text-yellow-500" />,
  info: <FaCircleInfo className="text-blue-500" />,
  loading: <LoadingSpinner className="animate-spin text-gray-500" />,
};

function Toast({ title, description, type }: ToastProps) {
  return (
    <div
      className={`flex items-start gap-3 max-w-xs w-full border rounded-lg p-4 shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${toastClasses[type]}`}
    >
      <span className="mt-1">{toastIcons[type]}</span>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        {description && <p className="mt-1 text-sm text-gray-700">{description}</p>}
      </div>
    </div>
  );
}

export const toast = {
  success: (title: string, description?: string) =>
    sonnerToast.custom((id) => <Toast id={id} type="success" title={title} description={description} />),
  error: (title: string, description?: string) =>
    sonnerToast.custom((id) => <Toast id={id} type="error" title={title} description={description} />),
  warning: (title: string, description?: string) =>
    sonnerToast.custom((id) => <Toast id={id} type="warning" title={title} description={description} />),
  info: (title: string, description?: string) =>
    sonnerToast.custom((id) => <Toast id={id} type="info" title={title} description={description} />),
  loading: (title: string, description?: string) =>
    sonnerToast.custom((id) => <Toast id={id} type="loading" title={title} description={description} />),
};

export default function Sonner() {
  return <Toaster position="top-right" />;
}
