import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
};

export default function Button({ href, variant = 'primary', children, type = 'button', disabled, className }: ButtonProps) {
  const classes = clsx(variant === 'primary' ? 'btn-primary' : 'btn-secondary', disabled && 'opacity-50 cursor-not-allowed', className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
