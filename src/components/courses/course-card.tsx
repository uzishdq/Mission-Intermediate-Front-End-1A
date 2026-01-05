import { memo } from "react";
import type { Course } from "../../data/constant";

interface ICourseCard {
  course: Course;
}

function CourseCard({ course }: Readonly<ICourseCard>) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 will-change-transform">
      <div className="relative hidden aspect-4/3 w-full overflow-hidden md:block">
        <img
          src={course.img}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-row gap-4 p-4 md:flex-col md:gap-3">
        <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl md:hidden">
          <img
            src={course.img}
            alt={course.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-gray-900 md:text-lg">
            {course.title}
          </h3>

          <p className="hidden text-sm leading-relaxed text-gray-600 md:line-clamp-3 md:block">
            {course.desc}
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://placehold.co/40x40?text=JO"
              alt={course.instructor}
              className="h-10 w-10 rounded-xl object-cover ring-1 ring-gray-200"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                {course.instructor}
              </span>
              <span className="text-xs text-gray-500">{course.job}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 md:px-4 md:py-3">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-amber-500">★★★★☆</span>
          <span className="font-medium text-gray-600">
            {course.rating}
            <span className="text-gray-400">({course.reviews})</span>
          </span>
        </div>

        <div className="text-lg font-bold text-primary">Rp {course.price}</div>
      </div>
    </div>
  );
}

export default memo<ICourseCard>(CourseCard);
