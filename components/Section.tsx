import clsx from 'clsx';

export default function Section({
  children,
  className,
  bg = 'ivory'
}: {
  children: React.ReactNode;
  className?: string;
  bg?: 'ivory' | 'stone' | 'navy';
}) {
  const bgClass = { ivory: 'bg-ivory', stone: 'bg-stone', navy: 'bg-navy text-ivory' }[bg];

  return (
    <section className={bgClass}>
      <div className={clsx('section', className)}>{children}</div>
    </section>
  );
}
