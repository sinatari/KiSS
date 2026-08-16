import clsx from 'clsx';

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx('bg-white border border-stone rounded-sm p-6 shadow-sm', className)}>
      {children}
    </div>
  );
}
