import type { ReactElement } from "react";

type OrderCardComponentProps = {
  title?: string;
  count?: number | string;
  subtitle?: string;
  icon?: ReactElement;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  countClassName?: string;
  subtitleClassName?: string;
};

export default function OrderCardComponent({ title, count, subtitle, icon, className, iconClassName, titleClassName, countClassName, subtitleClassName }: OrderCardComponentProps) {
  return (
    <article
      className={`${className}`}
      aria-labelledby="order-card-title"
    >
      <header className="p-6 flex items-center justify-between pb-3">
        <h3
          id="order-card-title"
          className={`${titleClassName}`}
        >
          {title}
        </h3>
        <div className={`${iconClassName}`}>
          {icon && (icon)}
        </div>
      </header>

      <div className="p-6 pt-0">
        <div className={`${countClassName}`}>{count}</div>
        <p className={`${subtitleClassName}`}>{subtitle}</p>
      </div>
    </article>
  );
}
