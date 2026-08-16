import clsx from 'clsx';

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
};

export default function FormField({ label, name, type = 'text', required, error, as = 'input', options }: FormFieldProps) {
  const baseClasses = clsx(
    'w-full border rounded-sm px-4 py-2 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold',
    error ? 'border-red-400' : 'border-stone'
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea id={name} name={name} required={required} rows={5} className={baseClasses} />
      ) : as === 'select' ? (
        <select id={name} name={name} required={required} className={baseClasses}>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} className={baseClasses} />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
