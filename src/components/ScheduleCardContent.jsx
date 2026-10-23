import codingIcon from "../assets/icon/icons8-laptop-coding-48.png";

const ScheduleIcon = ({ label }) => {
  const normalizedLabel = label.toLowerCase();
  const iconClassName = "w-7 h-7 text-white";

  if (normalizedLabel.includes("registration")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 3v4M8 3v4M3 10h18m-12 5 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalizedLabel.includes("time")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalizedLabel.includes("week")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h2m4 0h2m-8 3h2m4 0h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalizedLabel.includes("day")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 3v4M8 3v4M3 10h18m2 4-2 2-2-2m2 2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalizedLabel.includes("cohort")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 3v4M8 3v4M3 10h18m3 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM15.5 20a3.5 3.5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <img
      className="w-7 h-7"
      src={codingIcon}
      alt=""
      aria-hidden="true"
    />
  );
};

const SheduleCardContent = ({ lebal, value }) => (
  <div className="flex gap-3">
    <div className="flex w-[50px] h-[50px] shrink-0 items-center justify-center rounded-full bg-(--color-brand-400)">
      <ScheduleIcon label={lebal} />
    </div>
    <div className="flex flex-col flex-nowrap gap-2">
      <h2 className="text-label">{lebal}</h2>
      <p>{value}</p>
    </div>
  </div>
);

export default SheduleCardContent;