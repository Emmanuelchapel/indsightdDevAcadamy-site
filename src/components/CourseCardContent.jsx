import codingIcon from "../assets/icon/icons8-laptop-coding-48.png";

const CourseCardIcon = ({ course }) => {
  const title = course.toLowerCase();
  const iconClassName = "w-7 h-7 text-white";

  if (title.includes("html") || title.includes("css")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (title.includes("javascript")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 3h14v18H5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <text x="7" y="16" fill="currentColor" fontSize="8" fontWeight="700">JS</text>
      </svg>
    );
  }

  if (title.includes("react")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (title.includes("university")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3.5 3 8.5 3 12 0v-5m4-2v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (title.includes("beginner")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18h6m-5 3h4m-2-19a7 7 0 0 0-4 12.75c.6.4 1 1 1 1.75h6c0-.75.4-1.35 1-1.75A7 7 0 0 0 12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (title.includes("developer")) {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m7 9 3 3-3 3m6 0h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

const CourseCardContant = ({ course, description }) => (
  <div className="flex flex-col gap-3">
    <div className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-(--color-brand-400)">
      <CourseCardIcon course={course} />
    </div>
    <div className="flex flex-col flex-nowrap gap-2">
      <h2 className="text-label">{course}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default CourseCardContant;